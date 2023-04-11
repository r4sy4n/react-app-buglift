import React from 'react';
import styled from 'styled-components';
import Banner from './Banner';


const Wrapper = styled.aside`
box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1);
/* display: none; */
  .sidebar-container {
        background: #fff;
        min-height: 100vh;
        height: 100%;
        width: 250px;
        margin-left: -250px;
        display: none;
        transition: 0.3s ease-in-out all;
    }
  .content {
      position: sticky;
      top: 0;
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
  return (
   <Wrapper>
      <div className='sidebar-container'>
        <div className='content'>
          <header>
            <Banner />
          </header>
          {/* <NavLinks /> */}
        </div>
      </div>
    </Wrapper>
  )
}

export default Sidebar;