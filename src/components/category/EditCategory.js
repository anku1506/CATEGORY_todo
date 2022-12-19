//functional component
import React, { useEffect, useState } from "react";
import api from "../../api/categories";
import { Link, useLocation, useHistory } from "react-router-dom";

const EditCategory = () => {
  const location = useLocation();
  const history = useHistory();
  const { id, name } = location.state.category;
  const [validation,setValidation]=useState(true);

  const [data, setData] = useState(name);


  const updatedvalue = {
    id,
    data,
  };

  //Api call for Edit
  const updateCategoryHandler = async (category) => {
    const request = {
      id: category.id,
      name: category.data,
    };
  

    const response = await api.put(`/categories/${category.id}`, request);
    const { id, name } = response.data;
    setData("");
  };

  const update = (e) => {
    e.preventDefault();
    if (data === name || data === "") {
     setValidation(false);
      return;
    }   
    if (updatedvalue) {      
      updateCategoryHandler(updatedvalue);
      setValidation(true);
      alert("Updated Successfully");
      history.push("/");
    }
  };

  useEffect(
    ()=>{
      
    }

  )

  return (
    <div
      className="ui main"
      style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
    >
      <form className="ui main" onSubmit={update}>
        <div className="field" style={{ padding: "10px" }}>
          <h1
            style={{
              color: "red",
              marginLeft: "30px",
              textDecoration: "underline",
            }}
          >
            Update Category
          </h1>

          <div className="ui label">
            Category
            <div className="detail">:</div>
          </div>
          <input
            type="text"
            value={data}
            name="name"
            placeholder="Enter category Name"
            onChange={(e) => setData(e.target.value)}
          />
          {!validation &&<p style={{"color":"red","marginLeft":"88px"}}>Please Provide the updated value </p>}
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {" "}
          <button className="ui button blue">Update Category</button>
          <Link to="/">
            <button className="ui red button">Cancel</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default EditCategory;
