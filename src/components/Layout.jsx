import React from "react";
import Header from "./Header";
import CustomDrawer from "./CustomDrawer";
import Footer from "./Footer";
import { Container, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  const theme = useTheme();

  const drawerItems = [
    { text: "Home", component: Link },
    { text: "About", component: Link },
    { text: "Services", component: Link },
    { text: "Products", component: Link },
  ];
  return (
    <div>
      <CustomDrawer drawerItems={drawerItems} />
      <Container sx={{ bgcolor: theme.palette.primary.main, height: "100vh" }}>
        <main>{children}</main>
      </Container>
      <Footer />
    </div>
  );
};

export default Layout;
