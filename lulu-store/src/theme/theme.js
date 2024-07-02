// src/theme/theme.js
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    pastelGreen: {
      50: "#f0f8f1",
      100: "#d8eada",
      200: "#b8d9bc",
      300: "#92c397",
      400: "#6bab71",
      500: "#4f9256",
      600: "#3d7443",
      700: "#2c5631",
      800: "#1b381f",
      900: "#0a1a0d",
    },
    neutral: {
      50: "#f7f7f7",
      100: "#e6e6e6",
      200: "#d1d1d1",
      300: "#b3b3b3",
      400: "#8e8e8e",
      500: "#6c6c6c",
      600: "#545454",
      700: "#3b3b3b",
      800: "#232323",
      900: "#0f0f0f",
    },
  },
  styles: {
    global: {
      body: {
        bg: "pastelGreen.50",
        color: "neutral.800",
      },
    },
  },
});

export default theme;