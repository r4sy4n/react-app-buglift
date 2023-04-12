import { useState } from 'react';
import React from 'react';
import styled from 'styled-components';
import { useContext } from 'react';
import { SharedLayoutContext } from './SharedLayout';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Wrapper = styled.section`
  border-radius: 0.25rem;
  width: 100%;
  background: #fff;
  padding: 3rem 2rem 4rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06); 
  h3 {
    margin-top: 0;
  }
  /* .form-center {
    grid-template-columns: 1fr 1fr 1fr;
  } */
  .form-center button {
    margin-top: 2rem;
  }  
  .form {
    margin: 0;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    max-width: 75vw;
    transition: 0.3s ease-in-out all;
    /* width: 100%; */
  }
  /* .form-center {
    display: grid;
    row-gap: 0.5rem;
  } */
  .form-center button {
    align-self: end;
    height: 35px;
    margin-top: 1rem;
  }
  .form-move{
    margin: 0;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    width: 90vw;
    background: #fff;  
    transition: 0.3s ease-in-out all;
  }
`

const CreateProject = () => {
  const projects = ["Manager", "Project Manager", "User"];
  const [values, setValues] = useState("Manager");
  const [projectName, setProjectName] = useState('');
  const [description, setDescription] = useState('');
  const {showSidebar, setShowsidebar} = useContext(SharedLayoutContext);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setValues(event.target.value);
  };
  const nameChange = (event) => {
    setProjectName(event.target.value);
  };
  const descriptionChange = (event) => {
    setDescription(event.target.value);
  };
  const submitHandler = (event) =>{
    event.preventDefault();
    if(!projectName && !description){
      toast.error('All fields are required!');
    }
    if(projectName && description){
      toast.success('Project Created');
      setTimeout(() =>{
        navigate('/projects');  
      }, 600);
    }
  }
  return (
    <Wrapper> 
      <form className={showSidebar ? 'form' : 'form-move'} onSubmit={submitHandler}>
        <h3>Create New Project</h3>
        <div className='form-center'>
          <label htmlFor='project-name' className='form-label'>Project Name</label>
          <input 
            type='text' 
            id='project-name' 
            value={projectName}  
            className='form-input'
            onChange={ nameChange }></input>
          <label htmlFor='project-description' className='form-label'>Project Description</label>
          <input 
            type='text' 
            id='project-description' 
            value={description} 
            className='form-input'
            onChange={descriptionChange}></input>
          <div>
            <div className='form-label'>Assign Project</div>
            <select className='form-select' value={values} onChange={handleChange}>
              {
                projects.map(project =><option value={project}>{project}</option>)
              }        
            </select>
          </div>
        <button type='submit' className='btn btn-block'>Create Project</button>  
        </div>
      </form>
    </Wrapper>
  )
}

export default CreateProject;