import {
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const MenuItem = ({ item, openSidebar, theme }) => {
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate(`/${item.title.toLowerCase().split(" ").join("_")}`);
    };

    return (
        <ListItem key={item.title} disablePadding sx={{ display: "block" }}>
            <ListItemButton
                sx={{
                    minHeight: 48,
                    justifyContent: openSidebar ? "initial" : "center",
                    px: 2.5,
                }}
                onClick={handleNavigation}
            >
                <ListItemIcon
                    color="primary"
                    sx={{
                        minWidth: 0,
                        mr: openSidebar ? 3 : "auto",
                        justifyContent: "center",
                        color: theme.palette.primary.main,
                    }}
                >
                    {item.icon}
                </ListItemIcon>
                <ListItemText
                    primary={item.title}
                    sx={{ opacity: openSidebar ? 1 : 0 }}
                />
            </ListItemButton>
        </ListItem>
    );
};

export default MenuItem;
