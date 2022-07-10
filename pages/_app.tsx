import type { AppProps } from "next/app";
import Head from "next/head";
import { RecoilRoot } from "recoil";
import { AnimatePresence } from "framer-motion";
import Layout from "../layouts";
import { APP_NAME } from "../constants";
import "../styles/globals.css";
import "bulma/css/bulma.css";
import "remixicon/fonts/remixicon.css";

const App = ({ Component, pageProps, router }: AppProps) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" lang="ja"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{APP_NAME}</title>
      </Head>
      <RecoilRoot>
        <AnimatePresence exitBeforeEnter>
          <Layout>
            <Component key={router.asPath} {...pageProps} />
          </Layout>
        </AnimatePresence>
      </RecoilRoot>
    </>
  );
}

export default App;
