// import {data} from './data'
// import TaskForm from './TaskForm'


// import React, { useState } from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const TaskManager = () => {

    const [tasks, setTasks] = useState([])
  const [sum, setSum] = useState()

  const djangoAPI = () => {
    axios.get("http://127.0.0.1:8000/api/")
    .then(response => {
        console.log(response.data);
        setTasks(response.data)
    //   setSum(sum)
    
    })
    .catch(err => console.log("Not found"))
  }


  
  useEffect(() => {
    djangoAPI()
    console.log(tasks,sum);
  }, [])

  const grandTotal = function(){
    let total = 0;
    tasks.map(item => {
      total += item.Quantity * item.Unit_Price
      setSum(total)
      return total
      
    })
  }

  useEffect(() => {
    grandTotal()
  }, [])
    
    
  return (
    <div>
        <table className='task-table'>
            <thead>
                <tr>
                    <th className='number'>S/No</th>
                    <th>Description</th>
                    <th>Brand</th>
                    <th>Quantity</th>
                    <th>Unit Price</th>
                    <th>Total Price</th>
                </tr>
            </thead>
            <tbody>
            
                {tasks.map(task => (
                <tr key={tasks.indexOf(task) + 1}>
                    <td className="number">{tasks.indexOf(task) + 1}</td>
                    <td>{task.Description}</td>
                    <td>{task.Brand}</td>
                    <td className='number'>{`${task.Quantity} ${task.Value}`}</td>
                    <td className='number'>{task.Unit_Price}</td>
                    <td className='number'>{task.Quantity * task.Unit_Price}</td>
                </tr>
                ))}
            </tbody>
            <tfoot>
                <tr>
                    <th colSpan="5" className='number'>Grand Total Price</th>
                    <th className='number'>{sum}</th>
                </tr>   
            </tfoot>
        </table>
        <div>
            <Link to="/taskform/" className='btn btn-primary mt-5 mr-3'>
                Add
            </Link>
        </div>
    </div>
  )
  
}

export default TaskManager

// {/* <td className="container mt-5">
//     <div className='btn btn-danger'>DELETE</div>
//     <div className='btn btn-warning ml-2'>EDIT</div>
// </td> */}
