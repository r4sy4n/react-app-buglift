import React from 'react';
import { Outlet } from 'react-router-dom';
import {Navbar, Sidebar, Smallsidebar} from '../../components/index';
import styled from 'styled-components';


const Wrapper = styled.section`
  /* .dashboard {
    display: grid;
    grid-template-columns: 1fr;
  }
  .dashboard-page {
    width: 90vw;
    margin: 0 auto;
    padding: 2rem 0;
  } */
  /* @media (min-width: 992px) { */
    .dashboard {
      display: grid;
      grid-template-columns: 1fr ;
    }
    .dashboard-page {
      /* width: 90%; */
      /* width: 90vw; */
    margin: 0 auto;
    padding: 2rem 0;
    position: absolute;
    top: 6.5rem;
    left: 280px;
    }
  /* } */
`
const SharedLayout = () => {
  return (
    <Wrapper>
        <main className='dashboard'>
            {/* <Smallsidebar /> */}
            <Sidebar />
            <div>
                <Navbar />
                <div className='dashboard-page'>
                    <Outlet />
                </div>
            </div>
        </main>
    </Wrapper>
  )
}

export default SharedLayout;