# Plano de reposicionamento do portfólio

Data: 9 de outubro de 2026. Base inspecionada: commit `93777a2`.

## 1. Objetivo e limites desta entrega

Preservar Natalia como Engenheira de Software e Tech Lead, tornando mais claro como sua experiência pode ajudar empresas com sites, sistemas, integrações e evolução de software. O site deve continuar útil para recrutadores e lideranças técnicas, e também permitir que uma pessoa sem formação técnica reconheça uma necessidade e inicie uma conversa.

A recomendação é manter uma única página, a identidade pessoal e a stack estática. O reposicionamento depende principalmente de conteúdo, ordem das seções e hierarquia das ações. Não exige framework, CMS, backend, formulário, novas rotas ou identidade de agência.

Esta execução cria somente este documento. Nenhum código da aplicação foi modificado e nenhuma dependência foi instalada. As sugestões de copy são propostas editoriais; não comprovam disponibilidade, serviços já prestados ou resultados de clientes.

### Como a análise foi feita

- Inventário dos arquivos do checkout, incluindo HTML, CSS, os dez arquivos SCSS, seis arquivos JavaScript, source map, manifesto, sitemap, robots, README, ícones e imagens. Não foram encontrados `AGENTS.md`, configuração de CI, manifesto de pacotes ou lockfile no projeto.
- Leitura do conteúdo, das referências entre arquivos e dos módulos executados; análise das dimensões e tamanhos das imagens, XML dos SVGs e metadados do source map.
- Execução local com servidor HTTP temporário e Chromium/Playwright já disponíveis. Verificação em larguras de 320, 390, 768, 900, 901, 1120 e 1440 pixels, com altura de 900 pixels; inspeção das capturas desktop/mobile e de imagens de perfil/veterinários do CuidaPet.
- Verificação do menu, contato por âncora, redimensionamento, movimento reduzido e comportamento sem JavaScript. Não foram enviados contatos ou mensagens.
- Os outros repositórios e as demonstrações externas não foram auditados. As descrições dos projetos são evidência do que o portfólio afirma, não verificação independente de suas implementações.

**Limite da validação visual:** ScrollReveal estava indisponível no navegador desta análise. No onboarding anterior, o acesso a fontes e à biblioteca externa retornou 403. O diagnóstico visual representa esse ambiente e não comprova a aparência com a fonte remota carregada. Não foram medidos Core Web Vitals, conversão, tráfego ou conformidade integral com WCAG. Espaços vazios de imagens lazy nas capturas de página inteira não foram classificados como defeito de carregamento.

## 2. Diagnóstico do estado atual

### 2.1 Stack, arquitetura e publicação

| Área | Estado observado | Consequência para o plano |
| --- | --- | --- |
| Entrada e rotas | `index.html` contém toda a página. Navegação por fragmentos `#s-home`, `#s-about`, `#s-experience`, `#s-skills`, `#s-projects`, `#s-education` e `#s-contact`. `#conteudo` é o destino do skip link. | Reordenar blocos e preservar os IDs existentes; acrescentar apenas a âncora de soluções. |
| Framework | HTML, CSS e JavaScript nativos. Não há React, Next.js ou outro framework em execução neste site. | React, .NET e SAP são competências/projetos apresentados, não dependências do portfólio. |
| Componentes | Blocos HTML reutilizam `.section`, `.grid-layout`, `.section-heading`, `.button`, `.tag-list`, `.skill-card`, `.timeline-item`, `.case-highlight`, `.project-card` e `.contact-panel`. | Reaproveitar padrões e classes; não criar um sistema de componentes ou uma biblioteca de UI. |
| JavaScript ativo | `assets/js/main.js` importa `menu.js`, `scrollReveal.js` e `typeWrite.js`. | Mudanças de markup precisam preservar ou atualizar seletores. |
| Biblioteca externa | ScrollReveal 4.0.9 via `unpkg.com`, incluído ao final do HTML, antes do módulo principal. | É aprimoramento visual, não requisito para ler o conteúdo. Manter a degradação segura existente. |
| Arquivos JS não utilizados | `hoverChangeDescription.js` e `svg-inject.min.js` não são carregados pelo HTML nem importados pelos módulos ativos. | Não reativá-los por conveniência; remoção futura exige conferir referências e licença. |
| Estilo efetivo | `assets/css/style.css`, cerca de 18,4 kB sem compressão; variáveis CSS, Grid, Flexbox e media queries. Fonte Saira remota, com Arial/sans-serif de fallback. | Trabalhar inicialmente no CSS servido. Preservar tokens e responsividade. |
| SCSS e source map | `assets/scss/` contém uma implementação anterior com seletores como `#home-container-text` e `#about-photo`. `style.css.map` referencia esses SCSS; o CSS atual não declara `sourceMappingURL`. | Não há cadeia de build reproduzível que estabeleça esses SCSS como fonte do CSS atual. Compilá-los sobre o CSS servido pode desfazer o layout. |
| Build e dependências | Não há `package.json`, lockfile, script de build, suíte de testes, configuração Jekyll ou workflow versionado. | Servir os arquivos diretamente é suficiente. Não introduzir compilação nesta iniciativa sem necessidade demonstrada. |
| Hospedagem | Conteúdo e URLs apontam para GitHub Pages em `https://natyesilva.github.io/`. | Configurações reais de publicação não estão no checkout; confirmar método de deploy antes da futura entrega. |
| Serviços | Sem backend, banco, formulário, analytics ou service worker no código deste site. Há `manifest.json`. | O manifesto sozinho não comprova suporte offline ou uma PWA completa. Nenhum segredo é necessário para servir o portfólio. |

O arquivo `assets/scss/_services.scss` existe, mas não há seção de serviços no HTML atual. Sua existência não significa que o novo bloco já esteja implementado ou que seu estilo seja compatível com o CSS ativo.

### 2.2 Experiência atual e percurso até o contato

Ordem atual: **Início → Sobre → Experiência → Competências → Projetos → Formação → Contato**.

O topo apresenta nome, especialização técnica e foto. A frase “Transformo processos complexos em soluções organizadas, integradas e fáceis de manter” já aponta para valor, mas não exemplifica quais situações de negócio podem motivar uma conversa.

Existem quatro ações no hero: Ver projetos, GitHub, LinkedIn e WhatsApp. O contato não está escondido: há WhatsApp no início e no fim e uma âncora no menu fixo. O problema é a falta de uma orientação sobre **para que** entrar em contato. GitHub e LinkedIn também retiram o visitante do percurso antes de ele compreender a oferta.

Para recrutadores, a experiência, os cargos, a formação e a stack são fáceis de localizar. Para pequenos negócios, a leitura exige atravessar descrições profissionais e dezenas de tecnologias antes dos exemplos concretos. O contato final reforça “oportunidades profissionais, liderança técnica” e prioriza LinkedIn, sem convite específico para discutir um problema ou projeto.

Na execução local, a página media aproximadamente 6.906 px de altura a 1440 px de largura e 11.121 px a 390 px. A seção de contato começava perto de 6.421 px e 10.298 px, respectivamente. São observações do layout com recursos externos indisponíveis, não métricas de abandono. A âncora do menu permite contornar essa distância; a proposta é melhorar também a leitura sequencial.

### 2.3 Problemas e oportunidades com referências reais

As linhas abaixo se referem à base analisada e podem mudar em implementações futuras.

