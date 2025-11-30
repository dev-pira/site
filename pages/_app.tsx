import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import { useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material";
import { theme } from "../styles/theme";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/700.css";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
// import { AuthProvider } from "../context/authContext";

function MyApp({ Component, pageProps }: AppProps) {
  const [faviconPath, setFaviconPath] = useState("/images/Favicon/light/");

  useEffect(() => {
    function handleColorSchemeChange() {
      if (window.matchMedia("(prefers-color-scheme: dark)")?.matches) {
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
      <GoogleTagManager
        gtmId={`${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER}`}
      />
      <GoogleAnalytics gaId={`${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${faviconPath}apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${faviconPath}favicon-32x32.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${faviconPath}favicon-16x16.png`}
        />
        <link rel="manifest" href={`${faviconPath}site.webmanifest`} />
      </Head>
      <ThemeProvider theme={theme}>
        {/* <AuthProvider> */}
        <Component {...pageProps} />
        {/* </AuthProvider> */}
      </ThemeProvider>
      <Analytics />
    </>
  );
}

export default MyApp;
