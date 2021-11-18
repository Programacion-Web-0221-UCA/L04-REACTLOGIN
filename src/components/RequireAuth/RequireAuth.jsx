import { useUserContext } from "../../contexts/UserContext";
import { Navigate } from "react-router-dom";

const RequireAuth = ({children}) => {
    const {token} = useUserContext();

    if(!token){
        return <Navigate to={"/login"} />
    }

    return children;
}

export default RequireAuth;