import React from "react";
import { Container, Typography } from "@mui/material";
import ServiceCard from "./ServiceCard";
import { useTranslation } from "react-i18next";

const ServicesCarousel = () => {
  const { t } = useTranslation();
  const cards = t("home.services.cards", { returnObjects: true });

  return (
    <>
      <Typography variant="h2" sx={{ textAlign: "center", my: 6 }}>
        {t("home.services.title")}
      </Typography>
      <Container
        maxWidth="lg"
        sx={{
          py: 8,
          display: "grid",
          columnGap: "30px",
          rowGap: "30px",
          gridTemplateColumns: "auto auto auto",
          border: "1px, solid red",
        }}
      >
        {cards.map((card, index) => (
          <ServiceCard
            key={index}
            headline={card.title}
            text={card.text}
            imageUrl={card.imageUrl}
          />
        ))}
      </Container>
    </>
  );
};

export default ServicesCarousel;
