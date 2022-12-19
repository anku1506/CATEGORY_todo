import React, { useState } from "react";
import { useLocation, useHistory, Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import api from "../../api/categories";

const AddProduct = () => {
  const [productdata, setProductdata] = useState("");
  const [validation,setValidation]=useState(true);
  const location = useLocation();
  const history = useHistory();
  


  const { id } = location.state.category;
  

  //api call to add product
  const addProductHandler = async (data) => {
    const request = {
      id: uuid(),
      pname: data.productdata,
      categoryId: data.id,
    };

    const response = await api.post("/products", request);
    setProductdata("");
    return response.data;
  };

  const addProduct = (e) => {
    e.preventDefault();
    if (productdata === "") {
     setValidation(false);
      return;
    }
    const updatedvalue = {
      id,
      productdata,
    };

    if (updatedvalue) {
      setValidation(true);
      addProductHandler(updatedvalue);      
      alert("Prouct added successfully");
     
      history.push("/")    
      
    }
  };

  return (
    <div
      className="ui main"
      style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
    >
      <form className="ui main" onSubmit={addProduct} novalidate>
        <h1
          style={{
            color: "red",
            marginLeft: "100px",
            textDecoration: "underline",
          }}
        >
          Add Product Here
        </h1>
        <div className="field" style={{ padding: "10px" }}>
          <div>
            <label class="form-label">Please Enter Product : </label>
            <input
              type="text"
              value={productdata}
              name="pname"
              placeholder="Enter Product Name"
           
              onChange={(e) => setProductdata(e.target.value)}
            />
              {!validation &&<p style={{"color":"red","marginLeft":"130px"}}>Please fill the form </p>}
           
          </div>
        </div>
        <div style={{ marginLeft: "150px" }}>
          {" "}
          <button className="ui button blue">Add Product</button>
          <Link to="/">
            <button className="ui red button">Cancel</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
