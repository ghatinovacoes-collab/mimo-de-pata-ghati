# Verificação da entrega

Data: 14/10/2026. Navegadores: Chromium (Playwright) e navegador integrado do Codex para inspeção visual.

## Checks locais aprovados

- `npm run check`: sintaxe JavaScript, IDs únicos, âncoras, arquivos de imagens e fontes, idioma e identificação demonstrativa.
- `npm run build`: build estático completo, sem dependências de produção.
- Layouts de 320, 390, 768, 1440 e 1920 pixels: sem rolagem horizontal; fotografias carregadas.
- Quatro serviços: estado selecionado, descrição, CTA e escolha do formulário sincronizados.
- Formulário: campos obrigatórios, nomes formados apenas por espaços, mensagem preparada, cópia real no clipboard e invalidação da prévia após alterações.
- WhatsApp: URL e texto autorizados da Ghati conferidos, com rótulo próprio; nenhum contato fictício aponta para um telefone real.
- Instagram local: seleção de foto e legenda, identificação demonstrativa e fechamento por Escape.
- FAQ: abrir e fechar por mouse e teclado.
- Galeria: ampliar, fechar por botão e Escape, contenção e retorno de foco.
- Menu mobile e âncoras: navegação funcional abaixo do cabeçalho fixo.
- Botão flutuante: ocultação no contato e rodapé, e quando seu espaço cruza texto ou controles.
- Movimento reduzido, skip link e acesso por teclado.
- Console, erros de JavaScript e respostas HTTP: nenhum erro durante a suíte local final.

Contraste dos pares opacos: texto secundário `#46615c` sobre verde `#d1eccf`, 5,315:1; texto branco sobre botão `#224c43`, 9,620:1. São verificações dos pares, não uma certificação integral de acessibilidade.

## Limites da verificação

Não foi realizado teste com leitor de tela ou dispositivos físicos. Os viewports foram emulados no navegador. Não há envio nem reserva reais para testar, pois o projeto prepara mensagens apenas localmente. Não foi enviada mensagem à Ghati durante a verificação.

## Publicação

**URL pública:** https://mimo-de-pata-ghati.vercel.app

**Resultado:** READY em produção. Deployment: `dpl_9HtujTg2rrJKaqaZtWMKknbx9mUt`. Código publicado: commit local `e607168`.

A mesma suíte completa foi repetida no endereço público, em uma nova sessão do Chromium sem autenticação na Vercel. Resultado: **PASS**, incluindo as cinco larguras de tela, carregamento de fotografias e fontes, validação e cópia real de mensagem, serviços, menu, âncoras, FAQ, galeria, Instagram demonstrativo, teclado e movimento reduzido. Nenhum erro de console, execução ou resposta HTTP na suíte publicada.

Projeto Vercel próprio: `ghata/mimo-de-pata-ghati`, plano Hobby. Não houve contratação de recursos pagos nem alterações em outros projetos.

Repositório: https://github.com/ghatinovacoes-collab/mimo-de-pata-ghati

O envio para o GitHub usa a sessão de navegador autorizada pelo usuário, pois o Git local e o conector estão autenticados em outra conta. O projeto não inclui credenciais nem arquivos `.env` ou `.vercel`.
