import React, { useEffect, useState } from 'react';
import { Eye } from 'lucide-react';

const START_COUNT = 313;
const SESSION_STORAGE_KEY = 'portfolio_visit_logged';
const CACHE_COUNT_KEY = 'portfolio_last_known_count';
const GLOBAL_COUNTER_KEY = 'nikitasachan_portfolio_visitors_global';

export const VisitorCounter: React.FC = () => {
  const [count, setCount] = useState<number>(() => {
    const cached = sessionStorage.getItem(CACHE_COUNT_KEY);
    return cached ? Number(cached) : START_COUNT;
  });
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000);

    const checkAndLogVisit = async () => {
      try {
        const metaEnv = (import.meta as { env?: { DEV?: boolean; VITE_COUNTER_API_URL?: string } }).env;

        // Allow explicit test increment via ?inc=1 in URL for verification
        const hasTestParam = typeof window !== 'undefined' && window.location.search.includes('inc=1');

        const isLocal =
          (window.location.hostname === 'localhost' ||
            window.location.hostname === '127.0.0.1' ||
            Boolean(metaEnv?.DEV)) &&
          !hasTestParam;

        const isBot =
          Boolean(navigator.webdriver) ||
          /bot|crawler|spider|crawling/i.test(navigator.userAgent || '');

        const alreadyCountedInSession = Boolean(
          sessionStorage.getItem(SESSION_STORAGE_KEY)
        ) && !hasTestParam;

        // Determine if we should increment or just fetch
        const shouldIncrement = (!isLocal && !isBot && !alreadyCountedInSession) || hasTestParam;

        // 1. Try local serverless endpoint (/api/visitors) first
        const endpoint = metaEnv?.VITE_COUNTER_API_URL || '/api/visitors';
        let total: number | null = null;

        try {
          const response = await fetch(endpoint, {
            method: shouldIncrement ? 'POST' : 'GET',
            headers: { 'Content-Type': 'application/json' },
            signal: controller.signal,
          });

          if (response.ok) {
            const data = await response.json();
            if (typeof data.total === 'number') {
              total = data.total;
            } else if (typeof data.count === 'number') {
              total = START_COUNT + data.count;
            }
          }
        } catch {
          // Endpoint unavailable (e.g. running local Vite dev server without Vercel CLI)
        }

        // 2. Seamless fallback to global cloud counter if serverless route is not yet deployed or returned error
        if (total === null) {
          const action = shouldIncrement ? 'hit' : 'get';
          const cloudUrl = `https://countapi.mileshilliard.com/api/v1/${action}/${GLOBAL_COUNTER_KEY}`;
          const cloudRes = await fetch(cloudUrl, {
            method: 'GET',
            headers: { 'Accept': 'application/json' },
            signal: controller.signal,
          });

          if (cloudRes.ok) {
            const cloudData = await cloudRes.json();
            const val = Number(cloudData.value);
            if (!Number.isNaN(val)) {
              total = START_COUNT + val;
            }
          }
        }

        if (shouldIncrement) {
          sessionStorage.setItem(SESSION_STORAGE_KEY, 'true');
        }

        if (isMounted && total !== null && !Number.isNaN(total)) {
          setCount(total);
          setHasLoaded(true);
          sessionStorage.setItem(CACHE_COUNT_KEY, total.toString());
        }
      } catch {
        // Retain fallback cleanly without noisy console warnings
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
