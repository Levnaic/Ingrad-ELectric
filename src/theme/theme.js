import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: "#CDE0DA",
    primary: {
      main: "#236476",
      dark: "#a36476",
    },
    primaryDarker: {
      main: "#173044",
      dark: "#a73044",
    },
    secondary: {
      main: "#7DAD3F",
      dark: "#1DAD3F",
    },
    secondaryDarker: {
      main: "#4A6C2F",
      dark: "#1A6C2F",
    },
    text: {
      primary: "#333333",
      grey: "#818181",
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
          backgroundColor: "#CDE0DA", // --background-color
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
