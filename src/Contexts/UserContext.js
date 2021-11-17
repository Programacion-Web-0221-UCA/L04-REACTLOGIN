import {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
  useCallback,
} from "react";
import { useServices } from "../Services/User.services";

const TOKEN_KEY = "token";
const UserContext = createContext();

export const UserProvider = (props) => {
  const [user, setUser] = useState(undefined);
  const [token, setToken] = useState(undefined);

  useEffect(() => {
    const verifyToken = async () => {
      const localToken = getToken();
      console.log({ localToken });
      if (localToken) {
        const response = await useServices.verifyToken(localToken);
        console.log(response);
        if (response.username && response.role) {
          setUser({ username: response.username, role: response.role });
          setToken(localToken);
        }
      }
    };

    verifyToken();
  }, [token]);

  const getToken = () => {
    return localStorage.getItem(TOKEN_KEY);
  };

  const setNewToken = (newToken) => {
    if (newToken) {
      localStorage.setItem(TOKEN_KEY, newToken);
    }else {
      localStorage.removeItem(TOKEN_KEY);
    }

    setToken(newToken);
  };

  const login = useCallback((username, password) => {
    const loginFetch = async (username, password) => {
      const response = await useServices.login(username, password); // token y role

      if (response.token) {
        setNewToken(response.token);
        return true; // si se pudo
      }

      return false;
    };

    return loginFetch(username, password);
  }, []);

  const logout = () => {
    setNewToken(undefined);
    setUser(undefined);
  }

  const providerValue = useMemo(() => {
    return {
      user: user,
      login: login,
      token: token,
      logout: logout
    };
  }, [user, token]);

  return (
    <UserContext.Provider value={providerValue}>
      {props.children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);

  if(!context) {
    throw new Error("No estás dentro del UserProvider")
  }

  return context;
};
