import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      default: "#f5eded",
      paper: "#e2dad6",
    },
    primary: {
      main: "#7fa1c3",
      dark: "#6482ad",
    },
    text: {
      primary: "#333333",
    },
  },
  typography: {
    fontFamily: '"Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif',
    h1: {
      fontSize: "2.5rem", // 40px
      color: "#333333", // --text-color
    },
    h2: {
      fontSize: "2rem", // 32px
      color: "#333333",
    },
    h3: {
      fontSize: "1.75rem", // 28px
      color: "#333333",
    },
    h4: {
      fontSize: "1.5rem", // 24px
      color: "#333333",
    },
    h5: {
      fontSize: "1.25rem", // 20px
      color: "#333333",
    },
    h6: {
      fontSize: "1rem", // 16px
      color: "#333333",
    },
    body1: {
      fontSize: "1rem",
      color: "#333333",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
          backgroundColor: "#f5eded", // --background-color
          fontSize: "16px", // --font-size-desktop
        },
        a: {
          all: "unset",
          cursor: "pointer",
        },
        p: {
          color: "#333333", // --text-color
        },
        li: {
          fontSize: "1rem", // Default list item font size
          color: "#333333", // --text-color
        },
      },
    },
  },
});

export default theme;
