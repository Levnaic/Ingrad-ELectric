import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Link } from "react-router-dom";

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
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="nav tabs example"
        role="navigation"
      >
        <LinkTab label="Početna" to="/" />
        <LinkTab label="O nama" to="/o_nama" />
        <LinkTab label="Usluge" to="/usluge" />
        <LinkTab label="Proizvodi" to="/proizvodi" />
      </Tabs>
    </Box>
  );
}
