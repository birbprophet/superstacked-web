import { Metrics } from "@layer0/rum";
import Router from "@layer0/rum/Router";
import { DefaultSeo } from "next-seo";
import appConfig from "@/utils/appConfig";
import Head from "next/head";
import NextRouter from "next/router";
import "@/styles/globals.css";

new Metrics({
  token: "7378dd9d-8534-4ecb-a3bc-ff0c58e34ccf",
  router: new Router()
    .match("/", ({ setPageLabel }) => setPageLabel("home"))
    .match("/services", ({ setPageLabel }) => setPageLabel("services"))
    .match("/about", ({ setPageLabel }) => setPageLabel("about"))
    .match("/portfolio", ({ setPageLabel }) => setPageLabel("portfolio"))
    .match("/contact", ({ setPageLabel }) => setPageLabel("contact"))
    .match("/start", ({ setPageLabel }) => setPageLabel("start")),
}).collect();

NextRouter.events.on("routeChangeComplete", (url) => {
  // @ts-ignore
  window?.analytics?.page?.(url);
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
      </Head>
      <DefaultSeo
        title={appConfig.title}
        description={appConfig.description}
        openGraph={{
          title: appConfig.title,
          description: appConfig.description,
          locale: appConfig.locale,
          site_name: appConfig.site_name,
          images: [{ url: "/android-chrome-512x512.png" }],
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
