// Vercel Serverless Function: /api/visitors
// Uses Vercel KV / Upstash Redis for global persistent counts.

const START_COUNT = 313;
const COUNTER_KEY = 'portfolio_visitors_count';

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

  // Graceful fallback if Vercel KV is not connected yet
  if (!kvUrl || !kvToken) {
    return res.status(200).json({ count: 0, total: START_COUNT });
  }

  try {
    if (req.method === 'POST') {
      // Atomic increment command on KV REST API
      const response = await fetch(`${kvUrl}/incr/${COUNTER_KEY}`, {
        headers: { Authorization: `Bearer ${kvToken}` },
      });
      const data = await response.json();
      const count = typeof data.result === 'number' ? data.result : 1;
      return res.status(200).json({ count, total: START_COUNT + count });
    } else {
      // Fetch current count on KV REST API
      const response = await fetch(`${kvUrl}/get/${COUNTER_KEY}`, {
        headers: { Authorization: `Bearer ${kvToken}` },
      });
      const data = await response.json();
      const count = Number(data.result) || 0;
      return res.status(200).json({ count, total: START_COUNT + count });
    }
  } catch {
    return res.status(200).json({ count: 0, total: START_COUNT });
  }
}
