import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Dashboard, LandingPage, Register, ErrorPage} from './pages';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />}/>
        <Route path='landing' element={<LandingPage />}/>
        <Route path='register' element={<Register />}/>
        <Route path='*' element={<ErrorPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
