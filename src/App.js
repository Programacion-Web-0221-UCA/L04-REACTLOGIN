import Login from "./Pages/Login/Login";
import UserPage from "./Pages/User/User";
import AdminPage from "./Pages/Admin/Admin";
import PrivateRoute from  './Components/PrivateRoute/PrivateRoute';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={ <Login/> } />

        <Route path="/user/*" element = {<PrivateRoute role="user"> <UserPage /> </PrivateRoute>}/>
        <Route path="/admin" element = {<PrivateRoute role="admin"> <AdminPage /> </PrivateRoute>}/>
        
        <Route path="/" element ={ <p> Esta es la página principal </p> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
