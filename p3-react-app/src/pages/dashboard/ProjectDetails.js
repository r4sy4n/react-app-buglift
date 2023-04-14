import { useContext } from 'react';
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
  }
  .flex-item{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  hr{
    color: #f0f4f8;
  }
  span:hover {
  color: #E21818;
  cursor: pointer;
  }
  .grid-item{
    margin-top: 3rem;
  }
  th, td{
    padding: 0 3rem;
  }
`
const ProjectDetails = () => {
  const {projects} = useContext(AppContext);
  const navigate = useNavigate();
  const {id} = useParams();
  const handleDetail = (e) => {
    e.preventDefault();
    navigate('/projects');
  }
  return (
    <Wrapper>
        <h3>Project Details</h3>
        <span onClick={handleDetail}>Back to list</span>
        <section className='flex grid-item'>
          {projects.filter(project => project.id === (id)).map(project => (
            <div className='grid'>
              <div key={project.id}>
                  <h4>Project Name</h4>
                  <p>{project.name}</p>
              </div>
              <div key={project.name}>
                  <h4>Description</h4>
                  <p>{project.description}</p>
              </div>  
            </div>
          ))}
        </section>
        <hr></hr>
        <section className='grid grid-item'>
          <div className='flex-item'>
            <h3>Project Team</h3>
            <p>Current users on this project</p>
             <table>
                <thead>
                  <tr>
                    <th>Username</th>
                    <th>Role</th>
                  </tr>
                </thead>
                <tbody>
                  {projects.map((project, index) => (
                    <tr>
                      <td>Russell</td>
                      <td>Demo Admin</td>                      
                    </tr>
                  ))}
                </tbody>
              </table>
          </div>
          <div className='flex-item'>
            <h3>Tickets for this project</h3>
            <p>Current ticket details</p>
            <table>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Submitted by</th>
                    <th>Status</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {projects.map((project, index) => (
                    <tr>
                      <td>Ticket Title</td>
                      <td>User</td>
                      <td>Open</td>
                      <td>More Details</td>
                    </tr>
                  ))}
                </tbody>
              </table>
          </div>
        </section>
    </Wrapper>
  )
}

export default ProjectDetails;