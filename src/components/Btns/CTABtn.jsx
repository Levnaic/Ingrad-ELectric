import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

const CTABtn = (props) => {
  const theme = useTheme();
  return (
    <Button
      component={props.link ? Link : "button"}
      to={props.link || undefined}
      sx={{
        padding: "10px 25px",
        height: "60px",
        border: "1px solid black",
        position: "absolute",
        top: "70%",
        left: "70%",
        backgroundColor: props.backgroundColor || theme.palette.secondary.main,
        color: props.color || theme.palette.text.primary,
        zIndex: "2",
      }}
    >
      {props.text}
    </Button>
  );
};

export default CTABtn;
