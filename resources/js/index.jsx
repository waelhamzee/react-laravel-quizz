import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "../css/app.css";
import { ReactNotifications } from "react-notifications-component";
import { AuthProvider } from "./context/AuthContext.jsx";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme/theme.js";
import "react-notifications-component/dist/theme.css";
import { LayoutProvider } from "./context/LayoutContext.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.Fragment>
        <AuthProvider>
            <LayoutProvider>
                <ThemeProvider theme={theme}>
                    <ReactNotifications />
                    <App />
                </ThemeProvider>
            </LayoutProvider>
        </AuthProvider>
    </React.Fragment>
);
