# Portfólio — Natalia Barros Silva

Site pessoal de Engenheira de Software e Tech Lead, com projetos, experiência
profissional e soluções de tecnologia. Implementado em HTML, CSS e JavaScript
nativos, sem dependências de instalação ou etapa de build.

## Executar localmente

Com Python 3 disponível, execute na raiz do repositório:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Acesse o servidor local na porta 8000 em um navegador. Use HTTP para carregar
os módulos JavaScript; abrir `index.html` diretamente como arquivo não é o fluxo
recomendado. Encerre o servidor com `Ctrl+C`.

Google Fonts (Saira) é carregado externamente, com fonte de fallback para redes
restritas. As animações opcionais usam APIs nativas do navegador, respeitam
movimento reduzido e não ocultam conteúdo. Não há dependência da CDN ScrollReveal.
O hero é estático; sem JavaScript, o menu móvel permanece como uma lista de links.

## Arquivos e estilos

- `index.html`: conteúdo e navegação da página única.
- `assets/css/style.css`: **CSS efetivamente servido e fonte de edição do layout atual**.
- `assets/js/main.js`: inicialização do menu e das animações de seções.
- `assets/js/menu.js`: estado do menu móvel, teclado e troca de breakpoint.
- `assets/js/scrollReveal.js`: aprimoramento visual opcional com APIs nativas.
- `assets/image/`: retrato e capturas dos projetos.

O retrato usa variantes WebP, com PNG original como fallback. Os arquivos
originais e os links para as capturas completas foram preservados.

Os arquivos em `assets/scss/` e `assets/css/style.css.map` pertencem a uma versão
anterior e divergem do CSS atual. **Não recompile o SCSS sobre
`assets/css/style.css`**: isso pode substituir o layout em uso. Não há pipeline
Sass configurado neste projeto.

## Verificar alterações

Confira navegação e layout em 320, 390, 768, 900, 901, 1120 e 1440 px. Abra o menu
no mobile e amplie para desktop: a rolagem deve continuar funcionando. Escape
deve fechar e devolver foco ao botão somente quando o menu estiver aberto.
Verifique também os destinos das âncoras e o texto pré-preenchido do WhatsApp,
sem enviar mensagens.

Para verificar a sintaxe dos módulos ativos, com Node.js disponível:

```sh
node --check assets/js/main.js
node --check assets/js/menu.js
node --check assets/js/scrollReveal.js
```

Não há suíte de testes ou build configurado. O plano editorial e as fases
seguintes estão em `PORTFOLIO_REDESIGN_PLAN.md`. Execução local não publica
alterações; a configuração de deploy não é modificada por esses comandos.

## SEO e compartilhamento

O `index.html` mantém title, description, canonical, Open Graph, Twitter Card e
JSON-LD de `Person`. Nome público: **Natalia Barros Silva**; posicionamento:
**Engenheira de Software e Tech Lead**. Serviços e projetos estão no HTML e podem
ser lidos sem JavaScript. Não há páginas adicionais para palavras-chave.

A imagem `assets/image/social-preview.png` tem **1200×630**, com o nome, profissão
e referência a sistemas, integrações e soluções digitais. Foi criada com ferramenta
de geração de imagem e dimensionada com Canvas do Chromium; o texto final foi
conferido visualmente. É uma composição tipográfica, sem retrato, marcas de clientes
ou evidências fictícias. Open Graph declara MIME, dimensões e texto alternativo;
Twitter usa `summary_large_image`. A imagem não é carregada no corpo da página.
As prévias reais dependem da publicação e do cache de cada plataforma.

`manifest.json` usa o mesmo nome e descrição. Os ícones existentes foram preservados:
SVG com MIME `image/svg+xml` e PNG de 512×512. O PNG declara apenas `purpose: any`,
pois sua área segura para recortes maskable não foi comprovada. Não há service worker
nem suporte offline implementado; o manifesto não comprova uma PWA completa.

## Publicação manual no GitHub Pages

**Destino esperado:** `https://natyesilva.github.io/`. O remote `origin` aponta para
`natyesilva/natyesilva.github.io`, coerente com esse endereço e com canonical,
Open Graph, robots e sitemap. Não há `CNAME` nem workflow de publicação versionado.
Isso não comprova a fonte configurada em Pages. A consulta à API de Pages foi
bloqueada pelo proxy do ambiente (CONNECT 403); branch, pasta e método de deploy
continuam pendentes de confirmação. Nenhuma configuração foi alterada.

1. Revise o diff completo: há alterações acumuladas das fases anteriores. Confirme
   quais arquivos serão publicados, incluindo os WebP e a nova imagem social.
2. Em **Settings → Pages → Build and deployment**, confira a fonte existente.
   Se for **Deploy from a branch**, confirme branch e pasta: os arquivos deste
   projeto ficam na raiz, mas não presuma que `main` já é a fonte configurada.
   Se for **GitHub Actions**, identifique o workflow efetivamente utilizado antes
   de publicar; não há workflow local para reproduzir esse processo.
3. Execute o servidor local e os smoke tests abaixo. Não existe comando de build
   da aplicação nem dependência a instalar. Preserve o CSS servido; não compile SCSS.
4. Somente após decidir publicar, faça commit/push ou merge na fonte confirmada,
   conforme o fluxo do repositório, e acompanhe o resultado em Pages/Actions.
   Esta documentação não executa essas ações.
5. Após a publicação, confira o endereço HTTPS público e os testes abaixo.
   O `lastmod` atual do sitemap foi preservado; não o avance pela data de uma
   execução local. Atualize-o somente para uma alteração substantiva realmente
   publicada e verificável. Se a data histórica não puder ser comprovada, esse
   campo opcional pode ser removido em uma revisão autorizada.

### Smoke test local e após publicação

- [ ] Página, CSS, módulos JS, retrato e dez capturas carregam sem 404 ou erros JS.
- [ ] Testar 320, 390, 768, 900, 901, 1120 e 1440 px, sem overflow horizontal.
- [ ] Menu abre/fecha por teclado; Escape restaura foco; abrir no mobile e ampliar
      para desktop libera rolagem; as cinco âncoras chegam às seções corretas.
- [ ] Expansões dos projetos funcionam por Enter, Espaço e toque; serviços,
      projetos, histórico, formação e contatos continuam presentes sem JS.
- [ ] Número e mensagem codificada do WhatsApp, LinkedIn e links dos projetos
      estão corretos; não é necessário enviar mensagem para testar.
- [ ] Uma única ocorrência de title, description, canonical e cada propriedade
      social; JSON-LD válido, um H1, manifesto válido e ícones com MIME correto.
- [ ] `robots.txt`, `sitemap.xml` e `assets/image/social-preview.png` respondem
      HTTP 200; imagem social tem 1200×630 e é acessível sem autenticação.
- [ ] **Somente no ambiente público:** confirmar certificado/URL final, recursos
      Google Fonts, links externos e correspondência entre canonical e publicação.
- [ ] **Somente após publicar:** inspecionar a URL no LinkedIn Post Inspector e
      conferir a prévia do WhatsApp sem enviar mensagens; verificar nome, descrição,
      imagem e recorte. Aguardar/investigar caches quando exibirem a versão antiga.

Os testes locais não validam indexação, ranking, rich results ou prévias reais das
plataformas. Não foram adicionados analytics, cookies ou dependências.
