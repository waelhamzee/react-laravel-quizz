import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import { routes } from "./routes";
import RegisterPage from "./pages/RegisterPage";
import { routes } from "./routes";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<RegisterPage />} />
                {routes.map((route, index) => {
                    return (
                        <Route
                            key={index}
                            element={route.element}
                            path={route.path}
                        />
                    );
                })}
            </Routes>
        </Router>
    );
}

export default App;
