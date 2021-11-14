import Login from './Components/Form/Login/Login';
import './App.css';

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500">
      <main className="w-3/4 max-w-3xl bg-blue-100 rounded-md p-8 md:p-10 shadow-md">
        <Login />
      </main>
    </div>
  );
}

export default App;
