import HeaderBG from "@/assets/images/header-bg.jpg";
import Logo from "@/assets/images/logo.png";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

type Props = {
  title: string;
};

export default function Header({ title }: Props) {
  return (
    <Box
      sx={{
        backgroundImage: `url(${HeaderBG.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      px={7}
      py={3}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          gap: 5,
        }}
      >
        <Image src={Logo} alt="Logo" />
        <Typography fontSize={28} color="white" fontWeight={500}>
          SME HealthCheck - {title}
        </Typography>
      </Box>
    </Box>
  );
}
