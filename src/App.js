import Login from './pages/Login/Login';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import RequireAuth from './components/RequireAuth/RequireAuth';
import User from './pages/User/User';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={"/login"} />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/user"
          element={
            <RequireAuth>
              <User />
            </RequireAuth>
          } />
        <Route path="/*" element={<h2>No se ha encontrado el recurso, error 404</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
