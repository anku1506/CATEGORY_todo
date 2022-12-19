//Functional component
import React, { useEffect, useState } from "react";
import CardProduct from "./ProductCard";
import { Link, useLocation } from "react-router-dom";
import api from "../../api/categories";

const ProductList = (props) => {
  const location = useLocation();

  const [product, setProduct] = useState([]);
  const { id } = location.state.category;

  //api call to get all product
  const getAllProductData = async () => {

    const response = await api.get(`/products?categoryId=${id}`);
    const productresult = response.data;
   productresult.reverse();
    return productresult;
  };

  //useeffect for getall product
  useEffect(() => {
    const getAllproduct = async () => {
      const allproduct = await getAllProductData();
      if (allproduct) setProduct(allproduct);
    };
    getAllproduct();
  }, []);

  //api call to delete product
  const removeproductHandler = (id) => {
    api.delete(`/products/${id}`);
    const newproductList = product.filter((product) => {
      return product.id !== id;
    });

    setProduct(newproductList);
  };

  const renderProductList = product.map((product) => {
    return (
      <CardProduct
        product={product}
        clickHandler={removeproductHandler}
        key={product.id}
      />
    );
  });
  return (
    <div className="ui celled list" style={{ marginTop: "100px" }}>
      <div>
        <h1
          style={{
            color: "red",
            textAlign: "center",
            textDecoration: "underline",
          }}
        >
          Product List
        </h1>
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
            Product
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

      {renderProductList.length <= 0 && (
        <h2 style={{ textAlign: "center", marginTop: "100px" }}>
          Sorry : No Data Found !
        </h2>
      )}
      {renderProductList.length > 0 && (
        <div>
          <h3>{renderProductList}</h3>
        </div>
      )}

      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
      >
        <Link to="/">
          <button className="ui red button">Go to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductList;
