import Login from './pages/Login/Login';
import userServices from './services/user.services'

function App() {
  userServices.login("test_user", "12345678Aa!");
  return (
    <Login />
  );
}

export default App;
