import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MainForm from "@/components/MainForm";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box>
      <Header title="Get Started" />
      <MainForm />
      <Footer />
    </Box>
  );
}
