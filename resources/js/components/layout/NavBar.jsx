import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useLayoutContext } from "../../context/LayoutContext";
import { useUserContext } from "../../context/AuthContext";

const toolbarStyles = {
  width: "100%",
  borderBottom: "1px solid gainsboro",
  position: "sticky",
  top: "0",
  background: "white",
  zIndex: 2,
};

export default function NavBar() {
  const { handleDrawerToggle, pageTitle } = useLayoutContext();
  const { user } = useUserContext();

  return (
    <Toolbar sx={toolbarStyles}>
      <IconButton
        size="large"
        edge="start"
        color="primary"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={handleDrawerToggle}
      >
        <MenuIcon />
      </IconButton>
      <Typography
        variant="h6"
        component="div"
        fontWeight={"bold"}
        sx={{ flexGrow: 1 }}
      >
        {pageTitle}
      </Typography>
      {/* <Button color="inherit">Login</Button> */}
      <Typography variant="h6" fontWeight={"bold"}>
        {user.first_name}
      </Typography>
    </Toolbar>
  );
}