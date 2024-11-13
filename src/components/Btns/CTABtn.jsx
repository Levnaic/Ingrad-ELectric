import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";

const CTABtn = (props) => {
  const { t } = useTranslation();
  const theme = useTheme();
  return (
    <Button
      component={props.link ? Link : "button"}
      to={props.link || undefined}
      sx={{
        padding: "10px 25px",
        height: "60px",
        border: "1px solid black",
        backgroundColor: props.backgroundColor || theme.palette.secondary.main,
        color: props.color || theme.palette.text.primary,
      }}
    >
      {props.text || t("utils.cta")}
    </Button>
  );
};

export default CTABtn;
