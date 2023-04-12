import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  border-radius: 0.25rem;
  width: 100%;
  background: #fff;
  padding: 3rem 2rem 4rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  .details {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }   
  .flex {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40vw;
    flex-direction: column;
  }
`
const ProjectDetails = () => {
  return (
    <Wrapper>
        <h3>Project Details</h3>
        <p>Back to list</p>
        <p>Edit</p>
        <section className='details'>
            <div className='flex'>
                <h4>Project Name</h4>
                <p>name</p>
            </div>
            <div className='flex'>
                <h4>Description</h4>
                <p>details</p>
            </div>
        </section>
    </Wrapper>
  )
}

export default ProjectDetails;