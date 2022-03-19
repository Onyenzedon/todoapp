import axios from 'axios'
import { Button } from 'bootstrap'
import { useEffect, useState } from 'react'
import Slider from 'rc-slider'
import { Link, useNavigate, useParams } from 'react-router-dom'

const TaskManager = ({
  sum, setSum, tasks, setTasks, grandTotal, djangoAPI, credentials,
  setCredentials,
  userLogin,
  login,
  register}) => {
  let navigate = useNavigate()
  const { id } = useParams()
  
  const deleteTask = async (id) => {
    if (window.confirm("Delete?") == true) {
      await axios.delete(`http://127.0.0.1:8000/api/${id}/`);
      djangoAPI()
      navigate("/")
    } else {
      navigate("/")
    }
    
  }

  // const openModal = (id) => {
  // <div id="id01" className="modal">
  //   <span onClick={() => navigate("/")} className="close" title="Close Modal">×</span>
  //   <form className="modal-content" action="/">
  //     <div className="container">
  //       <h1>Delete Account</h1>
  //       <p>Are you sure you want to delete your account?</p>

  //       <div className="clearfix">
  //         <button type="button" onClick={() => navigate("/")}>Cancel</button>
  //         <button type="button" onClick={() => deleteTask(id)}>Delete</button>
  //       </div>
  //     </div>
  //   </form>
  // </div>
  // }

  useEffect(() => {
    grandTotal()
  }, [tasks])
  

  useEffect(() => {
    djangoAPI()
  }, [])

    
  return (
    <div>
        <table className='task-table'>
            <thead>
                <tr className='number'>
                    <th>S/No</th>
                    <th>Description</th>
                    <th>Brand</th>
                    <th>Quantity</th>
                    <th>Unit Price</th>
                    <th>Total Price</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody  className='descriptions'>
            
                {tasks.map(task => (
                <tr key={tasks.indexOf(task) + 1}>
                    <th className="number">{tasks.indexOf(task) + 1}</th>
                    <td>{task.Description}</td>
                    <td>{task.Brand}</td>
                    <td className='number'>{`${task.Quantity} ${task.Value}`}</td>
                    <td className='number'>{task.Unit_Price}</td>
                    <th className='number'>{task.Quantity * task.Unit_Price}</th>
                    <td>
                      <div className='container justify-content-center d-flex m-auto'>
                        
                      <button className='btn btn-danger m-auto' onClick={() => deleteTask(task.id)}>DEL</button>
                      <Link to={`/update/${task.id}/`}>
                      <button className='btn btn-primary m-auto'>EDIT</button>
                      </Link>
                      </div>
                    </td>
                </tr>
                ))}
            </tbody>
            <tfoot>
                <tr>
                    <th colSpan="5" className='number'>Grand Total Price</th>
                    <th className='number'>{tasks && sum}</th>
                </tr>   
            </tfoot>
        </table>
        <div>
            <Link to="/taskform/" className='btn btn-primary mt-5 mr-3'>
                Add
            </Link>
            <Link to='/login/' className='btn btn-primary mt-5 mr-3'>
              Login
            </Link>
            <Slider/>
        </div>
    </div>
  )
  
}

export default TaskManager

// {/* <td className="container mt-5">
//     <div className='btn btn-danger'>DELETE</div>
//     <div className='btn btn-warning ml-2'>EDIT</div>
// </td> */}
