import React from 'react';
import { useState, useContext } from 'react';
import styled from 'styled-components';
import {Banner} from '../components';
import {GiHamburgerMenu} from 'react-icons/gi';
import {SlLogout} from 'react-icons/sl'
import { Link } from 'react-router-dom';
import { SharedLayoutContext } from '../pages/dashboard/SharedLayout';

const Wrapper = styled.nav`
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background:#fff;
  box-shadow: 0 1px 0px 0px rgba(0, 0, 0, 0.1);
  width: 100%;
  position: fixed;
  top: 0;
  /* z-index: -1; */

  .logo {
    display: flex;
    justify-content: center;
    /* width: 100px; */
  }
  .nav-center {
    display: flex;
    width: 90%;
    align-items: center;
    justify-content: space-between;
    transition: 0.3s ease-in-out all;
    margin-left: 250px;
  }
  .toggle-btn{
    background: transparent;
    border-color: transparent;
    font-size: 1.75rem;
    color: #E21818;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-left: 1rem;
  }
  .logout-btn {
    background: transparent;
    border-color: transparent;
    color: #E21818;
    cursor: pointer;
    font-size: 1.75rem;
    top: 40px;
    left: 0;
    margin: 10px;
    padding: 0.5rem;
  }
  .btn {
    width: 108px;
    text-align: center;
    margin-left: 10rem;
  }
  .nav-move{
    display: flex;
    flex-direction: flex-end;
    width: 90%;
    align-items: center;
    justify-content: space-between;
    margin-left: 0px;
    transition: 0.3s ease-in-out all;
  }
  /* @media (max-width: 992px) {
     position: sticky;
     top: 0;
  .nav-center {
      width: 90%;
    }} */
`

const Navbar = () => {
  const {showSidebar, setShowsidebar} = useContext(SharedLayoutContext);
  const [sidebar, setSidebar] = useState(false);

  // const hideSidebar = () => setSidebar(!sidebar);
  console.log(showSidebar);
  return (
    <Wrapper>
      <div className={sidebar ? 'nav-move' : 'nav-center'}>
          <button type='button' className='toggle-btn' onClick={() => {
            setSidebar(!sidebar)  
            setShowsidebar(!showSidebar);
          }}>
            <GiHamburgerMenu />
          </button>
            <Banner />
          <Link to='createticket' className='btn'>New Ticket</Link>
          <button type='button' className='logout-btn'>
            <SlLogout/>
          </button>
      </div>
    </Wrapper>
  )
}

export default Navbar;