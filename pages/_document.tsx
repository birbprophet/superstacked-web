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
          <script
            defer
            dangerouslySetInnerHTML={{
              __html: `
              !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics._writeKey="p09PvD5VvEeQmnKyN3tFeRPlnVDlJaU5";analytics._cdn="https://cdn.segment.com";analytics.SNIPPET_VERSION="4.15.0";
              analytics.load("p09PvD5VvEeQmnKyN3tFeRPlnVDlJaU5");
              analytics.page();
            }}();`,
            }}
          />
          <script src="https://kwesforms.com/v2/kwes-script.js" defer />
        </Head>
        <body className="scrollbar scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-700">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
