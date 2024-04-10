import React from "react";
import { Box, StepLabel } from "@mui/material";

type Props = {
  label: string;
};

export default function StepperLabel({ label }: Props) {
  return (
    <StepLabel>
      <Box
        sx={{
          background: "rgb(96, 26, 121)",
          color: "white",
          fontSize: 20,
          borderRadius: "5px",
        }}
        p={1}
      >
        {label}
      </Box>
    </StepLabel>
  );
}
