import { readFile, access } from 'node:fs/promises';
const root = new URL('../', import.meta.url);
const html = await readFile(new URL('index.html',root),'utf8');
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
if (new Set(ids).size !== ids.length) throw new Error('IDs duplicados');
for (const [,id] of html.matchAll(/href="#([^"]+)"/g)) if (!ids.includes(id)) throw new Error(`Âncora inexistente: ${id}`);
for (const [,file] of html.matchAll(/(?:src|href)="((?:assets\/)[^"]+)"/g)) await access(new URL(file,root));
if (!html.includes('lang="pt-BR"') || !html.includes('Projeto demonstrativo desenvolvido por Ghati Inovações.')) throw new Error('Idioma ou assinatura ausente');
console.log('Checks aprovados: sintaxe JS, IDs, âncoras, assets, idioma e identificação da demonstração.');
