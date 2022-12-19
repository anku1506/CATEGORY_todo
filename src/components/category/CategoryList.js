//functional component
import React, { useState, useEffect } from "react";
import CardCategory from "./CategoryCard";
import { Link, useLocation } from "react-router-dom";
import api from "../../api/categories";

const CategoryList = (props) => {
  const [categories, setCategories] = useState([]);

  //retrieve category from api
  const retrieveCategory = async () => {
    const response = await api.get("/categories");
    const result = response.data;
   result.reverse();
        
    return result;
  };

  //useEffect- retrieve from api category

  useEffect(() => {
    const getAllCategory = async () => {
      const allcategory = await retrieveCategory();
      if (allcategory) setCategories(allcategory);
    };
    getAllCategory();
  }, []);

  const removeHandler = async (id) => {
    await api.delete(`/categories/${id}`);
    const newCategoryList = categories.filter((category) => {
      return category.id !== id;
    });
    setCategories(newCategoryList);
  };

  const renderCategoryList = categories.map((category) => {
    return (
      <CardCategory
        category={category}
        clickHandler={removeHandler}
        key={category.id}
      />
    );
  });
 
  return (
    <div className="ui celled list" style={{ marginTop: "100px" }}>
      <h1
        style={{
          color: "red",
          textAlign: "center",
          textDecoration: "underline",
        }}
      >
        Category List
      </h1>
      <div style={{ display: "flex", justifyContent: "right" }}>
        <Link to="/add">
          <button className="ui red button">Add Category</button>
        </Link>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p>
          <h1
            style={{
              textDecoration: "underline",
              textDecorationColor: "blue",
              color: "blue",
            }}
          >
            Category
          </h1>
        </p>
        <p>
          <h1
            style={{
              textDecoration: "underline",
              textDecorationColor: "blue",
              color: "blue",
            }}
          >
            Actions
          </h1>
        </p>
        {/*Conditional rendring */}
      </div>
      {renderCategoryList.length <= 0 && (
        <h2 style={{ textAlign: "center", marginTop: "100px" }}>
          Sorry : No Data Found !
        </h2>
      )}
      {renderCategoryList.length > 0 && (
        <div>
          <h3>{renderCategoryList}</h3>
        </div>
      )}
    </div>
  );
};

export default CategoryList;
