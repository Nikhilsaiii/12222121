// src/utils/api.ts
const BASE_URL = 'http://localhost:3000/api';

export const shortenUrl = async ({ longUrl, shortcode, validity }) => {
  const res = await fetch(`${BASE_URL}/shorten`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ longUrl, shortcode, validity }),
  });
  if (!res.ok) throw new Error('Shorten failed');
  return await res.json();
};

export const getAllShortenedUrls = async () => {
  const res = await fetch(`${BASE_URL}/analytics`);
  if (!res.ok) throw new Error('Failed to fetch analytics');
  return await res.json();
};
