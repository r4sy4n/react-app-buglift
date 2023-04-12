import React from 'react';

const Admin = () => {
  return (
    <section>    
        <form className='form'>
          <h3>Admin</h3>
          <p>Manage Users</p>
          <div className='form-center'>
          <label htmlFor='email' className='form-label'>Email</label>
                  <input 
                      type='email' 
                      id='email' 
                      value='email'  
                      className='form-input'></input>
            {/* <FormRow
              type='text'
              labelText='last name'
              name='lastName'
              value={userData.lastName}
              handleChange={handleChange}
              />
              <FormRow
              type='email'
              name='email'
              value={userData.email}
              handleChange={handleChange}
              />
              <FormRow
              type='text'
              name='location'
              value={userData.location}
              handleChange={handleChange}
            /> */}
            <button type='submit' className='btn btn-block' >
              {/* {isLoading ? 'Please Wait...' : 'save changes'} */}
            </button>
          </div>
        </form>
    </section>
  )
}

export default Admin;