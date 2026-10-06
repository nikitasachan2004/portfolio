// Vercel Serverless Function: /api/visitors
// Uses Vercel KV if connected, or seamlessly falls back to persistent hosted CountAPI.

const START_COUNT = 313;
const COUNTER_KEY = 'nikitasachan_portfolio_visitors_global';

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const kvUrl = process.env.KV_REST_API_URL;
  const kvToken = process.env.KV_REST_API_TOKEN;

  try {
    // 1. If Vercel KV is configured, use it
    if (kvUrl && kvToken) {
      if (req.method === 'POST') {
        const response = await fetch(`${kvUrl}/incr/${COUNTER_KEY}`, {
          headers: { Authorization: `Bearer ${kvToken}` },
        });
        const data = await response.json();
        const count = typeof data.result === 'number' ? data.result : 1;
        return res.status(200).json({ count, total: START_COUNT + count });
      } else {
        const response = await fetch(`${kvUrl}/get/${COUNTER_KEY}`, {
          headers: { Authorization: `Bearer ${kvToken}` },
        });
        const data = await response.json();
        const count = Number(data.result) || 0;
        return res.status(200).json({ count, total: START_COUNT + count });
      }
    }

    // 2. Seamless persistent cloud counter fallback (zero manual DB setup required)
    const action = req.method === 'POST' ? 'hit' : 'get';
    const fallbackUrl = `https://countapi.mileshilliard.com/api/v1/${action}/${COUNTER_KEY}`;
    
    const response = await fetch(fallbackUrl, {
      method: 'GET',
      headers: { 'Accept': 'application/json' },
    });

    if (response.ok) {
      const data = await response.json();
      const count = Number(data.value) || 0;
      return res.status(200).json({ count, total: START_COUNT + count });
    }

    return res.status(200).json({ count: 0, total: START_COUNT });
  } catch {
    return res.status(200).json({ count: 0, total: START_COUNT });
  }
}
