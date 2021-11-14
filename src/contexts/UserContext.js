import React, { useState, useEffect, useMemo, useCallback } from "react";

const UserContext = React.createContext();

export const UserProvider = (props) => {
    const [token, setToken] = useState("");

    const value = useMemo(()=> {

    }, []);

    return <UserContext.Provider value={value} {...props} />;
}

export const useUserContext = () => {
    const context = React.useContext(UserContext);

    if (!context) {
        throw new Error("useUserContext() must be inside of UserProvider");
    }

    return context;
}
