import { useUserContext } from '../../Contexts/UserContext';

const PrivateRoute = ({ role, children }) => {
  const { user } = useUserContext();
  if(!user || user.role !== role) return <p> 404 Not found </p>;
  
  return children;
}

export default PrivateRoute;