import React, { useEffect, useState } from "react";
import CardProduct from "./ProductCard";
import { Link, useLocation } from "react-router-dom";

const ProductList = (props) => {
  const locationdata = useLocation();
  const { id: categoryID } = locationdata.state.category; //Destructure data from location

  const deleteproducthandler = (id) => {
    props.getproductId(id);
    
  };
 
    const handlesubmit = (categoryID) => {
      props.retrievedata(categoryID);
    };
   

  const renderProductList = props.products.map((product) => {
    return (        
      <CardProduct
        product={product}
        clickHandler={deleteproducthandler}       
        key={product.id}
      />
    );
    
  });
  return (
    <div className="ui celled list" style={{ marginTop: "100px" }}>
      <div>
        <h1 style={{ color: "blue", textAlign: "center" }}>Product List</h1>
        <Link to="/">
          <button>Go to Home</button>
        </Link>
      </div>
      
      {renderProductList}
    </div>
  );
  
};

export default ProductList;
