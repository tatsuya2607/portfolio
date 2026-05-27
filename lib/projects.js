export const projects = [
  {
    slug: "gmail-ai",
    id: "gmail",
    index: "01",
    wordmark: "Gmail AI",
    title: "Gmail AI Reply",
    tagline: "Reply to Gmail without leaving your inbox — assisted by Claude.",
    summary:
      "A personal web app that ties multiple Gmail accounts to Claude so replies can be drafted, edited, and sent end-to-end inside the browser.",
    tags: ["Next.js", "TypeScript", "Claude API", "Gmail API", "SQLite"],
    github: "https://github.com/tatsuya2607/Gmail_AI",
    live: null,
    cover: null,
    media: [],
    overview: [
      "Built to remove the back-and-forth between Gmail and an AI chat window. The flow is single-screen: open the inbox, pick a message, dictate intent in plain language, watch Claude stream a reply, edit, and send — all without copy-paste.",
      "Multiple Google accounts can be linked through OAuth and switched at runtime. Tokens are stored locally with AES-256-GCM, and thread headers are preserved so replies thread correctly on the Gmail side.",
    ],
    features: [
      {
        title: "Multi-account Gmail with OAuth 2.0",
        body: "Link any number of Google accounts and switch between them at runtime. Tokens are encrypted at rest with AES-256-GCM.",
      },
      {
        title: "Model switching: Haiku ↔ Sonnet",
        body: "Toggle between Claude Haiku for fast/economical drafts and Claude Sonnet when reply quality matters.",
      },
      {
        title: "Streaming output",
        body: "Replies render token-by-token with a typewriter animation so review starts before generation finishes.",
      },
      {
        title: "Thread-preserving replies",
        body: "In-Reply-To and References headers are written automatically, so threads stay intact on Gmail's side.",
      },
      {
        title: "Reusable instruction templates",
        body: "Save common reply directives (tone, language, signature) and apply them with one click.",
      },
      {
        title: "Rule-based auto-labeling",
        body: "Tag incoming mail by sender domain or address, similar to filters but evaluated client-side.",
      },
      {
        title: "Local SQLite cache",
        body: "Message lists are cached for 3 minutes with better-sqlite3, cutting initial load on revisit.",
      },
    ],
    stack: {
      Framework: ["Next.js 15 (App Router)", "TypeScript"],
      AI: ["Anthropic Claude API (Haiku / Sonnet)", "Server-sent streaming"],
      Auth: ["Google OAuth 2.0 (offline access)", "AES-256-GCM token encryption"],
      Data: ["better-sqlite3", "Gmail API (googleapis)"],
      UI: ["Custom CSS themes", "Light / dark mode synced to OS"],
    },
    learnings: [
      "Designing around streaming changes how you think about UI state — partial output has to look intentional, not flickery.",
      "OAuth refresh flows and at-rest token encryption need a clear lifecycle; treating them as an afterthought leaks complexity into every route.",
      "Threading a reply correctly is a header concern, not a body concern. RFC-correct In-Reply-To / References was the single highest-leverage detail.",
    ],
  },
  {
    slug: "jsa-website",
    id: "culture",
    index: "02",
    wordmark: "JSA Site",
    title: "JSA — Japanese Culture Site",
    tagline: "A public site and admin console for a Japanese Student Association.",
    summary:
      "Public-facing pages introducing Japanese culture, plus an authenticated admin dashboard to manage events and team members via Firebase.",
    tags: ["React 19", "Vite", "Tailwind CSS", "Firebase", "React Router 7"],
    github: "https://github.com/tatsuya2607/JSA-website",
    live: null,
    cover: null,
    media: [],
    overview: [
      "A learning project deliberately scoped to real operations: a public site visitors can browse, plus a protected admin console maintainers can use to keep content fresh — both shipping from the same codebase.",
      "Content is stored in Firestore and images in Cloud Storage, with Firebase Authentication gating every admin route through a ProtectedRoute wrapper.",
    ],
    features: [
      {
        title: "Public sections",
        body: "Hero, About, Culture, Events, Team, and Contact — composed from reusable layout/section components.",
      },
      {
        title: "Event listing with category filter",
        body: "Filters bind to URL queries (?category=…) so filtered views are linkable and reload-safe.",
      },
      {
        title: "Authenticated admin dashboard",
        body: "Firebase Authentication backs login. /admin, /admin/events, and /admin/team are protected; unauthenticated visits redirect to /admin-login and return after sign-in.",
      },
      {
        title: "Events & team CRUD",
        body: "Create, edit, and delete events and team members directly from the admin UI.",
      },
      {
        title: "Image upload to Cloud Storage",
        body: "Event and team images upload to Firebase Storage with timestamped paths to avoid collisions.",
      },
    ],
    stack: {
      Framework: ["React 19", "Vite 7", "React Router 7"],
      UI: ["Tailwind CSS", "Headless UI", "Heroicons / React Icons"],
      Backend: ["Firebase Authentication", "Cloud Firestore", "Cloud Storage"],
      Tooling: ["ESLint", "PostCSS"],
    },
    learnings: [
      "Co-locating a public site and an authenticated admin in one repo forces you to think about route boundaries early — ProtectedRoute became the central seam.",
      "Firebase client config is meant to be public; the security work lives in Firestore/Storage Rules. That mental model took a beat to absorb.",
      "URL-as-state for filters is a small choice that pays back constantly: shareable links, refresh safety, browser back/forward all 'just work'.",
    ],
  },
];

export const projectsBySlug = Object.fromEntries(
  projects.map((p) => [p.slug, p])
);

export const getProject = (slug) => projectsBySlug[slug];