| Prioridade | Evidência | Impacto e recomendação |
| --- | --- | --- |
| P0 | `index.html:140`, hero e quatro CTAs | A especialização aparece antes de uma necessidade reconhecível. Explicitar a combinação de engenharia, liderança e soluções; estabelecer uma ação principal e uma secundária. |
| P0 | `index.html:219`, `:254`, `:312`, `:407` | Currículo e stack precedem evidência de aplicação. Inserir soluções após o hero e antecipar projetos, preservando experiência e competências mais adiante. |
| P0 | `index.html:742`, contato | Linguagem voltada a carreira e “conversas sobre tecnologia” não orienta um briefing inicial. Separar discretamente conversa sobre projeto e oportunidade profissional. |
| P0 | `assets/js/menu.js:34`, `assets/css/style.css:43` e breakpoint de 900 px | Reproduzido: abrir menu a 390 px e ampliar para 1440 px mantém `body.nav-open` e `overflow: hidden`. Sincronizar estado ao sair do breakpoint móvel. |
| P1 | `assets/js/menu.js:46` | Escape chama fechamento e foco no botão sem verificar se o menu está aberto. Restringir o tratamento ao estado aberto para evitar mudanças de foco inesperadas. |
| P1 | `assets/js/typeWrite.js:6`, `assets/js/scrollReveal.js:6`, `assets/css/style.css:1108` | O CSS contempla movimento reduzido, mas o JS não consulta essa preferência. Reproduzida digitação parcial mesmo com `reduce`; o comportamento da biblioteca carregada permanece a verificar. Preferir texto estático e animações opcionais. |
| P1 | `assets/css/style.css:945`, `assets/js/menu.js` | Sem JS, o menu móvel fica invisível. Os links de contato e todo o conteúdo continuam no documento. Oferecer navegação básica acessível sem depender do módulo. |
| P1 | `index.html:407`, `:602` | CuidaPet já tem problema/solução, mas os demais projetos enfatizam stack. Padronizar contexto, contribuição, solução, capacidade demonstrada e limites, sem inventar resultados. |
| P1 | `index.html:487`, `.screenshot-strip` no CSS | Dez imagens de uma única aplicação recebem muito espaço; não há controle explícito de navegação da faixa. Priorizar capturas que expliquem o fluxo e verificar teclado, toque, foco e legibilidade antes de escolher eventual expansão. |
| P1 | `assets/css/style.css:1057` | A foto é ocultada até 700 px. Isso economiza espaço, mas remove um elemento de confiança pessoal no mobile. Avaliar retrato menor sem empurrar proposta e CTAs para baixo. |
| P1 | `assets/css/style.css:380` | WhatsApp verde e botão primário roxo competem visualmente. Usar o sistema de botões atual com prioridade definida; o rótulo e o ícone podem identificar o canal sem um segundo destaque dominante. |
| P1 | `manifest.json`, `index.html:6`, `:69`, `:102` | Manifesto usa “Natalia Elisa de Barros Silva” e “Natalia Elisa”; página usa “Natalia Barros Silva”. Confirmar nome público preferido e alinhar metadados. Não inferir que uma forma seja incorreta. |
| P1 | `index.html:31`, `:44`, `:60` | Compartilhamento usa logo quadrado 512×512; pode comunicar pouco da atuação. Avaliar cartão social com nome e posicionamento. Corrigir declaração `image/x-icon` de um SVG para `image/svg+xml`. |
| P1 | `index.html:205`, `assets/image/natalia.png` | HTML declara 460×560, mas a imagem é 447×559, cerca de 206 kB. Ajustar proporção intrínseca e medir impacto; não atribuir CLS sem medição. |
| P1 | `index.html:53`, `:806`, `assets/js/scrollReveal.js` | Fontes e animações dependem de serviços externos. Neste ambiente ScrollReveal não carregou; o fallback evitou exceção JS. Testar fonte fallback e conteúdo legível com falhas de rede; não confundir bloqueio do ambiente com falha do site publicado. |
| P2 | `README.md`, `assets/scss/`, `assets/css/style.css.map` | README contém apenas o título. Falta orientação sobre execução e fonte de estilos. Documentar CSS efetivo e separar limpeza de legado das alterações de conteúdo. |
| P2 | `assets/icons/iuricode-logo-footer.svg`, `assets/image/logo-svg-lab.svg`, SCSS legado | Há referências herdadas de outra identidade, sem carregamento na página atual. Revisar origem/licenças antes de remover ou reutilizar; não concluir que sejam problema visível hoje. |

### 2.4 Textos que precisam de ajuste

| Trecho atual | Leitura crítica | Direção |
| --- | --- | --- |
| “Olá, eu sou Natalia Barros Silva.” | Pessoal e acessível, mas ocupa o principal título sem esclarecer a atuação para um negócio. | Preservar nome e proximidade; acrescentar uma promessa de atuação concreta, sem garantia de resultado. |
| “especializada em .NET, SAP Business One, APIs e integrações empresariais” | Credibilidade técnica relevante; pode parecer restrito a SAP e difícil para clientes pequenos. | Manter no resumo técnico/experiência; no topo falar também de aplicações e processos. |
| “soluções organizadas, integradas e fáceis de manter” | Boa direção, porém ampla e sem exemplos. | Conectar a sistemas que não conversam, tarefas manuais e ferramentas sob medida. |
| “Stack organizada por área de atuação” | Descreve a organização da página, não sua utilidade. | “Experiência técnica para construir e evoluir sistemas”, com tecnologias como evidência secundária. |
| “Projetos selecionados por relevância técnica e contexto verificável” | Tom de justificativa editorial, pouco natural para o visitante. | “Soluções na prática” ou “Projetos e decisões de engenharia”. |
| “idempotência no consumo de mensagens”, “RLS”, “/app” | Úteis para avaliação técnica, mas exigem conhecimento prévio. A rota pertence ao CuidaPet, não ao portfólio. | Explicar primeiro a capacidade: acompanhar status e controlar acesso. Manter a decisão técnica em camada secundária. |
| “Para oportunidades profissionais, liderança técnica...” | Direciona o contato quase exclusivamente a carreira. | Convidar a explicar uma necessidade e manter um caminho explícito para oportunidades profissionais. |

### 2.5 Acessibilidade, responsividade, performance e SEO

**Preservar:** `lang="pt-BR"`, único H1, landmarks, títulos de seção, skip link, texto alternativo nas imagens informativas, ícones decorativos com `alt=""`, foco visível, botão móvel de 44×44 px, botões principais com pelo menos 48 px de altura, `aria-expanded`, fechamento por Escape, `rel="noopener noreferrer"`, imagens de galeria com dimensões e `loading="lazy"`.

**Responsividade observada:** não houve overflow horizontal do documento nas sete larguras testadas. Isso não comprova ausência de todo recorte: `body` usa `overflow-x: hidden`, e a galeria rola internamente. Verificar zoom, textos ampliados, orientação e elementos individuais na implementação. A mudança para uma coluna em 1120 px e o retrato alto entre 701–1120 px merecem atenção ao tamanho do hero.

**Acessibilidade pendente:** corrigir estado/foco do menu e preferência de movimento; testar galeria com teclado e leitores de tela; verificar contraste de todos os estados, inclusive textos secundários e transparências. Não recomendar focus trap por padrão: decidir primeiro se o menu será uma navegação expansível ou um diálogo modal. O desenho atual se aproxima de navegação expansível.

**Performance:** a arquitetura estática é favorável. As dez capturas JPEG totalizam 457.048 bytes e medem 600×1335; a logo PNG tem 216.032 bytes. O retrato é candidato a otimização responsiva, mas não há medição que identifique o LCP. Preservar lazy loading abaixo da dobra, corrigir dimensões, avaliar WebP/AVIF e variantes somente com comparação visual. Arquivos legados não referenciados não aumentam automaticamente o download da página. Não prometer ganhos pela simples remoção deles.

**SEO atual:** title, description, canonical, Open Graph, Twitter Card, robots, sitemap e JSON-LD `Person` já existem. O conteúdo está no HTML e não depende de renderização por framework. A lacuna principal é conteúdo de serviços com vocabulário de busca natural, além da consistência do nome e da apresentação social.

Não há necessidade de páginas por tecnologia/cidade ou repetição de palavras-chave. `meta keywords` não deve ser tratado como recurso de ranqueamento. Manter `Person`; não inventar `Organization`, endereço comercial, avaliações, clientes ou `LocalBusiness`. O `lastmod` atual do sitemap é `2026-08-06`: atualizar apenas quando houver alteração substantiva publicada, não para simular atualização frequente. Fragmentos internos não viram URLs separadas no sitemap.

## 3. Pontos fortes que devem ser preservados

- Identidade pessoal, foto, nome e título Tech Lead, sem marca de agência ou linguagem no plural.
- Histórico profissional com cargos, períodos e responsabilidades; experiência empresarial em APIs, SAP, manutenção, arquitetura e liderança.
- Formação e certificações, mantendo as informações existentes até confirmação de eventuais correções.
- CuidaPet como exemplo visual de problema, solução e decisões técnicas, com status explícito de MVP em evolução.
- Distinção já existente entre MVP e laboratório técnico; não apresentar WebSocket Server como produto comercial implantado.
- GitHub e LinkedIn como evidências de atuação e canais para recrutamento; WhatsApp como conversa direta.
- Base visual escura com roxo/turquesa, espaçamento consistente, tokens e padrões reutilizáveis.
- Simplicidade de publicação e funcionamento do conteúdo mesmo sem ScrollReveal.

## 4. Arquitetura de informação proposta

Uma única página, com navegação **Início · Soluções · Projetos · Sobre · Contato**. Experiência, competências e formação permanecem no agrupamento editorial “Sobre e experiência”, com os IDs atuais preservados para links diretos.

