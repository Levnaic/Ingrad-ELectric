import React from "react";
import { Box, Typography } from "@mui/material";
import CTABtn from "../Btns/CTABtn";

const ServiceCard = ({ headline, text, imageUrl }) => {
  return (
    <Box
      sx={{
        width: { xs: "100%", sm: "200px", md: "350px" },
        height: { xs: "200px", sm: "250px", md: "300px" },
        border: "1px solid black",
      }}
    >
      <Box sx={{ backgroundImage: `url(${imageUrl})` }}></Box>
      <Typography variant="h3">{headline}</Typography>
      <Typography variant="p">{text}</Typography>
      <CTABtn />
    </Box>
  );
};

export default ServiceCard;
