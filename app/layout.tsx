import type { Metadata } from "next";
import "../public/css/styles.css";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import InitScroll from "@/components/scroll/InitScroll";
import Script from "next/script"; // ✅ use next/script
import LenisSmoothScroll from "@/components/scroll/LenisSmoothScroll";
export const metadata: Metadata = {
  title:
    "Live Preview Pages  || Braxton - Personal Portfolio & Resume React Nextjs Template",
  description: "Braxton - Personal Portfolio & Resume React Nextjs Template",
};

const setColorSchemeScript = `
  (function() {
    try {
      document.documentElement.setAttribute('color-scheme', 'dark');
      localStorage.setItem('color-scheme', 'dark');
    } catch(e) {}
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      color-scheme="dark"
      suppressHydrationWarning
      className="no-touch"
    >
      <body>
        <Script id="set-color-scheme" strategy="beforeInteractive">
          {setColorSchemeScript}
        </Script>
        {children}
        <LenisSmoothScroll />
        <InitScroll />
      </body>
    </html>
  );
}
