import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MainForm from "@/components/MainForm";
import { Box } from "@mui/material";
import React from "react";

export default function Home() {
  return (
    <Box>
      <Header />
      <MainForm />
      <Footer />
    </Box>
  );
}
