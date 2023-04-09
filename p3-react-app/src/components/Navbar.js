import React from 'react';
import styled from 'styled-components';
import {Banner} from '../components';
import {GiHamburgerMenu} from 'react-icons/gi';
import {SlLogout} from 'react-icons/sl'

const Wrapper = styled.nav`
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 0px 0px rgba(0, 0, 0, 0.1);
  /* .logo{
    display: flex;
    justify-content: center;
    width: 100px;
  } */
  .toggle-btn{
    background: transparent;
    border-color: transparent;
    font-size: 1.75rem;
    color: #E21818;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
`

const Navbar = () => {
  return (
    <Wrapper>
      <div>
        <button type='button' className='toggle-btn'>
          <GiHamburgerMenu />
        </button>
        <div>
          <Banner />
        </div>
      </div>
      <div>
        <button type='button' value='New Ticket' className='btn'>New Ticket</button>
      </div>
      <button type='button' className='toggle-btn'>
        <SlLogout/>
      </button>
    </Wrapper>
  )
}

export default Navbar;