| Ordem | Bloco e âncora | Conteúdo e intenção | Reuso |
| --- | --- | --- | --- |
| 1 | Início — `#s-home` | Nome, Engenheira de Software e Tech Lead, proposta compreensível, dois CTAs e foto proporcional. | `.hero`, `.hero-grid`, `.hero-actions`, `.profile-media`. |
| 2 | Soluções — novo `#s-services` | Quatro frentes principais e duas complementares; necessidade → atuação → próximo passo. Breve explicação de como começa uma conversa. | `.section`, `.section-heading`, padrão de cards e grid atual; estilos novos no CSS efetivo. |
| 3 | Projetos — `#s-projects` | CuidaPet em destaque, Order Management como segundo caso, portfólio como exemplo web; WebSocket como estudo complementar. | `.case-highlight`, `.case-sections`, `.case-status`, `.project-card`, `.screenshot-strip`. |
| 4 | Sobre e experiência — `#s-about` | Apresentação pessoal e responsabilidade técnica. Experiência em `#s-experience`, competências em `#s-skills` e formação em `#s-education`, mais concisas e sem duplicação. | `.rich-text`, `.timeline`, `.skill-card`, `.education-grid`. |
| 5 | Contato — `#s-contact` | Convite para descrever uma necessidade, WhatsApp e alternativa LinkedIn para carreira; GitHub como evidência complementar. | `.contact-grid`, `.contact-panel`, `.contact-actions`. |

Manter `#conteudo` e o link de retorno ao topo. O menu com cinco entradas continua compatível com a estrutura existente. O link “Sobre” chega ao resumo profissional, de onde a experiência deve estar imediatamente encontrável; não esconder toda a carreira em acordeões.

**Percurso de cliente:** entender atuação → reconhecer uma necessidade em Soluções → ver exemplo e limites → conversar sobre contexto.

**Percurso de recrutador:** reconhecer Tech Lead no hero → acessar Sobre/Experiência ou Projetos → verificar stack, contribuição e GitHub → contatar pelo LinkedIn.

Não criar uma página para cada público. Não impor formulário extenso, modal de orçamento, popup ou WhatsApp flutuante cobrindo conteúdo. Um processo curto pode ser descrito como “Entender o contexto → delimitar escopo e alternativas → combinar próximos passos”, condicionado à forma real de trabalho, sem prometer prazo ou orçamento antes da avaliação.

## 5. Propostas de copy e CTAs

### 5.1 Hero e apresentação

**Identificação:** “Natalia Barros Silva · Engenheira de Software e Tech Lead”. Manter o nome público atual até confirmação.

**Headline recomendada:** “Software para conectar sistemas e simplificar a rotina do seu negócio.”

**Subtítulo:** “Desenvolvo aplicações web, APIs e integrações, combinando experiência prática e liderança técnica para construir e evoluir soluções com clareza.”

**Linha opcional de escopo:** “De uma presença digital a uma ferramenta sob medida, o primeiro passo é entender a necessidade.” Publicar apenas se desenvolvimento de sites de menor escopo fizer parte da oferta desejada.

**Alternativa mais centrada na identidade profissional:** “Engenharia de software e liderança técnica para transformar necessidades em soluções.” É mais ampla; a recomendada ajuda mais o público não técnico.

**Apresentação profissional sugerida:**

> Sou Natalia, Engenheira de Software e Tech Lead. Minha experiência reúne desenvolvimento de aplicações, APIs, integrações e evolução de sistemas, com atuação em C#/.NET, React e no ecossistema SAP. No trabalho técnico e na liderança, participo da definição de soluções, do refinamento de requisitos e do apoio ao time. Gosto de compreender o contexto antes de escolher a tecnologia e tornar as decisões claras para quem usa e mantém o software.

React foi declarado pela profissional e aparece no CuidaPet e no Order Management; não deve ser atribuído automaticamente ao emprego atual. Manter a formação e a cronologia em seus blocos próprios. Não transformar “Engenheira de Software” em alegação de uma graduação específica: a formação descrita continua sendo ADS e pós-graduação em Engenharia de Software.

### 5.2 Soluções e sustentação da oferta

Título de seção: **“Como posso ajudar”**.

Introdução: “Alguns negócios precisam de uma presença digital mais clara. Outros precisam conectar ferramentas ou reduzir tarefas manuais. Posso ajudar a avaliar o cenário e desenvolver uma solução adequada ao contexto.”

| Serviço | Sugestão de copy | Evidência e limite |
| --- | --- | --- |
| Sites e aplicações web | “Uma presença digital para apresentar seu negócio com clareza, ou uma aplicação para apoiar sua operação.” | Portfólio e frontend dos projetos dão sustentação. Não alegar cases de e-commerce, aumento de vendas ou serviços de branding inexistentes. |
| Sistemas e ferramentas sob medida | “Ferramentas para organizar informações, acompanhar atividades e apoiar processos que já não cabem bem nas soluções atuais.” | CuidaPet, Order Management e experiência descrita sustentam o tipo de capacidade; não equivalem a clientes atendidos. |
| APIs e integrações | “Conexão entre plataformas para que informações circulem e etapas não precisem ser repetidas manualmente.” | Forte alinhamento com experiência em APIs, SAP e integrações. Explicar “API” apenas no detalhamento. |
| Automação de processos e planilhas | “Avaliação de tarefas repetitivas para identificar o que pode ser automatizado, incluindo fluxos apoiados em planilhas.” | Jobs, workers e automações foram apresentados; não há caso específico de Excel/Google Sheets neste checkout. Confirmar ferramentas e limites antes de anunciar entregas específicas. |
| Modernização e manutenção | “Evolução de sistemas existentes, com investigação de problemas e melhorias planejadas para o contexto da operação.” | Manutenção e problemas em produção constam da experiência. Não prometer ausência de interrupções ou suporte permanente. |
| Consultoria técnica | “Apoio na análise de uma necessidade, revisão de uma solução e definição de próximos passos técnicos.” | Sustentada por liderança, requisitos, arquitetura e code review. Delimitar ao escopo de experiência; não oferecer auditoria de segurança ou consultoria regulatória sem evidência. |

Dar destaque inicial às quatro primeiras frentes; modernização e consultoria podem aparecer em uma faixa complementar, evitando seis cards com igual peso. Cada frente descreve um problema reconhecível e uma atuação, sem lista extensa de tecnologias, preço fictício, superlativos ou promessa de retorno.

### 5.3 CTAs e contato

| Local | Texto | Destino/intenção |
| --- | --- | --- |
| Hero, principal | “Conversar sobre uma necessidade” | `#s-contact`; mantém a conversa dentro do contexto da página. |
| Hero, secundário | “Conhecer os projetos” | `#s-projects`; serve também a recrutadores. |
| Soluções | “Conversar sobre o meu cenário” | `#s-contact`; uma ação ao fim do bloco, sem seis botões concorrentes. |
| Final dos estudos de caso | “Tenho um desafio parecido” | `#s-contact`; não implica que a mesma solução será adequada. |
| Contato, principal | “Conversar pelo WhatsApp” | Preservar destino atual até a confirmação do número, com mensagem codificada em URL. |
| Contato, carreira | “Falar sobre uma oportunidade profissional” | LinkedIn existente. |
| Projetos/perfil | “Ver código no GitHub” | Repositório correspondente; manter como evidência, não como principal canal comercial. |

**Título do contato:** “Vamos entender o que você precisa?”

**Texto:** “Se você quer criar uma solução, conectar ferramentas ou evoluir um sistema, conte um pouco sobre o contexto e o que gostaria de melhorar. A partir disso, podemos avaliar os próximos passos.”

**Mensagem sugerida para WhatsApp:** “Olá, Natalia! Vi seu portfólio e gostaria de conversar sobre uma necessidade do meu negócio. Hoje, meu principal desafio é…”

**Alternativa para carreira:** “Para oportunidades de engenharia de software e liderança técnica, você também pode falar comigo pelo LinkedIn.”

Não prometer disponibilidade imediata, resposta em determinado prazo, diagnóstico gratuito ou reunião sem custo sem confirmação. Não exigir dados confidenciais no primeiro contato. Se for desejável um e-mail profissional, confirmar o endereço antes de incluí-lo; a existência de `assets/icons/email.svg` não comprova um canal ativo.

## 6. Projetos como estudos de caso

### Estrutura comum

