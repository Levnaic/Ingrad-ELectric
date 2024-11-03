import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@mui/material";
import ReactCountryFlag from "react-country-flag";

function LinkTab(props) {
  return (
    <Tab
      component={Link}
      to={props.to}
      aria-current={props.selected && "page"}
      {...props}
    />
  );
}

LinkTab.propTypes = {
  selected: PropTypes.bool,
};

export default function NavTabs() {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  // Load dynamic paths and labels from the JSON in i18n
  const navItems = t("nav", { returnObjects: true });
  const pathToIndex = Object.keys(navItems).reduce((acc, path, index) => {
    acc[path] = index;
    return acc;
  }, {});

  const currentPath = location.pathname;
  const currentTabValue =
    pathToIndex[currentPath] !== undefined ? pathToIndex[currentPath] : false;

  const handleChangeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingRight: "15px",
      }}
    >
      <Tabs value={currentTabValue} aria-label="nav tabs" role="navigation">
        {Object.entries(navItems).map(([path, label], index) => (
          <LinkTab key={index} label={label} to={path} />
        ))}
      </Tabs>
      <Box sx={{}}>
        <Button onClick={() => handleChangeLanguage("sr")}>
          <ReactCountryFlag
            countryCode="RS"
            svg
            style={{
              width: "40px",
              height: "28px",
            }}
          />
        </Button>
        <Button onClick={() => handleChangeLanguage("en")}>
          <ReactCountryFlag
            countryCode="US"
            svg
            style={{
              width: "40px",
              height: "28px",
            }}
          />
        </Button>
      </Box>
    </Box>
  );
}
