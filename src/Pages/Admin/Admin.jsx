import { useUserContext } from "../../Contexts/UserContext"; 

const AdminPage = () => {
  const { logout } = useUserContext();

  return (
    <div>
      <p>Esta es la pagina del rol administradors</p>
      <button onClick={()=> { logout(); }} >Logout</button>
    </div>
  );
}

export default AdminPage;