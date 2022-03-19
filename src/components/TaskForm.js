import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import { data } from './data'

const TaskForm = ({tasks, setTasks, grandTotal, sum}) => {
  let navigate = useNavigate();
  
  const [description, setDescription] = useState("")
  const [brand, setBrand] = useState("")
  const [quantity, setQuantity] = useState()
  const [value, setValue] = useState("")
  const [unitPrice, setUnitPrice] = useState()

const addNewProduct = async () => {
  let formField = new FormData();

  formField.append("Description", description);
  formField.append("Brand", brand);
  formField.append("Quantity", quantity);
  formField.append("Value", value)
  formField.append("Unit_Price", unitPrice)
  formField.append("Total_Price", (quantity * unitPrice))

  // console.log(formField.);

        await axios({
          method: 'post',
          url:"http://127.0.0.1:8000/api/",
          data: formField
        })
        .then((response) => {
          // console.log(response.data);
          navigate("/");
        })
        .catch(err => console.log("Empty Field Detected"))
      };
        
      

      // useEffect(() => {
      //   addNewProduct()
      // }, []
      // )
      

  return (
    <div className="container">
        <div className="form-group">
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
              type="number"
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
              placeholder="Enter A Value"
              name="value"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter Product Price"
              name="unitPrice"
              value={unitPrice}
              onChange={(e) => setUnitPrice(e.target.value)}
            />
          </div>
          <button className='btn btn-primary mt-5 mr-3' onClick={addNewProduct}>
            Add Product
          </button>
          <Link to="/">
            <button className='btn btn-primary mt-5'>Home</button>
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