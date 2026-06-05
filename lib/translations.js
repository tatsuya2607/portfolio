// UI string translations. Proper nouns, tech names, and brand marks
// (e.g. "Tatsuya Ogawa", "Next.js", "GitHub", "T.O.") intentionally stay
// in English across both languages.

export const translations = {
  en: {
    nav: { about: "About", works: "Works", contact: "Contact" },
    hero: {
      label: "Frontend Developer",
      intro: "Building digital experiences from the void.",
      ctaPrimary: "View My Work",
      ctaSecondary: "Contact Me",
      scroll: "Scroll",
    },
    about: {
      eyebrow: "— About",
      heading: { pre: "About ", accent: "Me", post: "" },
      bio: [
        [
          { t: "I'm a " },
          { t: "frontend developer", strong: true },
          { t: " with a passion for building modern, visually engaging web experiences." },
        ],
        [
          { t: "CS degree", strong: true },
          { t: " graduate from a U.S. university, I specialize in " },
          { t: "React", strong: true },
          { t: " and " },
          { t: "Next.js", strong: true },
          { t: " — crafting interfaces where clean code meets thoughtful design." },
        ],
        [
          { t: "I enjoy turning complex ideas into smooth, intuitive products that live on the web." },
        ],
      ],
      stackTitle: "Tech Stack",
      groups: {
        languages: "Languages & Markup",
        frameworks: "Frameworks & Libraries",
        tools: "Tools",
      },
    },
    works: {
      eyebrow: "— Works",
      heading: { pre: "My ", accent: "Projects", post: "" },
      link: "View Project",
      comingLink: "Repository coming soon",
      comingBadge: "Coming Soon",
      cards: {
        gmail: {
          title: "Gmail AI Reply",
          desc: "Web app that automatically generates email replies using Claude AI. Features multi-account Gmail management, OAuth authentication, and streaming output.",
        },
        culture: {
          title: "Japanese Culture Site",
          desc: "Public-facing site introducing Japanese culture plus an authenticated admin console for managing events and team members.",
        },
        matcha: {
          title: "Matcha Cafe LP",
          desc: "A bilingual (JA/EN) wa-modern landing page for a Kyoto matcha café, built with Next.js & next-intl. Locale-prefixed routing, hand-written CSS, and original WebP imagery.",
        },
        aura: {
          title: "Aura Buds — Product LP",
          desc: "An Apple-style product landing page for a fictional pair of wireless earbuds, hand-built as a single static page with scroll-reveal animations, a canvas noise field, and animated count-up stats.",
        },
      },
    },
    contact: {
      eyebrow: "— Contact",
      heading: { pre: "Get In ", accent: "Touch", post: "" },
      sub: "Feel free to reach out for project inquiries or just to say hello.",
    },
    footer: { mark: "Built from the void" },
    detail: {
      back: "Back to Works",
      overview: "— Overview",
      screenshots: "— Screenshots",
      techStack: "— Tech Stack",
      keyFeatures: "— Key Features",
      learnings: "— What I Took Away",
      viewGithub: "View on GitHub",
      liveSite: "Live Site",
      enlarge: "Click to enlarge",
      close: "Close",
      stackGroups: {
        Framework: "Framework",
        AI: "AI",
        Auth: "Auth",
        Data: "Data",
        UI: "UI",
        i18n: "Internationalization",
        Fonts: "Fonts",
        Backend: "Backend",
        Tooling: "Tooling",
      },
    },
  },

  ja: {
    nav: { about: "プロフィール", works: "制作実績", contact: "お問い合わせ" },
    hero: {
      label: "フロントエンドエンジニア",
      intro: "無から、デジタル体験を創り出す。",
      ctaPrimary: "制作実績を見る",
      ctaSecondary: "お問い合わせ",
      scroll: "スクロール",
    },
    about: {
      eyebrow: "— プロフィール",
      heading: { pre: "", accent: "私", post: "について" },
      bio: [
        [
          { t: "モダンで視覚的に魅力的なWeb体験を作ることに情熱を注ぐ" },
          { t: "フロントエンドエンジニア", strong: true },
          { t: "です。" },
        ],
        [
          { t: "アメリカの大学で" },
          { t: "情報科学（CS）の学位", strong: true },
          { t: "を取得。" },
          { t: "React", strong: true },
          { t: "と" },
          { t: "Next.js", strong: true },
          { t: "を専門とし、クリーンなコードと考え抜かれたデザインが融合したインターフェースを制作しています。" },
        ],
        [
          { t: "複雑なアイデアを、滑らかで直感的なWebプロダクトへと落とし込むことを楽しんでいます。" },
        ],
      ],
      stackTitle: "技術スタック",
      groups: {
        languages: "言語 & マークアップ",
        frameworks: "フレームワーク & ライブラリ",
        tools: "ツール",
      },
    },
    works: {
      eyebrow: "— 制作実績",
      heading: { pre: "", accent: "制作", post: "実績" },
      link: "詳細を見る",
      comingLink: "リポジトリは準備中",
      comingBadge: "準備中",
      cards: {
        gmail: {
          title: "Gmail AI Reply",
          desc: "Claude AIを使ってメール返信を自動生成するWebアプリ。複数Gmailアカウント管理、OAuth認証、ストリーミング出力に対応。",
        },
        culture: {
          title: "日本文化サイト（JSA）",
          desc: "日本文化を紹介する公開サイトと、イベントやメンバーを管理する認証付き管理画面を備えたアプリ。",
        },
        matcha: {
          title: "抹茶カフェ LP",
          desc: "京都の抹茶カフェ向け、和モダンな日英二言語対応ランディングページ。Next.js + next-intl 製。ロケール付きルーティング、手書きCSS、オリジナルWebP画像。",
        },
        aura: {
          title: "Aura Buds — 製品LP",
          desc: "架空のワイヤレスイヤホンのApple系プロダクトLP。フレームワークを使わず1枚の静的ページとして制作し、スクロール演出・Canvasのノイズ表現・カウントアップを実装。",
        },
      },
    },
    contact: {
      eyebrow: "— お問い合わせ",
      heading: { pre: "お", accent: "問い合わせ", post: "" },
      sub: "プロジェクトのご相談やご挨拶など、お気軽にご連絡ください。",
    },
    footer: { mark: "無から創る" },
    detail: {
      back: "制作実績へ戻る",
      overview: "— 概要",
      screenshots: "— スクリーンショット",
      techStack: "— 技術スタック",
      keyFeatures: "— 主な機能",
      learnings: "— 学んだこと",
      viewGithub: "GitHubで見る",
      liveSite: "ライブサイト",
      enlarge: "クリックで拡大",
      close: "閉じる",
      stackGroups: {
        Framework: "フレームワーク",
        AI: "AI",
        Auth: "認証",
        Data: "データ",
        UI: "UI",
        i18n: "多言語化",
        Fonts: "フォント",
        Backend: "バックエンド",
        Tooling: "ツール",
      },
    },
  },
};
