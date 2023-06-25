import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [faviconPath, setFaviconPath] = useState("/images/Favicon/light/");

  useEffect(() => {
    function handleColorSchemeChange() {
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        setFaviconPath("/images/Favicon/dark/");
      } else {
        setFaviconPath("/images/Favicon/light/");
      }
    }

    const colorSchemeQuery = window.matchMedia("(prefers-color-scheme: dark)");
    colorSchemeQuery.addEventListener("change", handleColorSchemeChange);

    // Verifica o tema dark quando o componente é montado
    handleColorSchemeChange();

    return () => {
      colorSchemeQuery.removeEventListener("change", handleColorSchemeChange);
    };
  }, []);
  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href={`${faviconPath}apple-touch-icon.png`} />
        <link rel="icon" type="image/png" sizes="32x32" href={`${faviconPath}favicon-32x32.png`} />
        <link rel="icon" type="image/png" sizes="16x16" href={`${faviconPath}favicon-16x16.png`} />
        <link rel="manifest" href={`${faviconPath}site.webmanifest`} />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