1. Nome, natureza e status: pessoal, MVP ou estudo, conforme confirmado.
2. Problema/contexto: qual necessidade o projeto aborda.
3. Minha contribuição: responsabilidade efetiva, autoria e colaboração, a confirmar quando não documentadas.
4. Solução: o que foi construído e o fluxo relevante para o usuário.
5. Decisões técnicas: poucas decisões e suas razões, com detalhes suficientes para um recrutador.
6. Capacidade demonstrada/benefício pretendido: distinguir funcionalidade disponível, objetivo e resultado medido.
7. Evidência: capturas selecionadas, código, demonstração e limitações conhecidas.

Não usar “resultados” para sugerir economia, adoção ou impacto que não foi medido. Benefícios abaixo são interpretação das capacidades descritas, sujeitos à confirmação funcional.

### CuidaPet — caso principal

- **Fonte:** `index.html:414` e `assets/image/cuidapet/`.
- **Problema já descrito:** acompanhar saúde, tratamentos, doses e histórico de vários pets em um só lugar.
- **Solução já descrita:** aplicativo mobile-first com cadastros, agenda, histórico e notificações locais; status “MVP Android em evolução”.
- **Tecnologias declaradas:** React, TypeScript, Supabase/Auth/RLS e Capacitor. Não atribuir `/app` ou autenticação ao portfólio.
- **Benefício formulável:** “Centraliza informações e permite consultar a rotina de cuidados e o histórico de registros.” Não afirmar redução de esquecimentos, eficácia clínica, adesão ou número de usuários.
- **Edição proposta:** resumir abertura; manter Problema/Solução; explicar acesso e notificações em linguagem simples antes da stack. Selecionar inicialmente painel, agenda e histórico, com restante acessível sem sobrecarregar a leitura.
- **Preservar limite importante:** dosagem informada manualmente, sem cálculo automático. Não reposicionar como aconselhamento veterinário.
- **Confirmar:** autoria e papel, status atual, quais funcionalidades funcionam na demonstração web versus Android e se todas as capturas usam dados demonstrativos autorizados. Perfil e veterinários exibem dados de aparência demonstrativa, mas isso não certifica a origem de todas as imagens.

### Order Management — caso de processos e integração

- **Fonte:** `index.html:604`; somente descrição e link do repositório estão neste checkout.
- **Contexto sugerido:** “Como organizar o acompanhamento de pedidos e suas mudanças de status?” Tratar como problema explorado pelo MVP, não demanda de um cliente identificado.
- **Solução declarada:** API, banco relacional, publicação de eventos, worker e histórico de status.
- **Tecnologias declaradas:** .NET 8, EF Core, PostgreSQL, RabbitMQ, Azure Service Bus, React e Docker.
- **Benefício formulável:** “Demonstra um fluxo de pedidos com acompanhamento de status e processamento assíncrono.” Idempotência pode ser explicada como tratamento de mensagens repetidas, sujeito à validação da implementação.
- **Confirmar:** papel da profissional, execução atual, se RabbitMQ e Azure Service Bus são alternativas ou partes simultâneas, e evidência do comportamento descrito. Não prometer escala ou confiabilidade de produção.
- **Apresentação:** segundo caso com problema/solução/capacidade e link para código; diagrama simples somente após validar a arquitetura no repositório correspondente.

### Portfólio profissional — exemplo de publicação web

- **Fonte:** `index.html:670` e implementação deste repositório.
- **Problema:** organizar a apresentação de experiência, projetos e canais de contato.
- **Solução:** página estática responsiva, conteúdo semântico, navegação interna e links de contato.
- **Tecnologias:** HTML, CSS, JavaScript e publicação indicada em GitHub Pages.
- **Benefício demonstrável:** disponibilizar informações profissionais e caminhos de contato em um endereço. Não afirmar aumento de conversão, ranqueamento ou acessibilidade completa.
- **Após o redesign:** poderá documentar decisões de arquitetura de informação e validações realizadas, distinguindo o que foi implementado do que continua sendo objetivo.

### WebSocket Server — laboratório complementar

- **Fonte:** `index.html:640`; link atual aponta para o repositório `WebScoket` — preservar a grafia do destino até verificar uma eventual mudança.
- **Problema explorado:** receber arquivos por uma conexão WebSocket.
- **Solução declarada:** servidor C#/.NET com HttpListener, buffer e escrita em arquivo.
- **Valor demonstrado:** estudo de comunicação persistente e transferência de dados; não caso de modernização implantado para cliente.
- **Apresentação:** card menor em “Estudos técnicos”, mantendo a evidência para recrutadores sem competir com os casos de maior compreensão comercial.
- **Confirmar:** status de execução, limites e autoria. Não alegar segurança, escalabilidade ou prontidão de produção sem auditoria específica.

## 7. Direção visual

- **Identidade:** manter nome, retrato e título profissional. Usar primeira pessoa; evitar “nossa equipe”, logotipos de supostos clientes ou estética de agência.
- **Paleta:** preservar fundo escuro, roxo e turquesa, reduzindo a competição entre acentos. Usar um destaque dominante por bloco e superfícies mais tranquilas para textos longos.
- **Tipografia:** manter Saira e fallback inicialmente. Escala clara entre proposta, títulos e corpo; textos explicativos com comprimento de linha confortável, aproximadamente 60–75 caracteres como orientação, sem impor largura fixa no mobile.
- **Hero:** proposta legível antes das siglas; nome e Tech Lead imediatamente visíveis. Retrato desktop preservado, versão compacta mobile a avaliar. No máximo dois CTAs de destaque; redes podem permanecer como links discretos.
- **Cards:** reutilizar padrões existentes com títulos concretos e descrições curtas. Evitar transformar cada serviço em banner ou adicionar ícones puramente decorativos em excesso.
- **Projetos:** priorizar evidência visual real, legendas que expliquem o fluxo e texto de problema/solução; não substituir por mockups fictícios ou métricas ornamentais.
- **Movimento:** preferir proposta estática no hero. Animação deve apoiar a leitura sem ocultar conteúdo, alterar foco ou atrasar o entendimento.
- **Confiança:** datas, papel e limites dos projetos são sinais mais úteis do que selos inventados. Experiência profissional continua visível e substancial.

## 8. Backlog por fases e critérios de aceite

P0 = necessário para o reposicionamento e problemas que afetam uso; P1 = qualidade da entrega; P2 = manutenção posterior. As fases são propostas para outra execução, não alterações autorizadas por este documento.

### Fase 0 — Validar conteúdo e registrar a base (P0)

**Trabalho:** confirmar nome público, disponibilidade e escopo de serviços; preservar cronologia e formação; registrar responsabilidades nos projetos; conferir dados das capturas e condições de demonstração. Definir que `style.css` é a fonte efetiva desta intervenção e documentar a divergência do SCSS.

**Arquivos provavelmente afetados:** este plano e `README.md`; `index.html` e `manifest.json` apenas após confirmações de conteúdo.

**Dependências:** respostas da profissional para itens factuais ambíguos; acesso aos outros repositórios apenas se necessário validar alegações técnicas.

**Aceite:**

- [ ] Cada alegação nova está associada a uma informação existente, declaração da profissional ou evidência verificável.
- [ ] Serviços sem case específico não são apresentados como entregas anteriores.
- [ ] Nome público e forma de contato estão definidos; ausência de confirmação mantém os valores atuais, sem inventar substitutos.
- [ ] Há registro do cargo Tech Lead, empresas, períodos e formação antes das alterações, permitindo comparar a preservação depois.
- [ ] README descreve execução estática e alerta para não recompilar SCSS legado sobre o CSS atual.

### Fase 1 — Reposicionamento, navegação e contato (P0)

**Trabalho:** aplicar hero e CTAs; acrescentar Soluções; antecipar Projetos; agrupar editorialmente Sobre/Experiência/Competências/Formação; reescrever contato; corrigir sincronização do menu no breakpoint e tratamento de Escape.

**Arquivos provavelmente afetados:** `index.html`, `assets/css/style.css`, `assets/js/menu.js`; `assets/js/main.js` somente se a inicialização exigir mudança.

**Dependência:** fase 0 para publicar ofertas e informações confirmadas.

**Aceite:**

