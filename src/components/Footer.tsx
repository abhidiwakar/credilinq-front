import HeaderBG from "@/assets/images/header-bg.jpg";
import { Box } from "@mui/material";

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
