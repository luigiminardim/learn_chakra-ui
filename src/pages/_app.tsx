import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/dist/next-server/lib/router/router";
import Head from "next/head";
import { theme } from "../contexts/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title key="title">Custom page title</title>
        <link key="icon" rel="icon" type="image/x-icon" href="/favicon.ico" />
        <meta
          key="description"
          name="description"
          content="Custom description."
        />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
