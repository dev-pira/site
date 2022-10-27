import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
