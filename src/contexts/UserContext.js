import React, { useCallback, useEffect, useState, useMemo } from "react"
import userServices from "../services/user.services"

const userContext = React.createContext();

const TOKEN_KEY = "token";

export const UserProvider = (props) => {
    const [token, setToken] = useState(undefined);
    const [user, setUser] = useState(undefined);
    
    const setTokenAll = token => {
        localStorage.setItem(TOKEN_KEY, token);
        setToken(token);
    }

    useEffect(() => {
        const verifyCurrentToken = async () => {
            const tokenLS = localStorage.getItem(TOKEN_KEY);

            if(tokenLS) {
                const { username, role } = await userServices.verifyToken(tokenLS);

                if(username && role) {
                    setUser({ username, role });
                    setTokenAll(tokenLS);
                }
            }
        }

        verifyCurrentToken();
    }, [token])

    // Devuelve una función
    const login = useCallback((username, password) => {
        const loginAsync = async () => {
            let status = false;

            try {
                const { token: tokenResponse } = await userServices.login(username, password);

                if(tokenResponse) {
                    setTokenAll(tokenResponse);
                    status = true;
                }
            }
            catch (error) {
                console.log(error);
                console.log("No se pudo iniciar sesión");
            }
            finally {
                return status;
            }
        }

        return loginAsync();
    }, [])

    const logout = useCallback(() => {
        setUser(undefined);
        setTokenAll(undefined);
    })

    // Valores que queremos guardar (devuelve un objeto)
    const value = useMemo(() => ({
        token: token,
        user: user,
        login: login,
        logout: logout
    }), [token, user, login, logout]);

    return <userContext.Provider value = { value } {...props} />
}

export const useUserContext = () => {
    const context = React.useContext(userContext);

    if(!context) {
        throw new Error("Ha ocurrido un error");
    }
    return context;
}