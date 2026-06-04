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
          { t: "Currently completing my " },
          { t: "CS degree", strong: true },
          { t: ", I specialize in " },
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
          { t: "現在は" },
          { t: "情報科学（CS）の学位", strong: true },
          { t: "取得に向けて学びながら、" },
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
