import React, { useContext }from 'react';
import styled from 'styled-components';
import { SharedLayoutContext } from './SharedLayout';


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
  .form {
    margin: 0;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    max-width: 75vw;
    transition: 0.3s ease-in-out all;
    /* width: 100%; */
  }
  .form-center button {
    align-self: end;
    height: 35px;
    margin-top: 2rem;
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

const Admin = () => {
  const assignProject = ['Manager', 'Project Manager', 'User'];
  const projectList = ['Project 1', 'Project 2', 'Project 3' ];
  const userList = ['John Smith', 'Mary Jones', 'Alex Lee'];

  const { showSidebar } = useContext(SharedLayoutContext);


  return (
    <Wrapper>
      <form className={showSidebar ? 'form' : 'form-move'}
        >    
          <h3>Admin Page</h3>
          <p>Manage Users</p>
          <div className='form-center'>
            <div className='form-label'>Project List</div>
            <select
              className='form-select'
              value={''}
              // onChange={handleChange}
            >
              {projectList.map((project, index) => (
                <option key={index} value={project}>
                  {project}
                </option>
              ))}
            </select>
            <div className='form-label'>Assign Project</div>
            <select
              className='form-select'
              value={''}
              // onChange={handleChange}
            >
              {assignProject.map((project, index) => (
                <option key={index} value={project}>
                  {project}
                </option>
              ))}
            </select>
            <div className='form-label'>Assign Users</div>
            <select
              className='form-select'
              value={''}
              // onChange={handleChange}
            >
              {userList.map((user, index) => (
                <option key={index} value={user}>
                  {user}
                </option>
              ))}
            </select>
          <button type='submit' className='btn btn-block'>
            Save
          </button>
          </div>
      </form>
    </Wrapper>
  )
}

export default Admin;