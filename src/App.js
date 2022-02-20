import logo from "./logo.svg";
import CounterApp from "./components/CounterApp";
import TodoList from "./components/TodoList";
import ClassTodoList from "./components/ClassTodoList";
import Pomodoro from "./components/Pomodoro";

import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import TaskManager from "./components/TaskManager";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TaskForm from "./components/TaskForm";
import { data } from "./components/data";


function App() {
  // const[show, setShow] = useState(true);
  const [tasks, setTasks] = useState(data)
  const [prices, setPrices] = useState([])
  
  const grandTotal = () => {
    let sum = 0;
    tasks.map(item => {
        sum += item.TotalPrice
        setPrices(sum)
        return sum
        
      })
      console.log(sum);
}

  return (
    <div className="App">
      <Router>  
        <Routes>
          <Route path="/" element={<TaskManager tasks={tasks} 
          setTasks={setTasks} 
          prices={prices} 
          setPrices={setPrices} 
          grandTotal={grandTotal}/>}
          />
          <Route path="/taskform/" element={<TaskForm tasks={tasks} 
          setTasks={setTasks}
          grandTotal={grandTotal}/>}
          />
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