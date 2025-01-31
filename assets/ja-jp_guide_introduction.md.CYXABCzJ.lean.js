import{_ as a,c as o,a2 as r,o as t}from"./chunks/framework.BQmytedh.js";const f=JSON.parse('{"title":"イントロダクション","description":"","frontmatter":{},"headers":[],"relativePath":"ja-jp/guide/introduction.md","filePath":"ja-jp/guide/introduction.md","lastUpdated":1704890757000}'),d={name:"ja-jp/guide/introduction.md"};function n(i,e,c,s,h,l){return t(),o("div",null,e[0]||(e[0]=[r('<h1 id="イントロダクション" tabindex="-1">イントロダクション <a class="header-anchor" href="#イントロダクション" aria-label="Permalink to &quot;イントロダクション&quot;">​</a></h1><p><code>asdf</code>は、ツールのためのバージョンマネージャです。すべてのツールのバージョンは単一のファイル(<code>.tool-versions</code>)内で定義されるため、プロジェクトのGitリポジトリにチェックインして共有することで、チーム全員に同じーバージョンのツールを使ってもらえるようになります。</p><p>従来は、複数のCLIのバージョンマネージャを用意する必要があり、それぞれが異なるAPI、構成ファイル、および実装(<code>$PATH</code>の操作、Shim、環境変数など)となっていました。<code>asdf</code>は、開発ワークフローを簡素化するための単一インターフェースと構成ファイルを提供しており、シンプルなプラグインインターフェースを使って、すべてのツール・ランタイムに拡張することができます。</p><h2 id="どうやって動いているの" tabindex="-1">どうやって動いているの <a class="header-anchor" href="#どうやって動いているの" aria-label="Permalink to &quot;どうやって動いているの&quot;">​</a></h2><p>シェル上で<code>asdf</code>コアがセットアップすると、特定のツールを管理するためのプラグインをインストールすることができるようになります。プラグインによってツールがインストールされると、インストールされる実行ファイルごとに<a href="https://en.wikipedia.org/wiki/Shim_(computing)" target="_blank" rel="noreferrer">Shim</a>が作成されます。これらの実行ファイルを実行しようとすると、代わりにShimが実行され、<code>.tool-versions</code>で定義されているバージョンを<code>asdf</code>が認識して、当該バージョンが実行されます。</p><h2 id="関連プロジェクト" tabindex="-1">関連プロジェクト <a class="header-anchor" href="#関連プロジェクト" aria-label="Permalink to &quot;関連プロジェクト&quot;">​</a></h2><h3 id="nvm-n-rbenv-etc" tabindex="-1">nvm / n / rbenv etc <a class="header-anchor" href="#nvm-n-rbenv-etc" aria-label="Permalink to &quot;nvm / n / rbenv etc&quot;">​</a></h3><p><a href="https://github.com/nvm-sh/nvm" target="_blank" rel="noreferrer">nvm</a>、<a href="https://github.com/tj/n" target="_blank" rel="noreferrer">n</a>、および<a href="https://github.com/rbenv/rbenv" target="_blank" rel="noreferrer">rbenv</a>のようなツールはすべて、ツールによってインストールされる実行ファイルのShimを作成するシェルスクリプトです。</p><p><code>asdf</code>はこれらのツールと非常に似ていて、ツール/ランタイムのバージョン管理という分野では競合しています。<code>asdf</code>はプラグインシステムを採用し、他のツールと差別化することで、ツール/ランタイムごとのマネージャ、マネージャごとの異なるコマンド、そしてリポジトリ内の様々な<code>*-version</code>ファイルといったものを排除しています。</p><h3 id="direnv" tabindex="-1">direnv <a class="header-anchor" href="#direnv" aria-label="Permalink to &quot;direnv&quot;">​</a></h3><blockquote><p>シェルに、ディレクトリごとに環境変数をロード/アンロードできる機能を付け加えます。</p></blockquote><p><code>asdf</code>は環境変数を管理することはしませんが、direnvの動作を<code>asdf</code>に統合する<a href="https://github.com/asdf-community/asdf-direnv" target="_blank" rel="noreferrer"><code>asdf-direnv</code></a>プラグインが存在します。</p><p>詳しくは<a href="https://direnv.net/" target="_blank" rel="noreferrer">direnvのドキュメント</a>をご覧ください。</p><h3 id="homebrew" tabindex="-1">Homebrew <a class="header-anchor" href="#homebrew" aria-label="Permalink to &quot;Homebrew&quot;">​</a></h3><blockquote><p>macOS(またはLinux)のためのパッケージマネージャー</p></blockquote><p>Homebrewは、パッケージとその上位の依存関係を管理します。<code>asdf</code>は上位の依存関係を管理することはしませんし、パッケージマネージャでもありません。それらの管理はユーザが負担することとなりますが、<code>asdf</code>はなるべく依存関係のリストを小さく保つように努めています。</p><p>詳しくは<a href="https://brew.sh/" target="_blank" rel="noreferrer">Homebrewのドキュメント</a>をご覧ください。</p><h3 id="nixos" tabindex="-1">NixOS <a class="header-anchor" href="#nixos" aria-label="Permalink to &quot;NixOS&quot;">​</a></h3><blockquote><p>Nixは、パッケージ管理とシステム構成に独自のアプローチを取り入れたツールです。</p></blockquote><p>NixOSは、各ツールの依存関係ツリー全体でパッケージのバージョンを正確に管理することで、真に再現可能な環境を構築することを目指しています。<code>asdf</code>でそのようなことはできません。NixOSは、独自のプログラミング言語、たくさんのCLIツール、そして60,000を超えるパッケージコレクションによって、それらの機能を支えています。</p><p>繰り返しになりますが、<code>asdf</code>は上位の依存関係を管理することはしませんし、パッケージマネージャでもありません。</p><p>詳しくは<a href="https://nixos.org/guides/how-nix-works.html" target="_blank" rel="noreferrer">NixOSのドキュメント</a>をご覧ください。</p><h2 id="なぜasdfを使うの" tabindex="-1">なぜasdfを使うの? <a class="header-anchor" href="#なぜasdfを使うの" aria-label="Permalink to &quot;なぜasdfを使うの?&quot;">​</a></h2><p><code>asdf</code>は、プラグインシステムによって<strong>多くの</strong>ツールをサポートしており、シェル構成にたった1行の<strong>シェル</strong>スクリプトを記述するだけで使えるというシンプルさ・親しみやすさによって、チームが<strong>確実に</strong>同じバージョンのツールを使用することを保証できます。</p><div class="tip custom-block"><p class="custom-block-title">Note</p><p><code>asdf</code>はシステムのパッケージマネージャになることを目指してはいません。あくまで、ツールのバージョンマネージャです。プラグインを作成することで、どのようなツールでも<code>asdf</code>で管理できるようになりますが、それがそのツールにとって最善の方法であるとは限りませんのでご注意ください。</p></div>',25)]))}const b=a(d,[["render",n]]);export{f as __pageData,b as default};
