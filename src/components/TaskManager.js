// import {data} from './data'
// import TaskForm from './TaskForm'


import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const TaskManager = ({tasks, setTasks, prices, setPrices, grandTotal}) => {

    const { id } = useParams()

    
  return (
    <div>
        <table className='task-table'>
            <thead>
                <tr>
                    <th className='number'>S/No</th>
                    <th>Description</th>
                    <th>Brand</th>
                    <th>Quantity</th>
                    {/* <th>Quantity value</th> */}
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
                    {/* <td>{task.Value}</td> */}
                    <td className='number'>{task.UnitPrice}</td>
                    <td className='number'>{task.Quantity * task.UnitPrice}</td>
                    {console.log(tasks.indexOf(task) + 1)}
                </tr>
                ))}
            </tbody>
            <tfoot>
                <tr>
                    <th colSpan="5">Grand Total Price</th>
                    <th>{prices}</th>
                </tr>   
            </tfoot>
        </table>
        <div>
            <Link to="/taskform/" className='btn btn-primary mt-5 mr-3'>
                Add
            </Link>
            <button className='btn btn-primary mt-5' onClick={grandTotal}>Click</button>
        </div>
    </div>
  )
  
}

export default TaskManager

{/* <td className="container mt-5">
    <div className='btn btn-danger'>DELETE</div>
    <div className='btn btn-warning ml-2'>EDIT</div>
</td> */}