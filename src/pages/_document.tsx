// pages/_document.js
import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { theme } from "../contexts/theme";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="pt">
        <Head />
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
