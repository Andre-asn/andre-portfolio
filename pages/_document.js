import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Scroll reveals are rendered with inline opacity:0 and are only
            cleared by Motion on the client. Without JS that would hide the
            whole page, so undo it when scripting is unavailable. */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<style>[style*="opacity:0"]{opacity:1!important;transform:none!important}</style>`,
          }}
        />
      </Head>
      <body className="bg-paper text-ink">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
