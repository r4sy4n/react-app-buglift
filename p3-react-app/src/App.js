import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LandingPage, Register, ErrorPage} from './pages';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Dashboard, Tickets, Projects, CreateProject, CreateTicket, EditTicket, SharedLayout, UserProfile, Admin} from './pages/dashboard/';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Dashboard/>}/>
          <Route path='tickets' element={<Tickets/>}/>
          <Route path='projects' element={<Projects/>}/>
          <Route path='createproject' element={<CreateProject/>}/>
          <Route path='createticket' element={<CreateTicket/>}/>
          <Route path='editticket' element={<EditTicket/>}/>
          <Route path='userprofile' element={<UserProfile/>}/>
          <Route path='admin' element={<Admin/>}/>
        </Route>
        <Route path='landing' element={<LandingPage />}/>
        <Route path='register' element={<Register />}/>
        <Route path='*' element={<ErrorPage />}/>
      </Routes>
      <ToastContainer position='top-center' autoClose='3000'/>
    </BrowserRouter>
  );
}

export default App;
