import axios from 'axios'
import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom'
import Login from './Login'
import TaskManager from './TaskManager'

const App2 = ({sum, setSum, tasks, setTasks, grandTotal, djangoAPI}) => {
    const[token, setToken] = useState('')
    const [credentials, setCredentials] = useState({
        username: '', password: ''
    })

    let navigate = useNavigate()

    const inputChanged = event => {
        const cred = credentials;
        cred[event.target.name] = event.target.value
        setCredentials({...credentials, credentials: cred})
        // console.log(credentials);
    }
    
    const userLogin = (tok) => {
        setToken(tok)
    }

    const login = event => {
        axios('http://127.0.0.1:8000/auth/', {
            method: 'POST',
            // headers:{'Content-Type': 'application/json'},
            // body: JSON.stringify(credentials)
            data: credentials
        })
        // .then(data => {
        //     data.json()
        //     console.log(data);
        // })
        .then(data => {
            // console.log(data.token);
            // userLogin(data.token)
            navigate("/")
        })
        .catch(err => console.error(err))
    }
    
    const register =  () => {
        axios('http://127.0.0.1:8000/api/register/', {
        method: 'POST',
        // headers:{'Content-Type': 'application/json'},
        // body: JSON.stringify(credentials)
        data: credentials
        })
        .then(data => {
            console.log(data.data);
            data.json()
        })
        .then(data => {
            console.log(data);
        //     userLogin(data.token)
        //     console.log(token);
        })
        .catch(err => console.error(err))
        
    }

  return (
    <div>
        <Routes>
            <Route path='/' element={
                <TaskManager
                sum={sum} 
                setSum={setSum} 
                tasks={tasks} 
                setTasks={setTasks}
                grandTotal={grandTotal}
                djangoAPI={djangoAPI}
                token={token}
                credentials={credentials} setCredentials={setCredentials} userLogin={userLogin} login={login} register={register}
                />
            }           
            />
            <Route path='/login' element={
                <Login credentials={credentials} setCredentials={setCredentials} userLogin={userLogin} login={login} register={register}
                inputChanged={inputChanged}
                />
            }            
            />
        </Routes>
    </div>
  )
}

export default App2