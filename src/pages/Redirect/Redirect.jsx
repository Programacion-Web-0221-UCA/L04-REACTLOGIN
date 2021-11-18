import { Navigate } from "react-router-dom";
import { useUserContext } from "../../contexts/UserContext";

const rolePages = {
    "admin": "/admin",
    "user": "/user"
}

const Redirect = () => {
    const {user} = useUserContext();

    if(!user) {
        return (<p>No se puede redireccionar</p>);
    }

    return <Navigate replace to={rolePages[user.role] ?? "/"} />;
}

export default Redirect;