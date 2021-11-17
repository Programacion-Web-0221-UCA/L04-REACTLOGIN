import { Route, Routes } from 'react-router-dom';
import { useUserContext } from '../../Contexts/UserContext';

const UserPage = () => {
  const { logout } = useUserContext();

  return (
    <div>
      <p>Esta es la pagina del rol usuario</p>
      <button onClick = {()=> { logout() }}> Logout </button>
      <Routes>
        <Route path="a" element ={ <p> Elemento A </p> }/>
        <Route path="b" element ={ <p> Elemento B </p> }/>
        <Route path="c" element ={ <p> Elemento C </p> }/>
        <Route path="d" element ={ <p> Elemento D </p> }/>
      </Routes>
    </div>
  )
}

export default UserPage;