- [ ] Na primeira tela, em desktop e mobile, nome, Engenheira de Software/Tech Lead e proposta de atuação estão identificáveis sem esperar animação.
- [ ] Navegação contém Início, Soluções, Projetos, Sobre e Contato; todos os destinos existem e IDs são únicos.
- [ ] URLs antigas com `#s-experience`, `#s-skills`, `#s-education` e `#conteudo` continuam válidas.
- [ ] Soluções descreve necessidades e atuação, e a experiência profissional permanece acessível sem percorrer um fluxo comercial obrigatório.
- [ ] Hero tem no máximo duas ações de destaque; contato distingue projetos e oportunidades profissionais.
- [ ] URLs de WhatsApp preservam o número confirmado e a mensagem é corretamente codificada; validar abertura sem enviar mensagem. LinkedIn e GitHub continuam apontando para os destinos corretos.
- [ ] Abrir o menu a 390 px e ampliar para 901/1440 px restaura a rolagem; voltar ao mobile mantém estado e `aria-expanded` coerentes.
- [ ] Escape fecha e devolve foco quando o menu está aberto; quando fechado não desloca foco. Clique numa âncora fecha o menu e mantém o destino utilizável.

### Fase 2 — Estudos de caso e evidências (P1)

**Trabalho:** padronizar casos, explicitar contribuição confirmada, revisar legendas e ordem de projetos, reduzir exposição inicial da galeria e contextualizar links técnicos.

**Arquivos provavelmente afetados:** `index.html`, `assets/css/style.css`, `assets/image/cuidapet/` somente se houver seleção/otimização ou substituição de capturas autorizadas.

**Dependências:** confirmação de papel, status e capacidade de demonstração de cada projeto.

**Aceite:**

- [ ] CuidaPet e Order Management apresentam problema, solução, tecnologias, contribuição confirmada, capacidade/benefício e status; pendências não viram afirmações públicas.
- [ ] WebSocket permanece identificado como estudo; portfólio como projeto próprio, sem simulação de cliente.
- [ ] Nenhum texto inventa faturamento, tempo economizado, usuários, depoimentos ou implantação comercial.
- [ ] Informações empresariais se limitam ao histórico profissional já público e autorizado; não há arquitetura interna, dados ou telas do empregador.
- [ ] Capturas têm alt e legenda úteis, origem permitida e dados revisados. A seleção inicial explica o fluxo; imagens adicionais são alcançáveis por toque e teclado, sem depender de hover.
- [ ] Links de código/demonstração são verificados; indisponibilidade é tratada no conteúdo, sem depender de credenciais pessoais do visitante.

### Fase 3 — Refinamento visual, acessibilidade e desempenho (P1)

**Trabalho:** ajustar hierarquia de cores e espaçamentos, retrato, proporções de imagens, galeria e foco; tratar movimento reduzido nos módulos; definir fallback do menu sem JS; otimizar assets somente com evidência.

**Arquivos provavelmente afetados:** `assets/css/style.css`, `assets/js/typeWrite.js`, `assets/js/scrollReveal.js`, `assets/js/menu.js`, `assets/js/main.js`, `index.html` e imagens selecionadas.

**Aceite:**

- [ ] Verificação visual em 320, 390, 768, 900, 901, 1120 e 1440 px: sem texto/canais cortados, sobreposição de CTAs ou rolagem horizontal do documento. Galeria interna, se mantida, tem indicação e acesso claros.
- [ ] Zoom de 200% preserva leitura e operação; reflow equivalente a 320 CSS px não exige rolagem em dois eixos para ler texto comum.
- [ ] Fluxo inteiro utilizável com Tab, Shift+Tab, Enter e Escape; foco visível e nunca encoberto pelo cabeçalho fixo. Skip link chega ao conteúdo principal.
- [ ] Contraste verificado: pelo menos 4,5:1 para texto comum, 3:1 para texto grande e elementos visuais necessários à identificação dos controles, nos estados relevantes.
- [ ] Com movimento reduzido, texto principal aparece completo e não há digitação ou deslocamentos programáticos dispensáveis.
- [ ] Com JS desativado e com a CDN indisponível, conteúdo, navegação básica e contato permanecem utilizáveis; com CDN disponível, não há conteúdo permanentemente oculto.
- [ ] Imagens têm proporções declaradas corretas; retrato relevante ao primeiro viewport não recebe lazy loading indiscriminado; capturas abaixo da dobra continuam lazy.
- [ ] Registrar uma linha de base e comparação de performance sob a mesma ferramenta, rede e viewport. Alvos de referência: LCP ≤ 2,5 s, CLS ≤ 0,1 e INP ≤ 200 ms quando houver dados de campo suficientes; relatório de laboratório não substitui INP de campo nem garante resultados reais.
- [ ] Não há erros JS da aplicação nem recursos locais com 404 após as mudanças. Revisão por leitor de tela realizada antes de afirmar conformidade de acessibilidade.

### Fase 4 — SEO, consistência e publicação (P1)

**Trabalho:** alinhar title/description/OG/Twitter ao posicionamento aprovado, revisar manifesto e JSON-LD; avaliar imagem social; conferir publicação estática e recursos externos no ambiente real.

**Copy de metadados sugerida:**

- Title: “Natalia Barros Silva | Engenheira de Software e Tech Lead”.
- Description: “Engenheira de Software e Tech Lead. Aplicações web, APIs, integrações e evolução de sistemas. Conheça meus projetos e converse sobre sua necessidade.”

**Arquivos provavelmente afetados:** `index.html`, `manifest.json`, `sitemap.xml`, `README.md`; `robots.txt` apenas se a URL pública mudar; nova imagem social em `assets/image/` se aprovada.

**Aceite:**

- [ ] Nome e posicionamento são consistentes em HTML, manifesto, dados estruturados e compartilhamento; Tech Lead permanece explícito.
- [ ] Um H1 e hierarquia de títulos coerente; serviços aparecem como texto HTML indexável e descrevem a oferta real.
- [ ] Canonical, `og:url`, sitemap e robots apontam para o domínio público correto; `lastmod` reflete alteração substantiva real; âncoras não são cadastradas como páginas.
- [ ] JSON-LD continua válido e coerente com o conteúdo visível, sem avaliações, clientes ou organização inventados.
- [ ] Imagem social e ícones carregam e são avaliados nos recortes esperados; MIME do favicon corresponde ao arquivo.
- [ ] Método de deploy do GitHub Pages confirmado e smoke test no endereço publicado verifica página, assets, âncoras e CTAs. Não confundir sucesso local com publicação.
- [ ] Google Fonts e ScrollReveal são testados no destino real e sob falha controlada; restrição do ambiente é registrada separadamente.

### Fase 5 — Manutenção e aprendizado (P2, opcional)

**Trabalho:** decidir destino do SCSS e arquivos não usados; documentar convenções; avaliar necessidade de medição leve de interesse por serviços.

**Arquivos provavelmente afetados:** `README.md`, `assets/scss/`, `assets/css/style.css.map`, JS/ícones legados; eventual instrumentação em `assets/js/main.js` e `index.html` somente se escolhida em tarefa própria.

**Aceite:**

- [ ] Uma única fonte de estilos está documentada. Limpeza de legado tem levantamento de referências/licenças e não muda comportamento visual por acidente.
- [ ] Nenhuma ferramenta de analytics, cookie ou serviço externo é introduzido sem definição de finalidade e privacidade.
- [ ] Se houver medição, eventos mínimos como clique em contato/WhatsApp são distintos de conversas e contratos; não coletar mensagem, telefone do visitante ou dados confidenciais.
- [ ] Avaliação de conversão usa linha de base e período definidos, sem prometer aumento ou atribuir causalidade a amostras insuficientes.

## 9. Informações a confirmar e riscos

