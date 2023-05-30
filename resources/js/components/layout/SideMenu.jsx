import AssignmentIcon from "@mui/icons-material/Assignment";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import PaymentIcon from "@mui/icons-material/Payment";
import SettingsIcon from "@mui/icons-material/Settings";
import Divider from "@mui/material/Divider";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import { styled, useTheme } from "@mui/material/styles";
import React from "react";
// import logo25 from "../../assets/svg/logo25.svg";
import MenuItem from "./MenuItem";
import { useLayoutContext } from "../../context/LayoutContext";
import QuizIcon from "@mui/icons-material/Quiz";

const drawerWidth = 240;

const menu = [
    {
        title: "Dashboard",
        icon: <DashboardIcon />,
        id: 1,
    },
    {
        title: "Quizzes",
        icon: <GroupIcon />,
        id: 2,
    },
    // {
    //     title: "Orders",
    //     icon: <AssignmentIcon />,
    //     id: 3,
    // },
    // {
    //     title: "Payments",
    //     icon: <PaymentIcon />,
    // },
    // {
    //     title: "Settings",
    //     icon: <SettingsIcon />,
    // },
];

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.down("lg")]: {
        width: 0,
    },
});

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
    }),
}));

const IconButtonCustom = styled(IconButton)(({ theme }) => ({
    [theme.breakpoints.up("lg")]: {
        display: "none",
    },
}));

export default function SideMenu() {
    const { handleDrawerToggle, openSidebar } = useLayoutContext();

    const theme = useTheme();

    return (
        <Drawer variant="permanent" open={openSidebar}>
            <DrawerHeader sx={{ justifyContent: "flex-start", pl: "12px" }}>
                <IconButton
                    onClick={handleDrawerToggle}
                    sx={{ color: theme.palette.primary.main }}
                >
                    <QuizIcon color="primary" />
                </IconButton>
                {openSidebar && (
                    <React.Fragment>
                        <Typography
                            variant="h6"
                            fontWeight={"bold"}
                            color={"primary"}
                            marginLeft={1}
                        >
                            Quiz App
                        </Typography>
                        <IconButtonCustom onClick={handleDrawerToggle}>
                            <ChevronLeftIcon color="primary" />
                        </IconButtonCustom>
                    </React.Fragment>
                )}
            </DrawerHeader>
            <Divider />
            <List>
                {menu.map((item, index) => {
                    return (
                        <MenuItem
                            item={item}
                            openSidebar={openSidebar}
                            theme={theme}
                            key={index}
                        />
                    );
                })}
            </List>
            <Divider />
        </Drawer>
    );
}
