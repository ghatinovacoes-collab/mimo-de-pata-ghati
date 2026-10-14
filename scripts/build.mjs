import { mkdir, cp, rm, stat } from 'node:fs/promises';
const root = new URL('../', import.meta.url);
const dist = new URL('../dist/', import.meta.url);
await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });
for (const file of ['index.html', 'styles.css', 'app.js', 'config.js', 'creditos.html', 'robots.txt', 'assets']) await cp(new URL(file, root), new URL(file, dist), { recursive: true });
console.log('Build estático concluído: HTML, CSS, JavaScript e assets locais em dist/.');
console.log(`Página principal: ${(await stat(new URL('index.html', dist))).size} bytes.`);
