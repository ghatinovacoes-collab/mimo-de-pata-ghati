import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, resolve, sep } from 'node:path';
const root = resolve(process.cwd());
const mime = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.svg':'image/svg+xml','.webp':'image/webp','.jpg':'image/jpeg','.woff2':'font/woff2','.txt':'text/plain; charset=utf-8'};
createServer(async(req,res)=>{
  try {
    const url = new URL(req.url,'http://localhost');
    const path = resolve(root, '.' + decodeURIComponent(url.pathname === '/' ? '/index.html' : url.pathname));
    if (!path.startsWith(root + sep)) { res.writeHead(403); res.end(); return; }
    const body = await readFile(path); res.writeHead(200, {'Content-Type':mime[extname(path)] || 'application/octet-stream'}); res.end(body);
  } catch { res.writeHead(404); res.end('Página não encontrada'); }
}).listen(4173,'127.0.0.1',()=>console.log('Local: http://127.0.0.1:4173'));
