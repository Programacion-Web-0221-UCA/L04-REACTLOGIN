import { useUserContext } from '../../Contexts/UserContext';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ role, children }) => {
  const { user } = useUserContext();

  if(!user) return <Navigate replace to="/login"/>
  if(user.role !== role) return <p> 404 Not found </p>;
  
  return children;
}

export default PrivateRoute;