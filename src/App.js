import Login from './pages/Login/Login';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import RequireAuth from './components/RequireAuth/RequireAuth';
import Redirect from './pages/Redirect/Redirect';
import User from './pages/User/User';
import Admin from './pages/Admin/Admin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to={"/login"} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/redirect" element={<Redirect />} />
        <Route
          path="/user"
          element={
            <RequireAuth role="user">
              <User />
            </RequireAuth>
          } />
        <Route
          path="/admin"
          element={
            <RequireAuth role="admin">
              <Admin />
            </RequireAuth>
          } />
        <Route path="/*" element={<h2>No se ha encontrado el recurso, error 404</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
