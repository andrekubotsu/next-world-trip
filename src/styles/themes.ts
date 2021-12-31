import { extendTheme } from "@chakra-ui/react";

// Global styles, text, colors and customizations

const colors = {
  yellow: {
    highlight: "#FFBA08",
    highlight50: "#F0CD73",
  },
  gray: {
    background: "#1D1D1D",
    headingsText: "#47585B",
    headingsTextLight: "#F5F8FA",
    infoDark: "#999999",
    infoLight: "#BDBDBD",
    infoSuperLight: "#DADADA",
  },
};

const fonts = {
  heading: 'Poppins',
  body: 'Poppins'
}

const styles = {
  global: {
    body: {
      bg: 'gray.background',
      color: 'gray.headingsTextLight'
    }
  }
}

const theme = extendTheme({ colors, fonts, styles });

export default theme;
