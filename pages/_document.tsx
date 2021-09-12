import Document, { Html, Head, Main, NextScript } from "next/document";

import appConfig from "@/utils/appConfig";

// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
  render() {
    return (
      <Html lang={appConfig.locale}>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Domine:wght@400..700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="scrollbar scrollbar-thin scrollbar-thumb-primary-500 scrollbar-track-primary-100">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
