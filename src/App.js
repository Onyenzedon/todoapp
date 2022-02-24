// import logo from "./logo.svg";
// import CounterApp from "./components/CounterApp";
// import TodoList from "./components/TodoList";
// import ClassTodoList from "./components/ClassTodoList";
// import Pomodoro from "./components/Pomodoro";

import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import TaskManager from "./components/TaskManager";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TaskForm from "./components/TaskForm";
import axios from "axios";


function App() {
    return (
      <div className="App">
      <Router>  
        <Routes>
          <Route path="/" element={<TaskManager/>}/>
          <Route path="/taskform/" element={<TaskForm/>}/>
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;

{/* <ClassTodoList /> */}
{/* <TodoList /> */}
{/* <CounterApp /> */}
{/* {show && <Pomodoro show={show} setShow={setShow}/> } */}
{/* <button className="btn btn-primary" onClick={() => setShow(!show)}>Show</button> */}
{/* <br /><br /> */}