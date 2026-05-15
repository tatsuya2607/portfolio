import "./globals.css";

export const metadata = {
  title: "Tatsuya Ogawa — Frontend Developer",
  description: "Building digital experiences from the void.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
