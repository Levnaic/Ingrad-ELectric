import React from "react";
import Header from "./Header";
import CustomDrawer from "./CustomDrawer";
import Footer from "./Footer";
import { Container, useTheme, useMediaQuery } from "@mui/material";
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
    <div>
      {isMobile ? <CustomDrawer drawerItems={drawerItems} /> : <Header />}
      <Container sx={{ bgcolor: theme.palette.primary.main, height: "100vh" }}>
        <main>{children}</main>
      </Container>
      <Footer />
    </div>
  );
};

export default Layout;
