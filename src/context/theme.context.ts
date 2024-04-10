"use client";

import { createTheme } from "@mui/material";
import { purple } from "@mui/material/colors";

const uiTheme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
  },
  components: {
    MuiStepIcon: {
      styleOverrides: {
        root: {
          "&.Mui-active": {
            color: "red",
          },
        },
      },
    },
  },
});

export default uiTheme;
