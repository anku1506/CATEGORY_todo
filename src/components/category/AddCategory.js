//functional component
import React, { useState } from "react";
import { useLocation, Link, useHistory } from "react-router-dom";
import { v4 as uuid } from "uuid";
import api from "../../api/categories";

const AddCategory = () => {
  const [categorydata, setCategoryData] = useState("");
  const [item,setItem]=useState([]);



  const [validation,setValidation]=useState(true);
  const history = useHistory();  

  //api call to add category
  const addCategoryHandler = async (categorydemo) => {     
    const payload = {
      id: uuid(),    
      name: categorydemo,
    };
    const response = await api.post("/categories", payload);             
    setItem([...item,response.data]);
    setCategoryData("");
    return response.data;
  };

  const handleChange = (e) => {
    setCategoryData(e.target.value);
  };

  const add = (e) => {
    e.preventDefault();
    if (categorydata === "") {
      setValidation(false);
      return;
    }
    if (categorydata) {
      addCategoryHandler(categorydata);
      setValidation(true);
      alert("Category Added successfully");
      history.push("/")   //navigate to home page
      
    }
  };



  return (
    <div
      className="ui main"
      style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
    >
      <form className="ui main" onSubmit={add}>
        <h1
          style={{
            color: "red",
            marginLeft: "100px",
            textDecoration: "underline",
          }}
        >
          Add Category Here
        </h1>

        <div className="field" style={{ padding: "10px" }}>
          <label>Please Enter Category : </label>
          <input
            type="text"
            name="name"
            placeholder="Enter Category Name"
            value={categorydata}
            onChange={handleChange}
          />
          {!validation &&<p style={{"color":"red","marginLeft":"145px"}}>Please fill the form </p>}
        </div>
        <div style={{ marginLeft: "80px" }}>
          {" "}
          <button className="ui button blue" style={{ marginLeft: "60px" }}>
            Add Category
          </button>
          <Link to="/">
            <button className="ui red button">Cancel</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AddCategory;
