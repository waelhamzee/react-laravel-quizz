import React from "react";
import DashboardPage from "./pages/DashboardPage";
import QuizzesPage from "./pages/QuizzesPage";
import Layout from "./components/layout";

const Component = ({ element }) => {
    return <Layout>{element}</Layout>;
};

export const routes = [
    { path: "/dashboard", element: <Component element={<DashboardPage />} /> },
    { path: "/quizzes", element: <Component element={<QuizzesPage />} /> },
];