| Item | Informação atual | Validação necessária / tratamento |
| --- | --- | --- |
| Nome público | Duas formas entre HTML e manifesto. | Escolher a forma profissional preferida; não modificar identidade por suposição. |
| Cargo e cronologia | Tech Lead/Full Stack na Open Solutions, 2023–atual; Treevia 2022–2023; Delfos 2021–2022. | Confirmar atualidade e eventual distinção entre início na empresa e início da liderança. Preservar até confirmação. |
| Tempo de experiência | “Aproximadamente cinco anos”. | Confirmar se ainda representa a trajetória; preferir cronologia a número que envelhece automaticamente. |
| Formação/certificações | ADS/IFSP, pós concluída em 2025 com 600 h e duas certificações. | Confirmar instituição da pós, denominação e emissores antes de complementar; não inventar credenciais. |
| Oferta independente | Intenção declarada de atrair projetos e consultoria. | Confirmar capacidade de atendimento, tipos de projeto e limites. Não comunicar disponibilidade plena, equipe, SLA ou suporte 24h. |
| Compatibilidade profissional | Emprego atual e nova oferta coexistirão no site. | Confirmar limites aplicáveis a projetos independentes e conflitos de interesse; não inferir restrição ou autorização contratual. |
| Automação de planilhas | Interesse declarado; sem caso específico neste checkout. | Confirmar ferramentas dominadas e escopo antes de destacar integrações específicas. |
| Projetos | Descrições, links e capturas locais. | Confirmar autoria, colaboração, status, acesso e funcionalidades por plataforma. Não apresentar texto do portfólio como auditoria de código externo. |
| Contato | WhatsApp e LinkedIn existentes. | Confirmar número e canal preferido; não enviar mensagem para testar. E-mail só com endereço fornecido/confirmado. |
| Capturas e confidencialidade | Imagens do CuidaPet e menções públicas a empresas. | Revisar todas as capturas antes de reutilizar. Não adicionar dados, clientes, arquitetura ou resultados internos do empregador. |
| CSS/SCSS | Implementações divergentes. | Maior risco técnico da manutenção: compilação automática pode substituir o design atual. Usar CSS efetivo até decisão documentada. |
| Seletores e âncoras | JS depende de classes específicas; links dependem de IDs. | Preservar contratos ou atualizar HTML/CSS/JS juntos; verificar backlinks por fragmento. |
| Animações e CDN | Biblioteca externa opcional; fonte remota. | Alterações em loading/ordem podem executar o módulo antes da biblioteca. Testar disponibilidade e fallback sem ocultação de conteúdo. |
| Novos serviços | Adicionam comprimento à página. | Compensar com síntese e eliminação de repetição, sem apagar fatos profissionais. |
| SEO | Base existente é boa, mas não há dados de busca. | Reposicionamento pode alterar snippets e relevância; acompanhar após publicação, sem garantia de ranking. |
| Medição futura | Nenhum analytics no código. | Não há evidência atual de taxa de conversão; não usar cliques como substituto de clientes conquistados. |

## 10. Evidência obtida nesta execução

- Arquivos locais referenciados no HTML encontrados; âncoras verificadas sem destinos ausentes e sem IDs duplicados.
- SVGs analisados como XML sem erro; dimensões e tamanhos de imagens inventariados.
- Nenhum erro de execução JavaScript da página nos cenários automatizados desta análise. Isso não inclui sucesso de rede externa: ScrollReveal ficou `undefined`.
- Menu abre com `aria-expanded="true"`; Escape fecha; escolha de Contato fecha o menu e navega para `#s-contact`.
- Reproduzidos bloqueio de rolagem após ampliar com menu aberto e digitação sob movimento reduzido.
- Sem JavaScript, contato e conteúdo permanecem no HTML, mas navegação móvel fica oculta.
- Não houve instalação, alteração de código, envio de contato ou publicação. Este documento é o único arquivo criado no repositório nesta execução.

**Ordem recomendada de execução:** validar fatos e oferta → reposicionar percurso e corrigir menu → consolidar casos → refinar acessibilidade/visual → alinhar SEO e validar publicação. O resultado esperado é uma apresentação pessoal clara e consultiva, na qual experiência técnica sustenta a oferta e o visitante consegue escolher um próximo passo adequado.

## 11. Registro da implementação da Fase 2

Esta seção registra a execução posterior à Fase 1. O diagnóstico e as listas acima
permanecem como referência histórica; não representam uma nova auditoria do estado
implementado. A entrega desta fase se limita à seção Projetos, a seus estilos e a
este registro.

### Alterações realizadas

- **CuidaPet:** mantido como destaque e “MVP Android em evolução”; problema,
  solução e capacidades apresentados antes dos detalhes técnicos. Dosagem manual
  preservada, sem promessa de recomendações veterinárias ou benefícios clínicos.
- **Capturas:** painel, agenda diária e histórico visíveis inicialmente. As outras
  sete imagens foram preservadas em `details`/`summary`, sem biblioteca ou JS novo.
  Cada captura tem texto alternativo, legenda e link para abrir o arquivo original
  em nova aba; o destino é informado no nome acessível.
- **Order Management:** segundo estudo, com contexto de pedidos, solução e
  explicação do worker e processamento assíncrono. Mantidos status de MVP e lista
  de tecnologias já declarada; detalhes técnicos ficam em expansão opcional.
- **Portfólio:** projeto próprio de página estática, com organização de conteúdo,
  HTML semântico, responsividade e publicação estática; sem resultados mensurados.
- **WebSocket Server:** card menor, identificado como laboratório técnico.
- Não foram adicionadas atribuições individuais ou de equipe aos projetos sem
  confirmação. Não foram criados campos vazios de contribuição ou resultados.

### Pendências factuais mantidas

| Projeto | O que ainda precisa de confirmação |
| --- | --- |
| CuidaPet | Autoria, contribuição individual e eventuais colaboradores; atualidade do status; diferenças funcionais entre web e Android; origem demonstrativa/autorização dos dados de todas as capturas. |
| Order Management | Autoria/contribuição e colaboração; execução atual; comportamento de idempotência; papel de RabbitMQ e Azure Service Bus (alternativas ou componentes simultâneos); correspondência da stack declarada com a versão atual do código. |
| Portfólio | A apresentação como projeto próprio está autorizada pela solicitação. Não foi atribuída autoria exclusiva de cada componente; funcionamento da versão publicada não foi confirmado nesta execução. |
| WebSocket Server | Autoria/contribuição, colaboração, estado de execução e limites do estudo; nenhuma prontidão comercial ou de produção foi acrescentada. |

A fonte editorial dos projetos externos continua sendo a descrição que já
constava no portfólio e as capturas existentes. HTTP 200 de um repositório verifica
o link, não sua implementação. As tecnologias do Order Management foram mantidas
como **declaradas**, sem adicionar inferências sobre operação em produção. A
verificação independente desses projetos permanece pendente.

### Validação executada

- Chromium/Playwright já disponíveis, nas larguras 320, 390, 768, 900, 901, 1120
  e 1440 px: sem overflow horizontal do documento; controles de Projetos dentro
  da largura disponível, inclusive com as expansões abertas.
- Dez imagens carregadas com largura intrínseca de 600 px; três visíveis
  inicialmente e sete adicionais acessíveis pela expansão. Textos alternativos,
  legendas e destinos de ampliação conferidos.
- Controles e links focáveis; Enter e Espaço abrem/fecham as expansões. Tab pula
  imagens recolhidas e alcança o próximo controle. Abertura de uma imagem em nova
  aba testada por Enter. Expansão testada também com toque em contexto mobile e
  JavaScript desativado.
- Navegação para Projetos e Contato, fechamento do menu, redimensionamento de
  390 para 901 px e Escape/foco preservados. Nenhuma mensagem enviada.
- Dezessete recursos locais responderam HTTP 200. Sem IDs duplicados, âncoras
  sem destino ou erros de execução JavaScript da aplicação nos testes.
- Os quatro links GitHub dos projetos responderam HTTP 200. O proxy bloqueou com
  403 o acesso a `cuida-pet-psi.vercel.app` e `natyesilva.github.io`: URLs
  preservadas, disponibilidade das demonstrações não confirmada. Esse bloqueio
  do ambiente não estabelece indisponibilidade pública dos sites.
- Google Fonts e ScrollReveal também falharam no ambiente. A revisão visual
  utilizou a fonte de fallback; não se declara validação desses recursos remotos.
- Comparação com a captura dos arquivos antes desta fase confirmou HTML fora de
  `#s-projects` idêntico, todos os destinos externos dos projetos preservados e
  os mesmos dez arquivos de imagem. JavaScript, navegação, contato, carreira,
  metadados e configurações de publicação não foram alterados nesta fase.

### Reservado para a Fase 3

Auditoria geral de contraste e leitor de tela, zoom/reflow ampliado, movimento
reduzido nas seções restantes, fallback global do menu sem JS, otimização de
imagens e medições de desempenho. As melhorias de teclado e foco das novas
expansões pertencem à Fase 2 e não equivalem a uma auditoria WCAG completa.

Não houve instalação de dependências, compilação de SCSS, commit, push ou
publicação nesta entrega.

## 12. Registro da implementação da Fase 3

Esta execução usa como base o estado já implementado das Fases 1 e 2, e não o
commit da auditoria original. O pedido confirmou o nome **Natalia Barros Silva**,
o posicionamento **Engenheira de Software e Tech Lead**, os serviços apresentados
e a preservação do número de WhatsApp existente. Essas confirmações substituem
as pendências correspondentes da auditoria; não confirmam autoria ou resultados
dos projetos externos.

### Escopo e mudanças implementadas

- **Composição:** removidos a grade decorativa e os gradientes do hero, o brilho
  do CTA principal e sombras excessivas das capturas. A identidade escura, roxo
  e turquesa permanece. Os estudos principais usam superfície sólida e borda
  superior roxa; os links de projeto têm sublinhado persistente e área vertical
  mínima de 44 px.
