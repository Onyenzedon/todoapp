import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateTask = () => {
    let navigate = useNavigate()
    const { id } = useParams()

    const [description, setDescription] = useState("")
    const [brand, setBrand] = useState("")
    const [quantity, setQuantity] = useState("")
    const [value, setValue] = useState("")
    const [unitPrice, setUnitPrice] = useState("")

    useEffect(() => {
    loadData()
    }, []);

        let loadData = async () => {
        const result = await axios.get(`http://127.0.0.1:8000/api/${id}/`);
        console.log(result.data);

        setDescription(result.data.Description);
        setBrand(result.data.Brand);
        setQuantity(result.data.Quantity);
        setValue(result.data.Value);
        setUnitPrice(result.data.Unit_Price);
    }

const updateSingleData = async () => {
    let formField = new FormData()

    formField.append("Description", description);
    formField.append("Brand", brand);
    formField.append("Quantity", quantity);
    formField.append("Value", value)
    formField.append("Unit_Price", unitPrice)
  // formField.append("TotalPrice", quantity * unitPrice)

//   console.log(formField);

        await axios({
          method: 'put',
          url:`http://127.0.0.1:8000/api/${id}/`,
          data: formField
        })
        .then((response) => {
          console.log(response.data);
          navigate("/");
        })
        .catch(err => console.log(err))
}


  return (
    <div>
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
              placeholder="Enter Value"
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
          <button className="btn btn-primary  m-auto" onClick={updateSingleData}>
            Update Product
          </button>
          {/* <Link to="/">
            <button className='btn btn-primary mt-5'>Home</button>
          </Link> */}
        </div>
    </div>
  )
}

export default UpdateTask