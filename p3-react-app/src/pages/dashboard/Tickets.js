import React, { useContext, useState } from "react";
import styled from "styled-components";
import { SharedLayoutContext } from './SharedLayout';
import { useNavigate } from 'react-router-dom';
import { AppContext } from "../../App";
import { Badge } from 'react-bootstrap';


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
  text-decoration: underline;
  color: blue;
}
p:hover {
  color: #E21818;
  cursor: pointer;
}
.sort-container{
  margin-top: 3rem;
}
.drop-select {
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    background: #f0f4f8;
    border: 1px solid #bcccdc;
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
    navigate(`/ticketdetails/${id}`);
  }
  const [sortOption, setSortOption] = useState('All');
  
  const filteredTickets = tickets.filter(ticket => {
     if (sortOption === 'All') {
      return true;
    } else {
      return ticket.ticketStatus === sortOption;
    }
  });
  console.log(sortOption)
  const handleSortOptionChange = (e) => {
    setSortOption(e.target.value);
    
  }
  const priorityBadge = (priority) => {
  switch (priority) {
    case 'High':
      return <Badge bg="danger">{priority}</Badge>;
    case 'Medium':
      return <Badge bg="warning">{priority}</Badge>;
    case 'Low':
      return <Badge bg="success">{priority}</Badge>;
    default:
      return null;
  }
};
  return (    
      <Wrapper>
        <form className={showSidebar ? 'table' : 'table-move'}>
          <button type='button' className='btn btn-block' onClick={clickHandle}>Create New Ticket</button>
            <div className="project-table form-center">
              <h3>Ticket List</h3>
              <span>All the tickets you have</span>
               <div className="sort-container">
                <label htmlFor="sortOption" className='form-label'>Sort By Status</label>
                <select id="sortOption" value={sortOption} className='drop-select' onChange={handleSortOptionChange}>
                  <option value="All">All</option>
                  <option value="Open">Open</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>From Project</th>
                    <th>Submitted by</th>
                    <th>Ticket Type</th>
                    <th>Ticket Status</th>
                    <th>Ticket Priority</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTickets.map((ticket, index) => (
                    <tr key={index}>
                      <td>{ticket.title}</td>
                      <td>{ticket.project}</td>
                      <td>{ticket.submittedBy}</td>
                      <td>{ticket.ticketType}</td>
                      <td>{ticket.ticketStatus}</td>
                      <td>{priorityBadge(ticket.ticketPriority)}</td>
                      <td><p onClick={() => handleDetail(ticket.id)}>More Details</p></td>
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