- **Retrato:** apresentação compacta, com identificação ao lado, até 1120 px;
  proposta de valor e CTAs continuam antes da foto. A 390 px, a altura do hero
  passou de aproximadamente 1055 para 891 px; a 768 px, de 1233 para 913 px,
  nas capturas com fonte de fallback e altura de viewport de 900 px.
- **Texto e controles:** texto secundário mais claro, bordas de controles e
  indicador de foco mais contrastantes. Cards preservam conteúdo e hierarquia;
  quebras de palavras evitam transbordamento com texto ampliado, sem esconder
  problemas usando `overflow-x: hidden` no documento.
- **Semântica/foco:** preservados títulos e landmarks; grupos com rótulo ganharam
  papel explícito. `main` e seções recebem foco programático com `tabindex="-1"`,
  sem entrar na sequência de Tab. Skip link e âncoras mantêm destino identificável
  abaixo do cabeçalho fixo. Foco de controles também recebe margem de rolagem.
- **Menu:** lista visível como comportamento básico sem JS. Com JS, o menu abre
  imediatamente, sem transição que atrase a disponibilidade dos links para Tab.
  Escape só atua no estado aberto; sair da navegação por foco/toque fecha o menu.
  Redimensionar sincroniza classes, rolagem, `aria-expanded` e foco, inclusive
  quando o controle anteriormente focado deixa de ser exibido.
- **Inicialização:** uma marca de suporte JS é aplicada antes da primeira
  pintura para evitar deslocamento de layout ao habilitar o menu. Se o módulo
  principal não carregar, seu tratamento de erro restaura o layout básico.
- **Movimento:** `scrollReveal.js` usa IntersectionObserver e Web Animations,
  sem a biblioteca ScrollReveal nem sua requisição externa. O efeito opcional
  é um deslocamento curto, nunca oculta texto e não é aplicado a conteúdo focado.
  Alterar a preferência para movimento reduzido cancela os efeitos ativos.
  Sem suporte às APIs, o conteúdo continua disponível.
- **Digitação:** `typeWrite.js` permanece fora dos módulos carregados pela página.
  Sua função agora respeita movimento reduzido no início e durante o efeito,
  restaurando o texto completo. Nenhuma digitação foi reintroduzida no hero.
- **Imagens:** proporção do retrato corrigida para 447×559; `picture` com duas
  variantes WebP, seleção por viewport/densidade e PNG original como fallback.
  Prioridade alta para o retrato; lazy loading e dimensões das capturas mantidos.
  Galeria, legendas, expansões nativas e links para os arquivos completos preservados.

Arquivos desta fase: `index.html`, `assets/css/style.css`, `assets/js/menu.js`,
`assets/js/scrollReveal.js`, `assets/js/typeWrite.js`, `README.md`, este plano e os
novos `assets/image/natalia.webp` e `assets/image/natalia-224.webp`.
`assets/js/main.js` já tinha sido modificado na Fase 1 e não mudou nesta fase.

### Evidência para as decisões de imagem

| Arquivo/variante | Dimensões | Bytes | Decisão |
| --- | --- | ---: | --- |
| Retrato PNG original | 447×559 | 206.299 | Preservado como original/fallback. |
| Retrato WebP completo | 447×559 | 113.976 | 44,75% menor; compressão sem perdas. |
| Retrato WebP compacto | 224×280 | 39.862 | 80,68% menor que o PNG; adequado ao retrato compacto, com variante maior para maior densidade. |
| Logo PNG original | 512×512 | 216.032 | Preservada para seus usos existentes; o cabeçalho já usa SVG de aproximadamente 2,1 kB. |
| Dez capturas JPEG originais | 600×1335 | 457.048 no total | Preservadas, com lazy loading e ampliação dos originais. |

A variante WebP completa foi comparada ao PNG: pixels visíveis idênticos após
composição sobre fundos preto e branco. A variante compacta usa redimensionamento
Lanczos e codificação sem perdas; foi inspecionada no layout. Não foi usado serviço
generativo nem alterado o conteúdo visual da foto.

Foram testadas conversões WebP sem perdas de painel, agenda e histórico: os
arquivos aumentaram de 53.415/52.714/42.257 para 196.250/165.194/136.938 bytes.
Essas variantes foram rejeitadas e não adicionadas ao projeto. A logo PNG também
teve uma alternativa menor avaliada, mas não é o recurso exibido no hero; seus
usos de ícone e compartilhamento permanecem intactos nesta fase.

### Medições de desempenho antes/depois

**Método:** Chromium 151.0.7922.173, servidor HTTP local, Playwright/CDP e
PerformanceObserver; três execuções por viewport e por versão, contextos novos,
cache desativado, DPR 1, CPU com fator de desaceleração 4×, latência simulada de
40 ms, download de 200.000 bytes/s e upload de 93.750 bytes/s. Viewports 390×900
e 1440×900. Observação até `networkidle` + 1,5 s, sem rolagem/interação.
O CLS usa a maior janela de sessão de deslocamentos sem interação recente.

As requisições HTTPS externas foram bloqueadas de forma controlada em ambas as
versões, reproduzindo a indisponibilidade do ambiente. Portanto, os números
comparam o site local com fonte de fallback; não representam o site público,
carregamento real de Saira, um aparelho físico ou dados de campo.

| Métrica — mediana | 390 px antes | 390 px depois | 1440 px antes | 1440 px depois |
| --- | ---: | ---: | ---: | ---: |
| LCP | 1460 ms | 620 ms | 1456 ms | 1012 ms |
| FCP | 664 ms | 620 ms | 680 ms | 624 ms |
| CLS | 0 | 0 | 0 | 0 |
| Bytes transferidos locais, incluindo documento e overhead reportado pelo navegador | 277.663 | 114.361 | 277.663 | 188.475 |
| Requisições locais, incluindo documento | 10 | 10 | 10 | 10 |

Amostras individuais de LCP: mobile antes **1476/1460/1448 ms**, depois
**620/640/620 ms**; desktop antes **1456/1460/1456 ms**, depois **1012/1012/1012 ms**.
As tentativas externas caíram de duas para uma pela remoção da CDN ScrollReveal.

No mobile, o candidato LCP mudou do retrato para o H1 com a composição compacta;
no desktop continuou sendo o retrato. A redução não deve ser atribuída apenas à
compressão da imagem. Durante o desenvolvimento foi detectado CLS de 0,131 na
inicialização do menu; esse resultado motivou a correção antes da primeira pintura
e não corresponde à versão final, que voltou a CLS zero nos três ensaios móveis.

Lighthouse e axe-core não estavam instalados, e nenhuma dependência foi instalada.
Não há pontuação Lighthouse nesta entrega. INP de campo não foi medido e não é
substituído pelos testes locais de teclado ou pelas medidas de carregamento.

### Testes executados e resultados

- **Sete larguras:** 320, 390, 768, 900, 901, 1120 e 1440 px; inspeção de capturas
  e verificações de geometria sem overflow horizontal do documento, cortes nos
  controles avaliados ou sobreposição do foco pelo cabeçalho.
- **Teclado:** Tab/Shift+Tab, Enter, Espaço e Escape nos componentes aplicáveis;
  skip link com foco no `main`; navegação pelas âncoras; 27 paradas de foco na
  composição móvel e 31 na desktop com expansões inicialmente fechadas.
  Menu, abertura/fechamento das expansões e saída do menu por foco passaram.
- **Redimensionamento:** menu aberto a 390 px seguido de desktop e retorno ao
  mobile; foco transferido para um controle visível e rolagem restaurada.
- **Zoom real de navegador:** configuração de zoom padrão do Chromium em 2,0
  via sua API de configurações, janela de 1440 px com viewport efetivo de 720 px
  e DPR 2. Controles, expansões, menu e ausência de overflow verificados.
- **Texto ampliado:** fonte raiz em 200% nas sete larguras, além de reflow em
  640 e 720 CSS px. O teste revelou transbordamento em cards de experiência e
  formação a 320 px; o tratamento de quebra foi corrigido e os testes passaram.
- **Sem JS:** menu básico visível e sem overflow em 320, 390, 900, 901 e 1440 px;
  toque e expansões nativas testados em 390 px. Falha simulada no download do
  módulo principal também restaurou os links de navegação.
- **Movimento:** preferência reduzida na entrada e durante a sessão; nenhum
  efeito de entrada executado com redução ativa e efeitos em andamento cancelados.
  A utilidade de digitação foi chamada isoladamente para verificar seus guardas;
  o carregamento normal da página não faz requisição desse módulo.
