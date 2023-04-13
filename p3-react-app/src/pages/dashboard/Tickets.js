import React from "react";
import styled from "styled-components";
import { useContext } from 'react';
import { SharedLayoutContext } from './SharedLayout';
import { useNavigate } from 'react-router-dom';
import { AppContext } from "../../App";

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
  margin-top: 3rem;
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
p {
  display: inline-block;
  margin-top: 18px;
}
p:hover {
  color: #E21818;
}
`

const Tickets = () => {
  const {showSidebar} = useContext(SharedLayoutContext);
  const navigate = useNavigate();
  const {tickets} = useContext(AppContext);

  const clickHandle = (e) => {
    e.preventDefault();
    navigate('/createticket');   
  }
  const handleDetail = (id) => {
    navigate(`/projectdetails/${id}`);
  }

  return (    
      <Wrapper>
        <form className={showSidebar ? 'table' : 'table-move'}>
          <button type='button' className='btn btn-block' onClick={clickHandle}>Create New Ticket</button>
            <div className="project-table form-center">
              <h3>Ticket List</h3>
              <span>All the tickets you have</span>
              <table>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Submitted by</th>
                    <th>Ticket Type</th>
                    <th>Ticket Priority</th>
                    <th>Ticket Status</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  {tickets.map((ticket, index) => (
                    <tr key={index}>
                      <td>{ticket.title}</td>
                      <td>{ticket.submittedBy}</td>
                      <td>{ticket.ticketType}</td>
                      <td>{ticket.ticketStatus}</td>
                      <td>{ticket.ticketPriority}</td>
                      <td><p onClick={() => handleDetail(ticket.id)}>Details</p></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
        </form>
      </Wrapper>    
  )
}

export default Tickets;