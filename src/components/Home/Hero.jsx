import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        display: "flex",
        backgroundImage: "url(/assets/images/hero-plh.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Typography variant="h1">{t("home.title")}</Typography>
    </Box>
  );
};

export default Hero;
