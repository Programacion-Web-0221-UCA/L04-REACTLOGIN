import { useUserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

const Admin = () => {
    const auth = useUserContext();
    const navigate = useNavigate();

    const onClickHandler = (e) =>{
        e.preventDefault();

        auth.logout();
        navigate("/login");
    }

    return(<button onClick={onClickHandler}>salir de admin</button>);
}

export default Admin;