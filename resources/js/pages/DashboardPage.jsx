import { Box } from "@mui/material";
import React, { useEffect } from "react";
import Dashboard from "../components/dashboard/Dashboard";
import { useLayoutContext } from "../context/LayoutContext";

const DashboardPage = () => {
    const { setPageTitle } = useLayoutContext();

    useEffect(() => {
        setPageTitle("Dashboard");
    }, []);

    return (
        <Box>
            <Dashboard />
        </Box>
    );
};

export default DashboardPage;
