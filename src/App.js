// import logo from "./logo.svg";
// import CounterApp from "./components/CounterApp";
// import TodoList from "./components/TodoList";
// import ClassTodoList from "./components/ClassTodoList";
// import Pomodoro from "./components/Pomodoro";

// import "./Modal.css";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import TaskManager from "./components/TaskManager";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TaskForm from "./components/TaskForm";
import axios from "axios"
import { Link, useParams } from 'react-router-dom'
import { Button } from "bootstrap";
import UpdateTask from "./components/UpdateTask";
import App2 from "./components/App2";


function App() {
  
  const [tasks, setTasks] = useState([])
  const [sum, setSum] = useState()
  
  const djangoAPI = () => {
    axios.get("http://127.0.0.1:8000/api/")
    .then(response => {
      // console.log(response.data);
      setTasks(response.data.reverse())
      //   setSum(sum)
      
    })
    .catch(err => console.log("Not found"))
  }
  
  const grandTotal = function(){
    if (tasks.length > 0) {
      let total = 0;
    tasks.map(item => {
      total += item.Quantity * item.Unit_Price
      setSum(total)
      return total
      
    })}else{
      return setSum("")
    }
  }

    return (
      <div className="App">
       <Router>  
        <Routes>
          <Route path="*" element={<App2
          sum={sum} 
          setSum={setSum} 
          tasks={tasks} 
          setTasks={setTasks}
          grandTotal={grandTotal}
          djangoAPI={djangoAPI}
          />}/>
          <Route path="/taskform/" element={<TaskForm
          sum={sum} 
          setSum={setSum} 
          tasks={tasks} 
          setTasks={setTasks}
          grandTotal={grandTotal}
          djangoAPI={djangoAPI}
          />}/>
          <Route path="/update/:id/" element={<UpdateTask/>}/>
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