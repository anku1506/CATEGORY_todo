import React from "react";
import CardCategory from "./CategoryCard";
import { Link } from "react-router-dom";

const CategoryList = (props) => {
  
  const deletecontacthandler = (id) => {
    props.getCategoryId(id);
    console.log("delete clicked");
  };



  const renderCategoryList = props.categories.map((category) => {   
    return (
      <CardCategory
        category={category}
        clickHandler={deletecontacthandler}
        key={category.id}
      />
    );
  });
  return <div className="ui celled list" style={{marginTop:"100px"}}>
  <h1 style={{color:"red",textAlign:"center"}}>Category List
  </h1>
 <Link to="/add">
 <button className="ui inverted primary button">Add Category</button> 
 </Link>
 

 
 
  {renderCategoryList}</div>;
};

export default CategoryList;