- **Degradação:** sem CDN externa e sem APIs nativas de animação, conteúdo visível
  e sem exceções JS. A biblioteca ScrollReveal não é mais requisitada.
- **Contraste:** 471 amostras de texto visível em 390/1440 px, incluindo expansões,
  calculadas a partir das cores renderizadas e composição de transparências,
  sem gradientes de fundo nesses elementos. Menor razão encontrada: **5,32:1**.
  Pares de controles avaliados: borda/superfície elevada **3,94:1**, foco/primário
  **3,64:1**, foco/fundo **13,68:1** e indicador de expansão/painel **9,80:1**.
- **Semântica:** um H1, um `main`, landmarks de cabeçalho, navegação e rodapé;
  rótulos de controles e árvore de acessibilidade do Chromium inspecionados.
  Nenhuma imagem sem atributo `alt`; imagens informativas e decorativas mantêm
  sua distinção. Isso não equivale a um teste com leitor de tela humano.
- **Preservação:** comparação do texto renderizável e das listas de links/IDs
  confirmou conteúdo editorial e arquitetura idênticos. Metadados de SEO não
  foram alterados; a única adição no `head` é a inicialização visual do menu.
  Todos os arquivos de imagem originais foram comparados byte a byte.
- **Recursos e links:** nenhum erro JavaScript da aplicação ou recurso local
  com HTTP 404 nos cenários executados. URLs internas e mensagem do WhatsApp
  preservadas; nenhuma mensagem foi enviada. Os quatro repositórios e o perfil
  GitHub responderam HTTP 200. O proxy bloqueou com 403 LinkedIn, a demonstração
  do CuidaPet e o site público do portfólio; sua disponibilidade não foi confirmada.

### Limitações e pendências

Não foram executados testes manuais com NVDA/VoiceOver, auditoria WCAG integral,
Lighthouse/axe-core, Safari/Firefox, dispositivos físicos ou medições de campo.
As validações visuais e de desempenho usam fonte de fallback porque Google Fonts
está bloqueado neste ambiente. É necessário revalidar a fonte remota e possíveis
mudanças de layout quando ela estiver acessível. Não se declara conformidade
integral com WCAG nem garantia de Core Web Vitals em produção.

**Fase 4, ainda não implementada:** alinhar manifesto e metadados ao nome e ao
posicionamento agora confirmados; revisar title/description/OG/Twitter e imagem
social; corrigir declaração MIME do favicon SVG; conferir canonical, sitemap,
dados estruturados e método real de publicação; validar o endereço público e os
recursos externos antes de publicar. As pendências de autoria e funcionamento
dos projetos externos registradas na Fase 2 continuam abertas.

Não houve alteração de deploy, novas dependências, analytics, cookies, formulários,
compilação de SCSS, commit, push ou publicação. A Fase 4 depende de nova instrução.

## 13. Registro da implementação da Fase 4

Execução autorizada após as Fases 1–3. Os diagnósticos anteriores são históricos;
este registro substitui a indicação de Fase 4 ainda não iniciada na seção 12.
Publicação permanece fora do escopo. Nome, posicionamento, serviços e preservação
do WhatsApp foram confirmados pela profissional; pendências dos projetos não
foram transformadas em novas alegações.

### Implementação

- `index.html`: title **Natalia Barros Silva | Engenheira de Software e Tech Lead**.
  Description: **Engenheira de Software e Tech Lead. Desenvolvimento de aplicações
  web, sistemas personalizados, APIs, integrações e automações. Conheça meus projetos.**
  Open Graph e Twitter usam os mesmos textos. A lista antiga de meta keywords foi
  removida; não foi substituída por repetição de termos ou páginas artificiais.
- JSON-LD continua `Person`, com nome confirmado e `jobTitle` alinhado à identidade
  visível. URL, foto, perfis GitHub/LinkedIn, conhecimentos, localidade e empregador
  já documentados foram preservados. A `Organization` aninhada em `worksFor` já
  existia e corresponde ao histórico visível; não representa uma nova agência.
  Nenhum endereço comercial, credencial, avaliação ou cliente foi criado.
- Canonical e `og:url` continuam `https://natyesilva.github.io/`. `robots.txt` e
  `sitemap.xml` foram validados e **não alterados**. `lastmod` permanece 2026-08-06:
  a execução local não justifica avançá-lo. Sua correspondência com a publicação
  histórica não foi verificada.
- Nova `assets/image/social-preview.png`, PNG 1200×630, composição tipográfica
  escura com roxo e turquesa: nome, profissão e “Sistemas, integrações e soluções
  digitais”. Criada com ferramenta de geração de imagem, redimensionada por Canvas
  e inspecionada visualmente. Não usa fotos sintetizadas, clientes ou mockups.
  `og:image` e `twitter:image` apontam ao arquivo; dimensões, MIME e textos
  alternativos declarados. Twitter usa `summary_large_image`.
- Favicon SVG com `image/svg+xml`, removendo a declaração incorreta e duplicada.
  PNG existente 512×512 como alternativa e apple-touch-icon preservado.
- `manifest.json`: nome público completo inclusive no `short_name`, descrição
  consistente; ícones originais preservados. Removido `maskable` do PNG por não
  haver validação de sua área segura. `display`, cores, escopo e início preservados;
  nenhum suporte offline ou PWA completa foi acrescentado ou anunciado.
- README: fluxo local, evidências e limites do deploy, checklist de publicação
  manual e smoke test; mantido o alerta sobre CSS atual versus SCSS legado.

Arquivos desta fase: `index.html`, `manifest.json`, `assets/image/social-preview.png`,
`README.md` e este plano. CSS, JavaScript, imagens originais, conteúdo profissional,
estudos de caso, navegação, contatos e configuração de deploy não foram alterados
nesta fase. O corpo do HTML foi comparado byte a byte ao estado anterior à Fase 4.

### Validação local e limites

- Chromium 151 e Playwright já disponíveis, servidor HTTP estático temporário;
  sem instalação de dependências ou etapa de build.
- Metadados sem duplicações, correspondência de title/description entre documento,
  compartilhamento e manifesto; JSON-LD parseável e perfis presentes no HTML.
- Manifesto JSON e sitemap XML válidos; referências de robots/canonical/OG/sitemap
  coerentes. Ícones existentes, dimensões PNG e MIME SVG/PNG conferidos.
- Um H1, hierarquia sem saltos, IDs únicos e destinos das âncoras existentes.
- 24 recursos locais responderam HTTP 200, incluindo manifesto, sitemap, robots,
  imagem social, ícones, módulos e capturas. Imagem social 1200×630 inspecionada.
- 320, 390, 768, 900, 901, 1120 e 1440 px: sem overflow horizontal; menu, Escape,
  foco, âncoras, expansões por teclado e carregamento das dez capturas verificados.
- Redimensionamento do menu aberto de mobile para desktop libera rolagem e
  sincroniza `aria-expanded`. Serviços e navegação disponíveis sem JavaScript.
- Nenhuma exceção JavaScript da aplicação nos cenários executados. Sintaxe dos
  três módulos ativos verificada com Node; diff sem erros de whitespace.
- Requisições externas foram bloqueadas de forma controlada no navegador de teste;
  fonte de fallback utilizada. Isso não comprova Google Fonts nem destinos externos.
- Prévia LinkedIn/WhatsApp, cache social, indexação, rich results e funcionamento
  público desta versão **não foram validados**. Não foi enviada mensagem.

### Evidência de publicação e pendências

O remote aponta para `https://github.com/natyesilva/natyesilva.github.io.git`,
coerente com a URL de usuário do GitHub Pages. Não há CNAME nem workflow de deploy
versionado. A API `/repos/natyesilva/natyesilva.github.io/pages` ficou inacessível
por bloqueio CONNECT 403 do proxy; não é evidência de erro público no site.

Antes de publicar, confirmar em Settings → Pages a fonte real (branch/pasta ou
Actions), revisar o diff acumulado e executar o checklist do README. Após a
publicação manual, conferir HTTP/MIME públicos, fontes, links, canonical e prévias
sociais. Manter a data do sitemap respaldada por publicação substantiva efetiva.
As pendências factuais de autoria, colaboração e funcionamento dos projetos na
seção 11 permanecem; nenhuma foi preenchida por inferência nesta fase.

A implementação local da Fase 4 está concluída; seu aceite de deploy e smoke test
público permanece pendente. Não houve commit, push, deploy, analytics, recompilação
SCSS ou início de outra fase.
