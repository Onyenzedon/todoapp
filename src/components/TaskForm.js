import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const TaskForm = ({tasks, setTasks, grandTotal}) => {
  // let navigate = useNavigate();
  
  const [serialNo, setSerialNo] = useState("")
  const [description, setDescription] = useState("")
  const [brand, setBrand] = useState("")
  const [quantity, setQuantity] = useState("")
  const [unitPrice, setUnitPrice] = useState("")

const addNewProduct = () => {
        let formField = new FormData();

        formField.append("description", description);
        formField.append("brand", brand);
        formField.append("quantity", quantity);
        formField.append("unitPrice", unitPrice);
        
        setTasks(formField)
        console.log(tasks);
        // navigate('/')
    } 

  return (
    <div className="container">
        <div className="form-group">
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Serial Number"
              name="serialNo"
              value={serialNo}
              onChange={(e) => setSerialNo(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Product Name(Description)"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Product Brand"
              name="brand"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Quantity"
              name="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Product Price"
              name="unitPrice"
              value={unitPrice}
              onChange={(e) => setUnitPrice(e.target.value)}
            />
          </div>
          <button className="btn btn-primary btn-block" onClick={addNewProduct}>
            Add Product
          </button>
          <Link to="/">
            <button>Home</button>
          </Link>
        </div>
      </div>
  )
}

export default TaskForm
{/* <div className="form-group">
  <input
    type="text"
    className="form-control form-control-lg"
    placeholder="Enter Product Price"
    name="totalPrice"
    value={totalPrice}
    onChange={(e) => setTotalPrice(e.target.value)}
  />
</div> */}