import React, { useEffect, useState } from 'react';
import { Eye } from 'lucide-react';

const START_COUNT = 313;
const SESSION_STORAGE_KEY = 'portfolio_visit_logged';
const CACHE_COUNT_KEY = 'portfolio_last_known_count';

export const VisitorCounter: React.FC = () => {
  const [count, setCount] = useState<number>(() => {
    const cached = sessionStorage.getItem(CACHE_COUNT_KEY);
    return cached ? Number(cached) : START_COUNT;
  });
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3500);

    const checkAndLogVisit = async () => {
      try {
      const metaEnv = (import.meta as { env?: { DEV?: boolean; VITE_COUNTER_API_URL?: string } }).env;

      const isLocal =
        window.location.hostname === 'localhost' ||
        window.location.hostname === '127.0.0.1' ||
        Boolean(metaEnv?.DEV);

      const isBot =
        Boolean(navigator.webdriver) ||
        /bot|crawler|spider|crawling/i.test(navigator.userAgent || '');

      const alreadyCountedInSession = Boolean(
        sessionStorage.getItem(SESSION_STORAGE_KEY)
      );

      // Determine if we should increment or just fetch
      const shouldIncrement = !isLocal && !isBot && !alreadyCountedInSession;

      const endpoint = metaEnv?.VITE_COUNTER_API_URL || '/api/visitors';

        let response: Response;

        if (shouldIncrement) {
          response = await fetch(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            signal: controller.signal,
          });
          // Mark session as counted
          sessionStorage.setItem(SESSION_STORAGE_KEY, 'true');
        } else {
          response = await fetch(endpoint, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            signal: controller.signal,
          });
        }

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }

        const data = await response.json();
        // Server returns total (which incorporates START_COUNT) or count
        const total =
          typeof data.total === 'number'
            ? data.total
            : START_COUNT + (Number(data.count) || 0);

        if (isMounted && !Number.isNaN(total)) {
          setCount(total);
          setHasLoaded(true);
          sessionStorage.setItem(CACHE_COUNT_KEY, total.toString());
        }
      } catch {
        // Silent failure handling: retain current/fallback count without console noise
        if (isMounted) {
          setHasLoaded(true);
        }
      } finally {
        clearTimeout(timeoutId);
      }
    };

    checkAndLogVisit();

    return () => {
      isMounted = false;
      controller.abort();
      clearTimeout(timeoutId);
    };
  }, []);

  const formattedCount = count.toLocaleString('en-US');

  return (
    <div
      className="absolute bottom-2.5 sm:bottom-3 left-3 sm:left-auto sm:right-4 md:right-6 z-30 pointer-events-auto"
      role="status"
    >
      <div
        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-mono text-[10px] sm:text-[11px] font-bold tracking-tight bg-white/90 dark:bg-[#1E2230]/90 text-black dark:text-white border border-black/20 dark:border-white/20 shadow-xs backdrop-blur-xs select-none transition-transform duration-200 hover:scale-105 cursor-default"
        aria-label={`Total visitors: ${formattedCount}`}
        title={`Total visitors: ${formattedCount}`}
      >
        <Eye
          size={12}
          className="text-black/60 dark:text-white/60 shrink-0"
          aria-hidden="true"
        />
        <span
          className={`tabular-nums transition-opacity duration-300 motion-reduce:transition-none ${
            hasLoaded ? 'opacity-100' : 'opacity-90'
          }`}
        >
          {formattedCount}
        </span>
      </div>
    </div>
  );
};
