import React from "react";
import Header from "./Header/Header";
import HeaderPhone from "./Header/HeaderPhone";
import Footer from "./Footer";
import { Container, useTheme, useMediaQuery, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const drawerItems = [
    { text: "Početna", component: Link, to: "/" },
    { text: "O nama", component: Link, to: "/o_nama" },
    { text: "Usluge", component: Link, to: "/usluge" },
    { text: "Proizvodi", component: Link, to: "proizvodi" },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        bgcolor: theme.palette.background.default,
      }}
    >
      {isMobile ? <HeaderPhone drawerItems={drawerItems} /> : <Header />}
      <Container sx={{ flexGrow: 1, my: 0, py: 5, border: "1px solid red" }}>
        <main>{children}</main>
      </Container>
      <Footer />
    </Box>
  );
};

export default Layout;
