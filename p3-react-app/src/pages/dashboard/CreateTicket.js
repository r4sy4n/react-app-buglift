import { useState } from 'react';
import React from 'react';
import styled from 'styled-components';
import { useContext } from 'react';
import { SharedLayoutContext } from './SharedLayout';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AppContext } from '../../App';


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

const CreateTicket = () => {
  const projectName = ['Project 1', 'Project 2', 'Project 3'];
  const ticketType = ['Bugs/Feature', 'Feature request', 'Task'];
  const ticketPriority = ['Low', 'Medium', 'High'];
  const ticketStatus = ['Open', 'In Progress', 'Closed'];
  const [nameValues, setNameValues] = useState('Project 1');
  const [typeValues, setTypeValues] = useState('Bugs/Feature');
  const [priorityValues, setPriorityValues] = useState('High');
  const [statusValues, setStatusValues] = useState('Open');
  const [ticketTitle, setTicketTitle] = useState('');
  const [description, setDescription] = useState('');
  const [submittedBy, setSubmittedBy] = useState('');
  const {showSidebar} = useContext(SharedLayoutContext);
  const {tickets, setTickets} = useContext(AppContext);
  const navigate = useNavigate();
  // const {id} = useParams();

  const handleChange = (event) => {
    setNameValues(event.target.value);
  };
  const ticketChange = (event) => {
    setTicketTitle(event.target.value);
  };
  const descriptionChange = (event) => {
    setDescription(event.target.value);
  };
  const submittedByChange = (event) => {
    setSubmittedBy(event.target.value);
  }
  const typeChange = (event) => {
    setTypeValues(event.target.value);
  };
  const priorityChange = (event) => {
    setPriorityValues(event.target.value);
  };
  const statusChange = (event) => {
    setStatusValues(event.target.value);
  };
  const submitHandler = (event) =>{
    event.preventDefault();
    if(!ticketTitle || !description || !submittedBy){
      toast.error('All fields are required!');
    }
    if(ticketTitle && description && submittedBy){
      addTicket();
      toast.success('Ticket Created');
      setTimeout(() =>{
        navigate('/tickets');  
      }, 600);
    }
  }
  
  const addTicket = () => {
    let newEntry = {
      // id: id,
      title: ticketTitle,
      submittedBy: submittedBy,
      description: description,
      ticketType: typeValues,
      ticketPriority: priorityValues,
      ticketStatus: statusValues,
      Details: '',
    }
    setTickets ([
      ...tickets,
        newEntry
    ]);
  }
  return (
    <Wrapper> 
      <form className={showSidebar ? 'form' : 'form-move'} onSubmit={submitHandler}>
        <h3>Create New Ticket</h3>
        <div className='form-center'>
          <div>
            <div className='form-label'>Project Name</div>
              <select className='form-select' value={nameValues} onChange={handleChange}>
                {
                  projectName.map((project, index) =><option key={index} value={project}>{project}</option>)
                }        
              </select>
          </div>
          <label htmlFor='ticket-title' className='form-label'>Ticket Title</label>
          <input 
            type='text' 
            id='ticket-title' 
            value={ticketTitle}  
            className='form-input'
            onChange={ ticketChange }></input>
          <label htmlFor='ticket-description' className='form-label'>Description</label>
          <textarea 
            type='text' 
            id='ticket-description' 
            value={description} 
            className='form-textarea'
            onChange={descriptionChange}></textarea>
          <div>
            <div className='form-label'>Ticket Type</div>
            <select className='form-select' value={typeValues} onChange={typeChange}>
              {
                ticketType.map((type, index) =><option key={index} value={type}>{type}</option>)
              }        
            </select>
          </div>
          <div>
            <div className='form-label'>Ticket Priority</div>
            <select className='form-select' value={priorityValues} onChange={priorityChange}>
              {
                ticketPriority.map((priority, index) =><option key={index} value={priority}>{priority}</option>)
              }        
            </select>
          </div>
          <div>
            <div className='form-label'>Ticket Status</div>
            <select className='form-select' value={statusValues} onChange={statusChange}>
              {
                ticketStatus.map((status, index) =><option key={index} value={status}>{status}</option>)
              }        
            </select>
          </div>
          <label htmlFor='submitted-by' className='form-label'>Submitted by</label>
          <input 
            type='text' 
            id='submitted-by' 
            value={submittedBy}  
            className='form-input'
            onChange={ submittedByChange }></input>
          <button type='submit' className='btn btn-block'>Create Ticket</button>  
        </div>
      </form>
    </Wrapper>
  )
}

export default CreateTicket;