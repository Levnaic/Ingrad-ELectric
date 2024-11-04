import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  const handleCtaClick = () => {};
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "60vh",
        backgroundImage: "url(/assets/images/hero-plh.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        "&::after": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(127,161,195, 0.8)", // Semi-transparent overlay
          zIndex: 1,
        },
      }}
    >
      <Typography
        variant="h1"
        sx={{
          width: "100%",
          position: "relative",
          zIndex: 2,
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {t("home.title")}
      </Typography>
      <Button
        onClick={() => handleCtaClick()}
        sx={{
          border: "1px solid black",
          position: "absolute",
          backgroundColor: "black",
          zIndex: "2",
          color: "white",
        }}
      >
        {t("home.cta")}
      </Button>
    </Box>
  );
};

export default Hero;
