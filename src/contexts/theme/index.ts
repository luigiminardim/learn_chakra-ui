import { textStyles } from './textStyles';
import { breakpoints } from './breakpoints';
import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
}

export const theme = extendTheme({ config, breakpoints, textStyles })