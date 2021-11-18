import { useUserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

const User = () => {
    const auth = useUserContext();
    const navigate = useNavigate();

    const onClickHandler = (e) =>{
        e.preventDefault();

        auth.logout();
        navigate("/login");
    }

    return(<button onClick={onClickHandler}>salir de usuario normal</button>);
}

export default User;