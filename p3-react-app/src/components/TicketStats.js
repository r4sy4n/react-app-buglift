import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
    padding: 2rem;
    background:#fff;
    border-radius: 0.25rem;
    text-align: center;
    border: 2px solid blue;
`



const TicketStats = () => {
  return (
    <Wrapper>
        <h1>20</h1>
        <h3>Active Tickets</h3>
    </Wrapper>
  )
}

export default TicketStats;