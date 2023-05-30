import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const getUser = () => {
    if (sessionStorage.getItem("user")) {
        return JSON.parse(sessionStorage.getItem("user"));
    }
    return {};
};

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(getUser());

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

const useUserContext = () => {
    return useContext(AuthContext);
};

export { AuthProvider, useUserContext };
