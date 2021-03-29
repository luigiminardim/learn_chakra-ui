import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Head
        children={[
          <title key="title" children="Custom page title" />,
          <link
            key="icon"
            rel="icon"
            type="image/x-icon"
            href="/favicon.ico"
          />,
          <meta
            key="description"
            name="description"
            content="Custom description."
          />,
        ]}
      />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
