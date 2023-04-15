import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LandingPage, Register, ErrorPage} from './pages';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Dashboard, Tickets, Projects, CreateProject, CreateTicket, EditTicket, SharedLayout, UserProfile, Admin, ProjectDetails, TicketDetails} from './pages/dashboard/';
import { createContext, useState } from 'react';
export const AppContext = createContext();

const initialProjects = [
  {
    id: 'ab',
    name: "Project A",
    description: "This project aims to build a web application for managing inventory",
    detail: "",
  },
  {
    id: 'cd',
    name: "Project B",
    description: "This project focuses on developing a machine learning algorithm for predicting customer churn",
    detail: "",
  },
  {
    id: 'ef',
    name: "Project C",
    description: "This project involves building a mobile app for ordering food from local restaurants",
    detail: "",
  },
];
const initialTicket = ([
    {
      id: 'gh',
      project: "Project 1",
      title: "Fix login page issue",
      ticketDescription: "Please fi login page because it is not working when you are clicking submit",
      submittedBy: "John Smith",
      ticketType: "Bugs/Error",
      ticketStatus: "Open",
      ticketPriority: "High",
    },
    {
      id: 'ij',
      project: "Project 2",
      title: "Add new feature to dashboard",
      ticketDescription: "Please add new chart feature when user opens the dashboard",
      submittedBy: "Mary Jones",
      ticketType: "Feature Request",
      ticketStatus: "In Progress",
      ticketPriority: "Medium",
    },
    {
      id: 'kl',
      project: "Project 3",
      title: "Update payment system",
      ticketDescription: "Please implement gcash and paymaya to our payment system",
      submittedBy: "Alex Lee",
      ticketType: "Task",
      ticketStatus: "Closed",
      ticketPriority: "Low",
    },
  ]);

function App() {
  const [projects, setProjects] = useState(initialProjects);
  const [tickets, setTickets] = useState(initialTicket);
  const isAuthenticated = localStorage.getItem('name'); 
  return (
    <AppContext.Provider value={{projects, setProjects, tickets, setTickets}}>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={isAuthenticated ? <SharedLayout /> : <Navigate to="/landing" />}>
              <Route index element={<Dashboard/>}/>
              <Route path='tickets' element={<Tickets/>}/>
              <Route path='projects' element={<Projects/>}/>
              <Route path='createproject' element={<CreateProject/>}/>
              <Route path='createticket' element={<CreateTicket/>}/>
              <Route path='editticket/:id' element={<EditTicket/>}/>
              <Route path='projectdetails/:id' element={<ProjectDetails/>}/>
              <Route path='ticketdetails/:id' element={<TicketDetails/>}/>
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
