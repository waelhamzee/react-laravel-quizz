import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import NavBar from "./NavBar.jsx";
import SideMenu from "./SideMenu";
import MainPage from "./MainPage";
import { styled } from "@mui/material/styles";

const BoxWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  [theme.breakpoints.down("lg")]: {
    position: "absolute",
  },
}));

export default function Layout({ children }) {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <SideMenu />
      <BoxWrapper>
        <NavBar />
        <MainPage children={children} />
      </BoxWrapper>
    </Box>
  );
}