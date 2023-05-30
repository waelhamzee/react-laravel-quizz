import * as React from "react";
import Box from "@mui/material/Box";

export default function MainPage({ children }) {
  return (
    <Box
      component="main"
      sx={{ p: 2, minHeight: "calc(100vh - 64px)", background: "#f7f8fa" }}
    >
      {children}
    </Box>
  );
}