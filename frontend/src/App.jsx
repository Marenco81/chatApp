import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import SignUp from './pages/signup/SignUp';
import Login from './pages/login/Login';
import { Toaster } from 'react-hot-toast';
import { useAuthContext } from './context/AuthContext';

function App() {

  const {authUser} = useAuthContext();
  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      
      <Routes>
        <Route path='/' element={authUser ? <Home></Home> : <Navigate to="/login" />} />
        <Route path='/login' element={authUser ?  <Navigate to="/" /> : <Login></Login>} />
        <Route path='/signup' element={authUser ?  <Navigate to="/" /> : <SignUp></SignUp>} />
      </Routes>
      <Toaster/>
    </div>
  )
}

export default App
