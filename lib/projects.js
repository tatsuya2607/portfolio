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
    live: "https://jsa-website-ivory.vercel.app",
    cover: "/works/jsa/hero.webp",
    media: [
      { type: "image", src: "/works/jsa/events.webp", alt: "Events page hero banner" },
      { type: "image", src: "/works/jsa/culture.webp", alt: "Japanese Culture section with Arts & Crafts and Food & Cuisine cards" },
      { type: "image", src: "/works/jsa/about.webp", alt: "About section with Community, Events, and Experience feature cards" },
    ],
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
  {
    slug: "matcha-cafe-lp",
    id: "matcha",
    index: "03",
    wordmark: "Matcha LP",
    tags: ["Next.js", "TypeScript", "next-intl", "i18n", "Vercel"],
    github: "https://github.com/tatsuya2607/matcha-cafe-lp",
    live: "https://matcha-cafe-lp.vercel.app",
    cover: "/works/matcha/hero.webp",
    media: [
      { type: "image", src: "/works/matcha/matcha-latte.webp", alt: "Matcha latte menu photo" },
      { type: "image", src: "/works/matcha/matcha-parfait.webp", alt: "Matcha parfait menu photo" },
      { type: "image", src: "/works/matcha/matcha-wagashi-set.webp", alt: "Matcha and wagashi set" },
      { type: "image", src: "/works/matcha/courtyard.webp", alt: "Café courtyard interior" },
      { type: "image", src: "/works/matcha/inner-room.webp", alt: "Inner tea room" },
      { type: "image", src: "/works/matcha/about-garden.webp", alt: "Garden view from the café" },
    ],
    stack: {
      Framework: ["Next.js 15 (App Router)", "React 19", "TypeScript"],
      i18n: ["next-intl", "Locale-prefixed routing (/ja, /en)"],
      UI: ["Hand-written CSS (wa-modern theme)", "Scroll-reveal & micro-interactions"],
      Fonts: ["next/font", "Cormorant Garamond", "Noto Serif / Sans JP"],
      Tooling: ["sharp (WebP optimization)", "Vercel (SSG deploy)"],
    },
    en: {
      title: "Kissa Midori — Matcha Café LP",
      tagline: "A bilingual, wa-modern landing page for a fictional matcha café in Gion, Kyoto.",
      overview: [
        "A production-grade marketing landing page for a matcha café, built as a portfolio piece. It targets two audiences — locals in Kyoto and overseas matcha lovers visiting Japan — so the whole site switches between Japanese and English with a single click. There's no reservation or e-commerce flow; it's an information / brand site focused on atmosphere, craft, and conversion to an in-person visit.",
        "The visual base started from a Claude Design HTML mockup and was rebuilt from scratch as a fully typed, internationalized Next.js application. All copy and content data live in JSON catalogs, and every photo is an original asset served as optimized WebP.",
      ],
      features: [
        { title: "Full bilingual support (JA / EN)", body: "next-intl with locale-prefixed routing (/ja, /en) and an in-nav language switcher. All copy lives in JSON catalogs kept in sync across both languages." },
        { title: "Distinctive wa-modern design", body: "First-harvest matcha greens, warm cream tones, and a Cormorant Garamond × Noto Serif/Sans JP type pairing — all hand-authored CSS with no UI kit." },
        { title: "Crafted micro-interactions", body: "Scroll-reveal animations, an animated count-up for stats, a slow hero pan, a scroll-progress bar, and a subtle film-grain texture." },
        { title: "All-original imagery", body: "Every photo — menu, interior, hero — is a custom asset, served as resized WebP from public/images." },
        { title: "Accessible & resilient", body: "Keyboard focus styles, ARIA labels, and full prefers-reduced-motion support." },
        { title: "Fast by default", body: "Statically generated per locale (SSG), WebP imagery (source PNGs ~40 MB → ~1.7 MB), optimized fonts via next/font, and an SEO / Open Graph metadata layer." },
      ],
      learnings: [
        "Designing for two languages from the start changes layout decisions — line lengths, font pairings, and component spacing all have to hold up in both JA and EN.",
        "Locale-prefixed routing with next-intl is clean once the middleware and routing config are set up correctly; getting redirects right was the fiddly part.",
        "Image weight dominates a photo-heavy brand site. Converting and resizing to WebP with sharp (~40 MB → ~1.7 MB) was the single biggest performance win.",
      ],
    },
    ja: {
      title: "喫茶みどり — 抹茶カフェ LP",
      tagline: "京都・祇園の架空の抹茶カフェを題材にした、和モダン × 二言語対応のランディングページ。",
      overview: [
        "ポートフォリオ用に制作した、抹茶カフェの集客用ランディングページです。ターゲットは「京都の地元客」と「抹茶を目当てに訪日する海外客」の二層。そのため、サイト全体を日本語・英語ワンクリックで切り替えられる構成にしています。予約・EC機能は持たず、空間と作り手のこだわりを伝えて来店につなげる、情報・ブランドサイトとして設計しました。",
        "ビジュアルの土台は Claude Design の HTML モックアップから出発し、型安全で多言語対応の Next.js アプリとしてゼロから再構築しています。文言・コンテンツデータはすべて JSON で一元管理し、写真はすべて自前素材を最適化済み WebP で配信しています。",
      ],
      features: [
        { title: "完全な日英対応（JA / EN）", body: "next-intl によるロケール付きルーティング（/ja・/en）とナビ内の言語スイッチャー。文言はすべて JSON で一元管理し、両言語でキーを同期しています。" },
        { title: "個性のある和モダンデザイン", body: "一番摘み抹茶のグリーンと温かいクリーム色、Cormorant Garamond × Noto Serif/Sans JP の組み合わせ。UIキットに頼らない手書きCSSです。" },
        { title: "作り込んだ演出", body: "スクロールリビール、数値カウントアップ、ヒーローのゆるやかなパン、スクロール進捗バー、フィルムグレインの質感。" },
        { title: "全画像がオリジナル", body: "メニュー・店内・ヒーローの写真はすべて自前素材で、public/images からリサイズ済みWebPとして配信しています。" },
        { title: "アクセシビリティ配慮", body: "キーボードフォーカス、ARIAラベル、prefers-reduced-motion に対応しています。" },
        { title: "高速", body: "ロケール別の静的生成（SSG）、WebP最適化画像（元PNG約40MB → 約1.7MB）、next/font によるフォント最適化、SEO/OGメタ対応。" },
      ],
      learnings: [
        "最初から二言語を前提に設計すると、行長・フォントの組み合わせ・余白など、レイアウトの判断が変わります。日英どちらでも破綻しないようにする必要があります。",
        "next-intl のロケール付きルーティングは、ミドルウェアとルーティング設定が整えば綺麗にまとまります。リダイレクトを正しく扱うのが細かく手のかかる部分でした。",
        "写真主体のブランドサイトでは画像の容量が支配的です。sharp で WebP に変換・リサイズした（約40MB → 約1.7MB）ことが、最も効果の大きいパフォーマンス改善でした。",
      ],
    },
  },
];

export const projectsBySlug = Object.fromEntries(
  projects.map((p) => [p.slug, p])
);

export const getProject = (slug) => projectsBySlug[slug];
