import { useState, useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../App';
import { useNavigate, useParams } from 'react-router-dom';

const Wrapper = styled.section`
  border-radius: 0.25rem;
  width: 100%;
  background: #fff;
  padding: 3rem 2rem 4rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }   
  .flex {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80vw;
    /* flex-direction: row; */
  }
`
const ProjectDetails = () => {
  const {projects, setProjects} = useContext(AppContext);
  const navigate = useNavigate();
  const {id} = useParams();
  const handleDetail = (e) => {
    e.preventDefault();
    navigate('/projects');
  }
  return (
    <Wrapper>
        <h3>Project Details</h3>
        <p onClick={handleDetail}>Back to list</p>
        <p>Edit</p>
        <section className='flex'>
          {projects.filter(project => project.id === Number(id)).map(project => (
            <div className='grid'>
              <div key={project.id}>
                  <h4>Project Name</h4>
                  <p>{project.name}</p>
              </div>
              <div key={project.id}>
                  <h4>Description</h4>
                  <p>{project.description}</p>
              </div>  
            </div>
          ))}
        </section>
        <hr></hr>
    </Wrapper>
  )
}

export default ProjectDetails;