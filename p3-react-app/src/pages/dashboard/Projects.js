import React from "react";
import styled from "styled-components";
import { useContext } from 'react';
import { SharedLayoutContext } from './SharedLayout';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.section`
  border-radius: 0.25rem;
  width: 100%;
  background: #fff;
  padding: 3rem 2rem 4rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06); 
.project-table {
  max-width: 90vw;
  margin: 0 auto;
  padding: 20px;
}
.table {
  margin: 0;
  border-radius: 0;
  box-shadow: none;
  padding: 0;
  max-width: 75vw;
  transition: 0.3s ease-in-out all;
  width: 90vw;
  background: #fff;
}
.table-move {
  margin: 0;
  border-radius: 0;
  box-shadow: none;
  padding: 0;
  width: 90vw;
  background: #fff;  
  transition: 0.3s ease-in-out all;
}
table {
  border-collapse: collapse;
  width: 100%;
}
tr:hover {
  background: #f0f4f8;
  color: #102a43;
}
th, td {
  text-align: left;
  padding: 8px;
}
th {
  background-color: #ddd;
}
a {
  display: inline-block;
  margin-top: 10px;
}
a:hover {
  color: #E21818;
}
`
const projects = [
  {
    name: "Project A",
    description: "This project aims to build a web application for managing inventory",
    detail: "",
  },
  {
    name: "Project B",
    description: "This project focuses on developing a machine learning algorithm for predicting customer churn",
    detail: "",
  },
  {
    name: "Project C",
    description: "This project involves building a mobile app for ordering food from local restaurants",
    detail: "",
  },
];

const Projects = () => {
  const {showSidebar, setShowsidebar} = useContext(SharedLayoutContext);
  const navigate = useNavigate();

  const clickHandle = (e) => {
    e.preventDefault();
    navigate('/createproject');   
  }
  const handleDetail = (e) => {
    e.preventDefault();
    navigate('/projectdetails');
  }

  return (    
    <Wrapper>
      <form className={showSidebar ? 'table' : 'table-move'}>
        <button type='button' className='btn btn-block' onClick={clickHandle}>Create New Project</button>
          <div className="project-table form-center">
            <h3>Project List</h3>
            <p>All projects list</p>
            <table>
              <thead>
                <tr>
                  <th>Project Name</th>
                  <th>Description</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project, index) => (
                  <tr key={index}>
                    <td>{project.name}</td>
                    <td>{project.description}</td>
                    <td><a href={project.detail} onClick={handleDetail}>Details</a></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
      </form>
    </Wrapper>    
  )
}

export default Projects