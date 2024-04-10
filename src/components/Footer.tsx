import { Box } from "@mui/material";
import React from "react";
import HeaderBG from "@/assets/images/header-bg.jpg";

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${HeaderBG.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        minHeight: 40,
      }}
    ></Box>
  );
}
