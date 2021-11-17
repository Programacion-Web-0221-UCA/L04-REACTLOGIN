import React, { useCallback, useEffect, useState, useMemo } from "react"
import userServices from "../services/user.services"

// Creación del contexto
const UserContext = React.createContext();

const TOKEN_KEY = "token";

// Con userProvider especificamos qué componentes tienen acceso al contexto (en index.js)
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

            // Verificamos a qué usuario pertenece el token y lo asignamos
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

    // useCallback devuelve una función
    const login = useCallback((username, password) => {
        const loginAsync = async () => {
            let status = false;

            try {
                // Recibimos el token que devuelve la API según el username y password
                const { token: tokenResponse } = await userServices.login(username, password);

                if(tokenResponse) {
                    setTokenAll(tokenResponse);
                    // Usuario loggeado
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
    }, [])

    // Valores que queremos guardar (devuelve un objeto)
    const value = useMemo(() => ({
        token: token,
        user: user,
        login: login,
        logout: logout
    }), [token, user, login, logout]);

    // Retornamos el componente Provider que corresponde a UserContext con los valores
    return <UserContext.Provider value = { value } {...props} />
}

// useUserContext nos permite utilizar lo que está dentro del contexto en otros componentes
export const useUserContext = () => {
    const context = React.useContext(UserContext);

    if(!context) {
        throw new Error("Ha ocurrido un error");
    }
    return context;
}