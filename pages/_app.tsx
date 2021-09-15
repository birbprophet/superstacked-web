import { Metrics } from "@layer0/rum";
import Router from "@layer0/rum/Router";
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

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
