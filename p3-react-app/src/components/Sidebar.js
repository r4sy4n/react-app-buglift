import React from 'react';
import styled from 'styled-components';
import Banner from './Banner';
import { useState, useContext } from 'react';
import { SharedLayoutContext } from '../pages/dashboard/SharedLayout';

const Wrapper = styled.aside`
box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1);
transition: 0.3s ease-in-out all;
/* display: none; */
  .sidebar-container {
        background: #fff;
        min-height: 100vh;
        height: 100%;
        width: 250px;
        /* margin-left: -250px;
        display: none; */
        transition: 0.3s ease-in-out all;
        
    }
  .content {
      position: sticky;
      top: 0;
      z-index: 1;
    }
  header {
      height: 6rem;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 2.5rem;
    }
`
const Sidebar = () => {
      const {showSidebar, setShowsidebar} = useContext(SharedLayoutContext);

  return (
   <Wrapper className={showSidebar ? null : 'hide'}>
      <div className='sidebar-container'>
        <div className='content'>
          <header>
            <Banner />
          </header>
          <h2>Sidebar</h2>
        </div>
      </div>
    </Wrapper>
  )
}

export default Sidebar;