import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@mui/material";

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
    <Box sx={{ width: "100%" }}>
      <Tabs value={currentTabValue} aria-label="nav tabs" role="navigation">
        {Object.entries(navItems).map(([path, label], index) => (
          <LinkTab key={index} label={label} to={path} />
        ))}
      </Tabs>
      <Box sx={{ marginTop: 2, display: "flex", justifyContent: "flex-end" }}>
        <Button
          variant="outlined"
          onClick={() => handleChangeLanguage("en")}
          sx={{ marginRight: 1 }}
        >
          English
        </Button>
        <Button variant="outlined" onClick={() => handleChangeLanguage("sr")}>
          Srpski
        </Button>
      </Box>
    </Box>
  );
}
