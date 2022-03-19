import React, { useState } from 'react'

const Login = ({userLogin, inputChanged, register, login, credentials, setCredentials}) => {

    // const inputChanged = event => {
    //     const cred = credentials;
    //     cred[event.target.name] = event.target.value
    //     console.log(cred);
    //     setCredentials({credentials: cred})
    // }


  return (
    <div>
        <h1>Login User Form</h1>
        <div className='form-group'>

            <label htmlFor="">
                Username: 
                <input type="text" name="username"
                value={credentials.username}
                // onChange={(e) => setCredentials({...credentials, username: e.target.value })}
                onChange={e => setCredentials({...credentials, username: e.target.value})}
                />
            </label>
            <br />
            <label htmlFor="">
                Password: 
                <input type="password" name="password"
                value={credentials.password}
                // onChange={(e) => setCredentials({...credentials, password: e.target.value })}
                onChange={e => setCredentials({...credentials, password: e.target.value})}
                />

            </label>
        </div>
        <br />
        <button className='btn btn-primary btn btn-primary mt-5 mr-3' onClick={login}>Login</button>
        <button className='btn btn-primary btn btn-primary mt-5 mr-3' onClick={register}>Register</button>
        {/* <Range/> */}
    </div>
  )
}

export default Login