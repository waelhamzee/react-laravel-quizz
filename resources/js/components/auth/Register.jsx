import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
// import logo25 from "../../assets/svg/logo25.svg";
import { useUserContext } from "../../context/AuthContext";
import RequestEngine from "../../core/RequestEngine";
import Utilities from "../../core/Utilities";
// import { LOGIN } from "../../metadata/api";
import FormRow from "../form/FormRow";
import { Link } from "@mui/material";

const style = {
    position: "absolute",
    top: "45%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    maxWidth: 400,
    padding: "2rem",
};

const requestEngine = new RequestEngine();

const Register = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [flip, setFlip] = useState(false);
    const { setUser } = useUserContext();

    const handleRegister = async (e) => {
        e.preventDefault();

        const response = await requestEngine.postData(`auth/${flip? "login" : "register"}`, {
            name,
            email,
            password,
        });

        if (!response) return;

        const user = response?.data.data;

        sessionStorage.setItem("token", response.data.token);

        sessionStorage.setItem("user", JSON.stringify(user));

        setUser(JSON.parse(sessionStorage.getItem("user")));

        console.log(response);

        window.location.href = "/dashboard";
    };

    return (
        <Paper sx={style}>
            <Stack spacing={2}>
                <Box sx={{ textAlign: "center" }}>
                    {/* <img src={logo25} alt="logo" width={75} height={75} /> */}
                    <Typography variant="h5" fontWeight={"bold"} mt={2}>
                        {flip ? "Log In" : "Sign In"}
                    </Typography>
                </Box>
                {!flip && (
                    <FormRow
                        size="small"
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Name"
                        value={name}
                    />
                )}
                <FormRow
                    size="small"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    value={email}
                />
                <FormRow
                    size="small"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    value={password}
                />
                <Button
                    variant="contained"
                    color="primary"
                    sx={{ color: "white" }}
                    onClick={handleRegister}
                >
                    {flip ? "LogIn" : "Register"}
                </Button>
                <Link textAlign="center" href="#" onClick={() => setFlip(!flip)}>
                    {flip
                        ? "Don't have an account?"
                        : "Already have an account?"}
                </Link>
            </Stack>
        </Paper>
    );
};

export default Register;
