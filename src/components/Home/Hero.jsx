import React from "react";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import CTABtn from "../Btns/CTABtn";
import { useTheme } from "@mui/material/styles";

const Hero = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  // Get primary color and create rgba
  const overlayColor = `rgba(${parseInt(
    theme.palette.primary.main.slice(1, 3),
    16
  )}, ${parseInt(theme.palette.primary.main.slice(3, 5), 16)}, ${parseInt(
    theme.palette.primary.main.slice(5, 7),
    16
  )}, 0.8)`;

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
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
          backgroundColor: overlayColor,
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
      <CTABtn link="/o_nama" text={t("home.cta")} />
    </Box>
  );
};

export default Hero;
