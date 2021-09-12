import "@/styles/globals.css";
import { Metrics } from "@layer0/rum";

new Metrics({
  token: "7378dd9d-8534-4ecb-a3bc-ff0c58e34ccf",
}).collect();

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
