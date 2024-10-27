import { Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <Typography variant="h1">{t("home.title")}</Typography>
      <Typography variant="p">{t("home.content")}</Typography>
    </>
  );
};

export default Home;
