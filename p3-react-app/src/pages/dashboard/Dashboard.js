import React from 'react';
import styled from 'styled-components'
import { BarChartData, ProjectStats, TicketStats, PriorityChart, TypeChart, StatusChart } from '../../components';

const Wrapper = styled.section`
  border-radius: 0.25rem;
  width: 100%;
  min-width: 80vw;
  background: #fff;
  padding: 3rem 2rem 4rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
 .grid{
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2rem;
  margin-bottom: 4rem;
 }
 .flex{
  display: flex;
  flex-direction: column;
 }
 .grid-chart{
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2rem;
  margin-top: 4rem;
 }
`

const Dashboard = () => {
  return (
    <Wrapper>
      <section className='flex'>
        <div className='grid'>
          <ProjectStats/>
          <TicketStats/>
        </div>
      </section>
      <section>
        <div className='grid-chart'>
          <BarChartData/>
          <TypeChart/>
          <PriorityChart/>
          <StatusChart/>
        </div>
      </section>
    </Wrapper>
  );
};

export default Dashboard;