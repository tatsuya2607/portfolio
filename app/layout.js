import "./globals.css";

const siteUrl = "https://portfolio-next-nine-smoky.vercel.app";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Tatsuya Ogawa — Frontend Developer",
    template: "%s — Tatsuya Ogawa",
  },
  description: "Frontend developer building modern, visually engaging web experiences with React and Next.js.",
  keywords: ["Tatsuya Ogawa", "Frontend Developer", "Next.js", "React", "Portfolio"],
  authors: [{ name: "Tatsuya Ogawa", url: siteUrl }],
  creator: "Tatsuya Ogawa",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Tatsuya Ogawa — Frontend Developer",
    description: "Frontend developer building modern, visually engaging web experiences with React and Next.js.",
    siteName: "Tatsuya Ogawa",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tatsuya Ogawa — Frontend Developer",
    description: "Frontend developer building modern, visually engaging web experiences with React and Next.js.",
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#0a0a0f",
  colorScheme: "dark",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
