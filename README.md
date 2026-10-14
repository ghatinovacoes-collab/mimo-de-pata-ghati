# Mimo de Pata

Landing page demonstrativa de um petshop fictício especializado em banho e tosa, desenvolvida para o portfólio da **Ghati Inovações**.

## Execução

Requer Node.js 20 ou superior. Não há dependências de produção, framework ou backend.

```sh
npm run dev
npm run check
npm run build
```

A prévia abre em `http://127.0.0.1:4173`. O build copia os arquivos públicos para `dist/`. A configuração da Vercel está em `vercel.json`.

## Experiência

- Seleção de quatro serviços com descrição, chamada e escolha do formulário sincronizadas.
- Formulário local com validação e preparação de mensagem. Cópia para a área de transferência, com orientação alternativa quando a permissão é negada.
- Menu mobile e galeria com dialogs nativos, tecla Escape e retorno de foco.
- FAQ com `details` e `summary`, navegação por âncoras, foco visível e link para pular ao conteúdo.
- Prévia interativa e identificada como Instagram demonstrativo.
- Animações discretas com respeito a `prefers-reduced-motion`.
- Fotos WebP e fontes WOFF2 locais, prioridade para a foto principal e imagem de compartilhamento.

## Contatos e privacidade

Destinos centralizados em `config.js`. O número autorizado `5513978143448` é exclusivamente o WhatsApp da Ghati, nas chamadas “Quero um site assim”. O petshop não possui canais reais. O formulário não envia mensagens, confirma horários, coleta analytics nem persiste dados. O Instagram abre uma prévia local enquanto não houver um perfil autorizado.

Todos os dados do petshop, incluindo endereço, história, horários e depoimentos, são fictícios. Isso aparece na interface e nos metadados. Não há dados estruturados de estabelecimento real.

## Direção visual

A referência fornecida inspirou a relação entre título expressivo e animal protagonista, com uma identidade própria em azul claro, verde bebê e verde escuro. Baloo 2 traz calor aos títulos; Figtree mantém leitura e controles claros. As duas são sans-serif. Eixos de peso confirmados na documentação oficial: Baloo 2, 400–800; Figtree, 300–900. Não foi presumido suporte a outros eixos.

O símbolo original usa formas simples de um companheiro de quatro patas. Seu olho e sorriso claros são cores intencionais, não recortes; o SVG mantém traço para o uso digital. A logo da Ghati é o arquivo fornecido pelo usuário, preservado em cores e proporções.

## Origem dos assets

Fotografias ilustrativas de banco, sem alegação de que retratam clientes, equipe, instalações ou serviços efetivamente realizados.

| Arquivo | Autor / fonte | Origem |
|---|---|---|
| `hero.webp` | Victor G / Unsplash | https://unsplash.com/photos/golden-retriever-x5oPmHmY3kQ |
| `banho.webp` | Goochie Poochie Grooming / Pexels | https://www.pexels.com/photo/washing-dog-at-saloon-19145881/ |
| `tosa.webp` | Goochie Poochie Grooming / Pexels | https://www.pexels.com/photo/groomer-cutting-dogs-hair-19145898/ |
| `cuidado.webp` | Tima Miroshnichenko / Pexels | https://www.pexels.com/photo/a-groomer-cutting-hair-of-a-yorkshire-terrier-using-scissor-6131579/ |
| `gato.webp` | Omar Ramadan / Pexels | https://www.pexels.com/photo/portrait-of-cat-with-blue-eyes-5332796/ |
| `amigos.webp` | Chevanon Photography / Pexels | https://www.pexels.com/photo/two-yellow-labrador-retriever-puppies-1108099/ |
| `secagem.webp` | Tima Miroshnichenko / Pexels | https://www.pexels.com/photo/woman-drying-a-wet-dog-with-a-towel-6131155/ |

Licenças consultadas em 14/10/2026: [Unsplash](https://unsplash.com/license) e [Pexels](https://www.pexels.com/license/). Os assets foram redimensionados e convertidos para WebP, sem geração de animais por IA. As fontes são distribuídas sob a SIL Open Font License; textos completos estão em `assets/*-OFL.txt`. Fontes: [Baloo 2 / Ek Type](https://github.com/EkType/Baloo2) e [Figtree / Erik Kennedy](https://github.com/erikdkennedy/figtree). Créditos públicos também em `creditos.html`.

## Verificação

Os checks estáticos validam sintaxe JavaScript, IDs únicos, âncoras, existência de assets, idioma e assinatura. A verificação de navegador e publicação está registrada em `VERIFICACAO.md`.
