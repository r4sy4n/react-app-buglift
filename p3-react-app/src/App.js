import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Dashboard, LandingPage, Register, ErrorPage} from './pages';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />}/>
        <Route path='landing' element={<LandingPage />}/>
        <Route path='register' element={<Register />}/>
        <Route path='*' element={<ErrorPage />}/>
      </Routes>
      <ToastContainer position='top-center' autoClose='3000'/>
    </BrowserRouter>
  );
}

export default App;
