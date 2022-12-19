import React, { Children, useState } from "react";
import api from "../../api/categories";
import { Link, useLocation, useHistory } from "react-router-dom";

const Editproduct = (props) => {
  const location = useLocation();
  
  const history = useHistory();
  


  const { id, pname, categoryId } = location.state.product;

  const [data, setData] = useState(pname);
  const [validation,setValidation]=useState(true);
  const updatedvalue = {
    id,
    data,
    categoryId,
  };

  //api call for update product
  const updateproductHandler = async (data) => {
    const request = {
      id: data.id,
      pname: data.data,
      categoryId: data.categoryId,
    };
    const response = await api.put(`/products/${data.id}`, request);
    const { id } = response.data; //destructuring response here
    setData("");

    return response.data;
  };
  const gobackhandler=()=>{
    history.goBack();
    
  }
  const updateproduct = (e) => {
    e.preventDefault();
    if (data === pname || data === "") {
      setValidation(false);

     return;
    }
    
    if (updatedvalue) {
      updateproductHandler(updatedvalue);
      setValidation(true);
      alert("Successfully updated");    
      history.goBack();
    }
   
  };
 

  return (
    <div
      className="ui main"
      style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
    >
      <form className="ui main" onSubmit={updateproduct}>
        <div className="field" style={{ padding: "10px" }}>
          <h3
            style={{
              color: "blue",
              marginLeft: "30px",
              textDecoration: "underline",
            }}
          >
            Update product Here
          </h3>

          <div className="ui label">
            product
            <div className="detail">:</div>
          </div>
          <input
            type="text"
            value={data}
            name="pname"
            placeholder="Enter product Name"
            onChange={(e) => setData(e.target.value)}
          />
          {!validation &&<p style={{"color":"red","marginLeft":"80px"}}>Please Provide the updated value </p>}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginLeft: "100px",
          }}
        >
          {" "}
          <button className="ui button blue">Update product</button>          
            <button className="ui red button" onClick={gobackhandler}>Cancel</button>
          
        </div>
      </form>
    </div>
  );
};

export default Editproduct;
