"use client";

import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: "light",
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "white",
          color: "black",
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          justifyContent: "space-between",
          padding: "0!important",
        },
      },
    },
  },
});
