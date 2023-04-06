import { useState } from 'react';
import banner from '../assets/images/banner.png';
import styled from 'styled-components';

const Wrapper = styled.section`
  display: grid;
  align-items: center;
  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 1.38rem;
  }
  .form {
    max-width: 400px;
    border-top: 5px solid #E21818;
  }

  h3 {
    text-align: center;
  }
  p {
    margin: 0;
    margin-top: 1rem;
    text-align: center;
  }
  .btn {
    margin-top: 1rem;
    width: 100%;
  }
  .member-btn {
    background: transparent;
    border: transparent;
    color: #3b82f6;
    cursor: pointer;
    letter-spacing: 1px;
  }
`

const Register = () => {
    //variable state
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pwd, setPassword] = useState('');
    const [confirmpwd, setConfirmpassword] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [pwdError, setPasswordError] = useState('');
    const [confirmPwdError, setConfirmPasswordError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [isRegistered, setIsRegistered] = useState(true);

    //function to handle changes in username input field
    const nameChangeHandler = ( event ) => {
        setName( event.target.value );
        setUsernameError('');
        setSuccessMessage('');
    }
    const emailChangeHandler = ( event ) => {
        setEmail( event.target.value );
        setUsernameError('');
        setSuccessMessage('');
    }
    //function to handle changes in password input field
    const passwordChangeHandler = ( event ) => {
        setPassword( event.target.value );
        setPasswordError('');
        setSuccessMessage('');
    }
    //function to handle changes in confirm password input field
    const confirmPasswordChangeHandler = ( event ) => {
        setConfirmpassword( event.target.value );
        setConfirmPasswordError('');
        setSuccessMessage('');
    }

    const submitHandler = ( event ) => {
            event.preventDefault();  
        const regex = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[A-Z])(?=.*[!\@\-\#\$\.\%\&\*])(?=.*[a-zA-Z]).{8,}$/;          
        
        if(regex.test(pwd) && pwd === confirmpwd && (isRegistered && name === '') && email !== ''){ // If all inputs are valid, clear error messages and show success message
            setSuccessMessage('Registration Successful!');
            setName('');
            setEmail('');
            setPassword('');
            setConfirmpassword('');
            alert('Registration Successful!');
        }else if(regex.test(pwd) && pwd === confirmpwd && (!isRegistered && name !== '') && email !== ''){
            setSuccessMessage('Registration Successful!');
            setName('');
            setEmail('');
            setPassword('');
            setConfirmpassword('');
            alert('Registration Successful!');
        }else if((!isRegistered && name === '') || pwd === '' || confirmpwd === '' || email === ''){ // Validate username, password and confirm password field
            setSuccessMessage('All fields are required!');
        }else if(!regex.test(pwd)){ // Validate password
            setPasswordError('Password must be at least 8 characters and include uppercase and lowercase letters, numbers, and special characters.');
        }else if(confirmpwd !== pwd){ // Validate confirm password
            setConfirmPasswordError('Password do not match');
        }
    };
    const toggleMember = () => {
        setIsRegistered( !isRegistered );
        setSuccessMessage('');
    };
    
    return(
        <Wrapper className='full-page'>
            <form onSubmit={ submitHandler } className='form'>
                <img src={banner} alt='buglift banner' className='logo img-logo'/>
                <h3>{isRegistered ? 'Login' : 'Register'}</h3>
                {!isRegistered && <label htmlFor='name' className='form-label'>Name</label>}
                {!isRegistered && <input 
                    type='text' 
                    id='name' 
                    value={ name } 
                    onChange={ nameChangeHandler } className='form-input'></input>}
                <label htmlFor='email' className='form-label'>Email</label>
                <input 
                    type='email' 
                    id='email' 
                    value={ email } 
                    onChange={ emailChangeHandler } className='form-input'></input>
                <label htmlFor='password' className='form-label'>Password</label>
                <input 
                    type='password' 
                    id='password' 
                    value={ pwd }
                    onChange={ passwordChangeHandler } className='form-input'></input>
                {<p>{pwdError}</p>}
                <label htmlFor='confirmpassword' className='form-label'>Confirm Password</label>
                <input 
                    type='password' 
                    id='confirmpassword' 
                    value={ confirmpwd }
                    onChange={ confirmPasswordChangeHandler } className='form-input'></input>
                {<p>{confirmPwdError}</p>}
                <div>
                    {<p>{successMessage}</p>}
                </div>
                <input type='submit' value='Submit' className='btn btn-block'></input>
                <p>
                    {isRegistered ? 'Not yet registered? ' : 'Already registered? '}
                    <button type='button' onClick={toggleMember} className='member-btn'>
                    {isRegistered ? 'Register' : 'Login'}
                    </button>
                </p>
            </form>
        </Wrapper>
    )
};

export default Register;
