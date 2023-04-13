import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LandingPage, Register, ErrorPage} from './pages';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Dashboard, Tickets, Projects, CreateProject, CreateTicket, EditTicket, SharedLayout, UserProfile, Admin, ProjectDetails} from './pages/dashboard/';
import { createContext, useState } from 'react';

const initialProjects = [
  {
    id: 1,
    name: "Project A",
    description: "This project aims to build a web application for managing inventory",
    detail: "",
  },
  {
    id: 2,
    name: "Project B",
    description: "This project focuses on developing a machine learning algorithm for predicting customer churn",
    detail: "",
  },
  {
    id: 3,
    name: "Project C",
    description: "This project involves building a mobile app for ordering food from local restaurants",
    detail: "",
  },
];
export const AppContext = createContext();

function App() {
  const [projects, setProjects] = useState(initialProjects);
  return (
    <AppContext.Provider value={{projects, setProjects}}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SharedLayout />}>
            <Route index element={<Dashboard/>}/>
            <Route path='tickets' element={<Tickets/>}/>
            <Route path='projects' element={<Projects/>}/>
            <Route path='createproject' element={<CreateProject/>}/>
            <Route path='createticket' element={<CreateTicket/>}/>
            <Route path='editticket' element={<EditTicket/>}/>
            <Route path='projectdetails/:id' element={<ProjectDetails/>}/>
            <Route path='userprofile' element={<UserProfile/>}/>
            <Route path='admin' element={<Admin/>}/>
          </Route>
          <Route path='landing' element={<LandingPage />}/>
          <Route path='register' element={<Register />}/>
          <Route path='*' element={<ErrorPage />}/>
        </Routes>
        <ToastContainer position='top-center' autoClose='3000'/>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
