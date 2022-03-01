import React, { useState, useEffect } from "react";
import axios from "axios";
import './CounterApp.css'
import { Card } from "reactstrap";
import { Link } from "react-router-dom";

function CounterApp() {
  // const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  // const djangoAPI = function () {
  //   axios.get("http://127.0.0.1:8000/api/todos")
  //     .then((res) => {
  //       console.log(res.data);
  //       setTodos(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // };

  const djangoAPI = async () => {
    const res = await axios.get("http://127.0.0.1:8000/");

    setTodos(res.data)
  }

  useEffect(()=>{
      djangoAPI()
  },[])

  return (
    <div>

            <div className="main-students-show">
            {
                todos.map((todo, index) => (
                  <div style={{margin:"20px"}} className="firstdiv">
                    <img src={todo.image} alt="" style={{margin:"5% 50%",maxWidth:"200px", maxHeight:"200px"}}/>
                    <div key={index} style={{margin:"0% 10% 0% 50%"}}>
                      <p><strong>ID:</strong> {todo.id}</p>
                      <p><strong>Name:</strong> {todo.name}</p>
                      <p><strong>Title:</strong> {todo.title}</p>
                      <p><strong>Aim:</strong> {todo.aim}</p>
                      <p>Date Created:<strong> {todo.date}</strong></p>
                      <hr style={{margin:"0% 0% 0% 0%"}} />
                    </div>
                  </div>
                ))

            }
            </div>
        </div>
  );
}

export default CounterApp;

                    // <Card className="m-3 rounded shadow-lg main-students-show" style={{ width: '22em' }}>

                    // <Card.Img variant="top" src={image} />

                    // <Card.Body>

                    //     <Card.Title>{names}</Card.Title>
                    //     <Card.Text> {title} </Card.Text>
                    //     <Card.Text> {aim} </Card.Text>
                    //     <Card.Text> {date} </Card.Text>
                        
                    //     <Link className="btn btn-primary mr-2" to={`/${id}`}>Full Detail</Link>

                    // </Card.Body>
                    // </Card>
           
            
