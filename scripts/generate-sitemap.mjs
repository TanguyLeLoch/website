// Generates dist/website/browser/sitemap.xml from Angular's prerender manifest.
// Routes whose prerendered HTML is identical to an already-included route
// (i.e. client-side redirects) are skipped automatically.
import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BASE_URL = 'https://tanguyleloch.com';
const DIST = 'dist/website';
const BROWSER = join(DIST, 'browser');

const { routes } = JSON.parse(readFileSync(join(DIST, 'prerendered-routes.json'), 'utf8'));

const seen = new Set();
const urls = [];

for (const route of Object.keys(routes).sort((a, b) => a.length - b.length)) {
  const html = readFileSync(join(BROWSER, route, 'index.html'), 'utf8');
  if (html.includes('http-equiv="refresh"')) continue;
  const hash = createHash('sha256').update(html).digest('hex');
  if (seen.has(hash)) continue;
  seen.add(hash);
  urls.push(`${BASE_URL}${route === '/' ? '/' : route}`);
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((loc) => `  <url>
    <loc>${loc}</loc>
    <lastmod>${new Date().toISOString().slice(0, 10)}</lastmod>
  </url>`).join('\n')}
</urlset>
`;

writeFileSync(join(BROWSER, 'sitemap.xml'), xml);
console.log(`sitemap.xml: ${urls.length} URL(s)`, urls);
