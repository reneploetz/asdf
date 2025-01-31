import{_ as s,c as a,a2 as i,o as t}from"./chunks/framework.BQmytedh.js";const k=JSON.parse('{"title":"asdf","description":"","frontmatter":{},"headers":[],"relativePath":"pt-br/contribute/core.md","filePath":"pt-br/contribute/core.md","lastUpdated":1687069487000}'),n={name:"pt-br/contribute/core.md"};function o(l,e,r,p,d,c){return t(),a("div",null,e[0]||(e[0]=[i(`<h1 id="asdf" tabindex="-1">asdf <a class="header-anchor" href="#asdf" aria-label="Permalink to &quot;asdf&quot;">​</a></h1><blockquote><p>Hi, we&#39;ve recently migrated our docs and added some new pages. If you would like to help translate this page, see the &quot;Edit this page&quot; link at the bottom of the page.</p></blockquote><p>guia de contribuição principal <code>asdf</code>.</p><h2 id="configuracao-inicial" tabindex="-1">Configuração inicial <a class="header-anchor" href="#configuracao-inicial" aria-label="Permalink to &quot;Configuração inicial&quot;">​</a></h2><p>Fork <code>asdf</code> no GitHub e/ou Git clone o branch padrão:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># clone your fork</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">GITHUB_USE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">R</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/asdf.git</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># or clone asdf</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/asdf-vm/asdf.git</span></span></code></pre></div><p>As ferramentas para o desenvolvimento do núcleo estão em <code>.tool-versions</code> deste repositório. Se você deseja gerenciar com o próprio <code>asdf</code>, adicione os plugins:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">asdf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> plugin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bats</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/timgluz/asdf-bats.git</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">asdf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> plugin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> shellcheck</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/luizm/asdf-shellcheck.git</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">asdf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> plugin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> shfmt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/luizm/asdf-shfmt.git</span></span></code></pre></div><p>Instale as versões para desenvolver <code>asdf</code> com:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">asdf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span></span></code></pre></div><p><em>pode</em> ser útil não usar <code>asdf</code> para gerenciar as ferramentas durante o desenvolvimento em sua máquina local, pois você pode precisar quebrar funcionalidades que, então, quebrariam suas ferramentas de desenvolvimento. Aqui está a lista bruta de ferramentas:</p><ul><li><a href="https://github.com/bats-core/bats-core" target="_blank" rel="noreferrer">bats-core</a>: Bash Automated Testing System, para testes unitários de scripts compatíveis com Bash ou POSIX.</li><li><a href="https://github.com/koalaman/shellcheck" target="_blank" rel="noreferrer">shellcheck</a>: Ferramenta de análise estática para scripts de shell.</li><li><a href="https://github.com/mvdan/sh" target="_blank" rel="noreferrer">shfmt</a>: Um analisador, formatador e interpretador de shell com suporte a bash; inclui shfmt</li></ul><h2 id="desenvolvimento" tabindex="-1">Desenvolvimento <a class="header-anchor" href="#desenvolvimento" aria-label="Permalink to &quot;Desenvolvimento&quot;">​</a></h2><p>Se você quiser testar suas alterações sem fazer alterações em seu <code>asdf</code> instalado, você pode definir a variável <code>$ASDF_DIR</code> para o caminho onde você clonou o repositório e anexar temporariamente o diretório <code>bin</code> e <code>shims</code> do diretório para o seu caminho.</p><p>É melhor formatar, lint e testar seu código localmente antes de confirmar ou enviar para o controle remoto. Use os seguintes scripts/comandos:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Shellcheck</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./scripts/shellcheck.bash</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Format</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./scripts/shfmt.bash</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Test: all tests</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bats</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test/</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Test: for specific command</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bats</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test/list_commands.bash</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><strong>Adicione testes!</strong> - Os testes são <strong>necessários</strong> para novos recursos e aceleram a revisão de correções de bugs. Por favor, cubra novos caminhos de código antes de criar um Pull Request. Consulte <a href="https://bats-core.readthedocs.io/en/stable/index.html" target="_blank" rel="noreferrer">documentação do bats-core</a></p></div><h2 id="teste-de-bats" tabindex="-1">Teste de BATS <a class="header-anchor" href="#teste-de-bats" aria-label="Permalink to &quot;Teste de BATS&quot;">​</a></h2><p>É <strong>fortemente recomendado</strong> examinar o conjunto de testes existente e a <a href="https://bats-core.readthedocs.io/en/stable/index.html" target="_blank" rel="noreferrer">documentação do bats-core</a> antes de escrever os testes.</p><p>A depuração de BATs pode ser difícil às vezes. Usar a saída TAP com o sinalizador <code>-t</code> permitirá que você imprima saídas com o descritor de arquivo especial <code>&gt;&amp;3</code> durante a execução do teste, simplificando a depuração. Como um exemplo:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># test/some_tests.bats</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">printf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;%s\\n&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Will not be printed during bats test/some_tests.bats&quot;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">printf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;%s\\n&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Will be printed during bats -t test/some_tests.bats&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;&amp;3</span></span></code></pre></div><p>Isso está documentado em bats-core <a href="https://bats-core.readthedocs.io/en/stable/writing-tests.html#printing-to-the-terminal" target="_blank" rel="noreferrer">Imprimindo no Terminal</a>.</p><h2 id="pull-requests-releases-e-commits-convencionais" tabindex="-1">Pull Requests, Releases e Commits Convencionais <a class="header-anchor" href="#pull-requests-releases-e-commits-convencionais" aria-label="Permalink to &quot;Pull Requests, Releases e Commits Convencionais&quot;">​</a></h2><p>O <code>asdf</code> está usando uma ferramenta de lançamento automatizada chamada <a href="https://github.com/googleapis/release-please" target="_blank" rel="noreferrer">Release Please</a> para aumentar automaticamente a versão <a href="https://semver.org/" target="_blank" rel="noreferrer">SemVer</a> e gerar a <a href="https://github.com/asdf-vm/asdf/blob/master/CHANGELOG.md" target="_blank" rel="noreferrer">Changelog</a>. Essas informações são determinadas lendo o histórico de confirmação desde a última versão.</p><p><a href="https://www.conventionalcommits.org/" target="_blank" rel="noreferrer">Mensagens de confirmação convencionais</a> definem o formato do título da solicitação pull que se torna o formato da mensagem de confirmação na ramificação padrão. Isso é aplicado com GitHub Action <a href="https://github.com/amannn/action-semantic-pull-request" target="_blank" rel="noreferrer"><code>amannn/action-semantic-pull-request</code></a>.</p><p>O Commit Convencional segue este formato:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;type&gt;[optional scope][optional !]: &lt;description&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;!-- examples --&gt;</span></span>
<span class="line"><span>fix: some fix</span></span>
<span class="line"><span>feat: a new feature</span></span>
<span class="line"><span>docs: some documentation update</span></span>
<span class="line"><span>docs(website): some change for the website</span></span>
<span class="line"><span>feat!: feature with breaking change</span></span></code></pre></div><p>A lista completa de <code>&lt;types&gt;</code> é: <code>feat</code>, <code>fix</code>, <code>docs</code>, <code>style</code>, <code>refactor</code>, <code>perf</code>, <code>test</code>, <code>build</code>, <code>ci</code>, <code>chore</code>, <code>revert</code>.</p><p>O <code>!</code> indica uma mudança de ruptura.</p><p><code>fix</code>: will create a new SemVer <code>patch</code><code>feat</code>: will create a new SemVer <code>minor</code><code>&lt;type&gt;!</code>: will create a new SemVer <code>major</code></p><p>O título da solicitação pull deve seguir este formato.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Use o formato de mensagem de confirmação convencional para seu título de solicitação de pull.</p></div><h2 id="imagens-docker" tabindex="-1">Imagens Docker <a class="header-anchor" href="#imagens-docker" aria-label="Permalink to &quot;Imagens Docker&quot;">​</a></h2><p>Os projetos <a href="https://github.com/vic/asdf-alpine" target="_blank" rel="noreferrer">asdf-alpine</a> e <a href="https://github.com/vic/asdf-ubuntu" target="_blank" rel="noreferrer">asdf-ubuntu</a> são um esforço contínuo para fornecer imagens de algumas ferramentas asdf. Você pode usar essas imagens docker como base para seus servidores de desenvolvimento ou para executar seus aplicativos de produção.</p>`,34)]))}const m=s(n,[["render",o]]);export{k as __pageData,m as default};
