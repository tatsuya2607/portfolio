// Language-neutral fields (slug, id, tags, github, media, stack tech names)
// live alongside localized `en` / `ja` content blocks. Tech/stack values stay
// in English in both languages; only labels and prose are translated.

export const projects = [
  {
    slug: "gmail-ai",
    id: "gmail",
    index: "01",
    wordmark: "Gmail AI",
    tags: ["Next.js", "TypeScript", "Claude API", "Gmail API", "SQLite"],
    github: "https://github.com/tatsuya2607/Gmail_AI",
    live: null,
    cover: null,
    media: [],
    stack: {
      Framework: ["Next.js 15 (App Router)", "TypeScript"],
      AI: ["Anthropic Claude API (Haiku / Sonnet)", "Server-sent streaming"],
      Auth: ["Google OAuth 2.0 (offline access)", "AES-256-GCM token encryption"],
      Data: ["better-sqlite3", "Gmail API (googleapis)"],
      UI: ["Custom CSS themes", "Light / dark mode synced to OS"],
    },
    en: {
      title: "Gmail AI Reply",
      tagline: "Reply to Gmail without leaving your inbox — assisted by Claude.",
      overview: [
        "Built to remove the back-and-forth between Gmail and an AI chat window. The flow is single-screen: open the inbox, pick a message, dictate intent in plain language, watch Claude stream a reply, edit, and send — all without copy-paste.",
        "Multiple Google accounts can be linked through OAuth and switched at runtime. Tokens are stored locally with AES-256-GCM, and thread headers are preserved so replies thread correctly on the Gmail side.",
      ],
      features: [
        { title: "Multi-account Gmail with OAuth 2.0", body: "Link any number of Google accounts and switch between them at runtime. Tokens are encrypted at rest with AES-256-GCM." },
        { title: "Model switching: Haiku ↔ Sonnet", body: "Toggle between Claude Haiku for fast/economical drafts and Claude Sonnet when reply quality matters." },
        { title: "Streaming output", body: "Replies render token-by-token with a typewriter animation so review starts before generation finishes." },
        { title: "Thread-preserving replies", body: "In-Reply-To and References headers are written automatically, so threads stay intact on Gmail's side." },
        { title: "Reusable instruction templates", body: "Save common reply directives (tone, language, signature) and apply them with one click." },
        { title: "Rule-based auto-labeling", body: "Tag incoming mail by sender domain or address, similar to filters but evaluated client-side." },
        { title: "Local SQLite cache", body: "Message lists are cached for 3 minutes with better-sqlite3, cutting initial load on revisit." },
      ],
      learnings: [
        "Designing around streaming changes how you think about UI state — partial output has to look intentional, not flickery.",
        "OAuth refresh flows and at-rest token encryption need a clear lifecycle; treating them as an afterthought leaks complexity into every route.",
        "Threading a reply correctly is a header concern, not a body concern. RFC-correct In-Reply-To / References was the single highest-leverage detail.",
      ],
    },
    ja: {
      title: "Gmail AI Reply",
      tagline: "受信トレイを離れず、Claudeの力でGmailに返信する。",
      overview: [
        "GmailとAIチャット画面を行き来する手間をなくすために作りました。フローは1画面で完結します。受信トレイを開き、メールを選び、自然な言葉で指示を出すと、Claudeが返信をストリーミング生成。編集してそのまま送信でき、コピー&ペーストは不要です。",
        "複数のGoogleアカウントをOAuthで連携し、実行時に切り替えられます。トークンはAES-256-GCMでローカルに暗号化保存し、スレッドヘッダーを保持するためGmail側でも返信が正しくスレッド表示されます。",
      ],
      features: [
        { title: "OAuth 2.0による複数Gmailアカウント管理", body: "任意の数のGoogleアカウントを連携し、実行時に切り替え可能。トークンはAES-256-GCMで暗号化して保存します。" },
        { title: "モデル切替: Haiku ↔ Sonnet", body: "高速・低コストな下書きにはClaude Haiku、返信の品質を重視する場面ではClaude Sonnetを使い分けられます。" },
        { title: "ストリーミング出力", body: "返信はタイプライター風アニメーションで1トークンずつ表示され、生成完了を待たずに内容を確認し始められます。" },
        { title: "スレッドを保持する返信", body: "In-Reply-To / References ヘッダーを自動付与するため、Gmail側でもスレッドが崩れません。" },
        { title: "再利用できる指示テンプレート", body: "よく使う返信の指示（トーン・言語・署名など）を保存し、ワンクリックで適用できます。" },
        { title: "ルールベースの自動ラベリング", body: "送信元ドメインやアドレスで受信メールを自動タグ付け。フィルタに近い仕組みをクライアント側で評価します。" },
        { title: "ローカルSQLiteキャッシュ", body: "better-sqlite3でメール一覧を3分間キャッシュし、再訪時の初期読み込みを短縮します。" },
      ],
      learnings: [
        "ストリーミングを前提に設計すると、UIの状態の捉え方が変わります。途中の出力も「意図された表示」に見せる必要があり、チラつかせてはいけません。",
        "OAuthのリフレッシュフローとトークンの暗号化保存には明確なライフサイクル設計が必要で、後回しにすると複雑さが全ルートに漏れ出します。",
        "返信を正しくスレッド化するのは本文ではなくヘッダーの問題。RFCに沿った In-Reply-To / References が最も効果の大きいディテールでした。",
      ],
    },
  },
  {
    slug: "jsa-website",
    id: "culture",
    index: "02",
    wordmark: "JSA Site",
    tags: ["React 19", "Vite", "Tailwind CSS", "Firebase", "React Router 7"],
    github: "https://github.com/tatsuya2607/JSA-website",
    live: null,
    cover: null,
    media: [],
    stack: {
      Framework: ["React 19", "Vite 7", "React Router 7"],
      UI: ["Tailwind CSS", "Headless UI", "Heroicons / React Icons"],
      Backend: ["Firebase Authentication", "Cloud Firestore", "Cloud Storage"],
      Tooling: ["ESLint", "PostCSS"],
    },
    en: {
      title: "JSA — Japanese Culture Site",
      tagline: "A public site and admin console for a Japanese Student Association.",
      overview: [
        "A learning project deliberately scoped to real operations: a public site visitors can browse, plus a protected admin console maintainers can use to keep content fresh — both shipping from the same codebase.",
        "Content is stored in Firestore and images in Cloud Storage, with Firebase Authentication gating every admin route through a ProtectedRoute wrapper.",
      ],
      features: [
        { title: "Public sections", body: "Hero, About, Culture, Events, Team, and Contact — composed from reusable layout/section components." },
        { title: "Event listing with category filter", body: "Filters bind to URL queries (?category=…) so filtered views are linkable and reload-safe." },
        { title: "Authenticated admin dashboard", body: "Firebase Authentication backs login. /admin, /admin/events, and /admin/team are protected; unauthenticated visits redirect to /admin-login and return after sign-in." },
        { title: "Events & team CRUD", body: "Create, edit, and delete events and team members directly from the admin UI." },
        { title: "Image upload to Cloud Storage", body: "Event and team images upload to Firebase Storage with timestamped paths to avoid collisions." },
      ],
      learnings: [
        "Co-locating a public site and an authenticated admin in one repo forces you to think about route boundaries early — ProtectedRoute became the central seam.",
        "Firebase client config is meant to be public; the security work lives in Firestore/Storage Rules. That mental model took a beat to absorb.",
        "URL-as-state for filters is a small choice that pays back constantly: shareable links, refresh safety, browser back/forward all 'just work'.",
      ],
    },
    ja: {
      title: "JSA — 日本文化サイト",
      tagline: "日本人学生団体（JSA）のための公開サイト兼管理コンソール。",
      overview: [
        "実運用を意識して範囲を絞った学習プロジェクトです。来訪者が閲覧できる公開サイトと、運営者がコンテンツを更新できる認証付き管理コンソールを、同じコードベースから提供しています。",
        "コンテンツはFirestore、画像はCloud Storageに保存。Firebase Authenticationで、すべての管理ルートを ProtectedRoute ラッパー経由で保護しています。",
      ],
      features: [
        { title: "公開ページ", body: "Hero / About / Culture / Events / Team / Contact を、再利用可能なレイアウト・セクションコンポーネントで構成。" },
        { title: "カテゴリフィルタ付きイベント一覧", body: "フィルタをURLクエリ（?category=…）と連動させ、絞り込み後の表示もリンク共有・リロードに対応します。" },
        { title: "認証付き管理ダッシュボード", body: "Firebase Authenticationでログインを管理。/admin・/admin/events・/admin/team は保護され、未ログイン時は /admin-login にリダイレクト後、元のページへ復帰します。" },
        { title: "イベント・メンバーのCRUD", body: "イベントやチームメンバーの作成・編集・削除を、管理画面から直接行えます。" },
        { title: "Cloud Storageへの画像アップロード", body: "イベントやメンバーの画像を、衝突を避けるためタイムスタンプ付きパスでFirebase Storageにアップロードします。" },
      ],
      learnings: [
        "公開サイトと認証付き管理画面を1つのリポジトリに同居させると、ルートの境界を早い段階で意識せざるを得ません。ProtectedRoute が設計の中心になりました。",
        "Firebaseのクライアント設定は公開される前提で、セキュリティの本体は Firestore / Storage のルールにあります。この考え方を腹落ちさせるのに少し時間がかかりました。",
        "フィルタの状態をURLに持たせるのは小さな選択ですが、リンク共有・リロード耐性・ブラウザの戻る/進むが自然に機能し、繰り返し効いてきます。",
      ],
    },
  },
];

export const projectsBySlug = Object.fromEntries(
  projects.map((p) => [p.slug, p])
);

export const getProject = (slug) => projectsBySlug[slug];
