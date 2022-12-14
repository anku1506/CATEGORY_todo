import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import AddCategory from "./AddCategory";
import CategoryList from "./CategoryList";
import { v4 as uuid } from "uuid";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import api from "../api/categories";
import EditCategory from "./EditCategory";
import AddProduct from "./AddProduct";
import ProductList from "./ProductList";
import Editproduct from "./EditProduct";

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProduct] = useState([]);

  //retrieve category from api
  const retrieveCategory = async () => {
    const response = await api.get("/categories");
    const result = response.data;

    result.sort((a, b) => b.row - a.row);
    return result;
  };
  //retrive-view product data from api
  const retrieveProduct = async (data) => {
   // console.log("data from retrieveproduct", data);
    const id = "20577c53-278a-4b7d-93f9-5f77adf2f723";
    const response = await api.get(`/products?categoryId=${id}`);

    const productresult = response.data;

    return productresult;
  };
  //add category handler
  const addCategoryHandler = async (categorydemo) => {
    console.log(categories.length + 1);

    const request = {
      id: uuid(),
      row: categories.length + 1,
      ...categorydemo,
    };

    const response = await api.post("/categories", request);
    setCategories([...categories, response.data]);
  };

  //add Product handler
  const addProductHandler = async (product) => {
    const request = {
      id: uuid(),
      pname: product.pname,
      categoryId: product.id,
    };

    const response = await api.post("/products", request);
    setProduct([...product, response.data]);
  };

  //update-edit category handler
  const updateCategoryHandler = async (category) => {
    const response = await api.put(`/categories/${category.id}`, category);
    const { id, name } = response.data; //destructuring response here
    setCategories(
      categories.map((xyz) => {
        return xyz.id === id ? { ...response.data } : xyz;
      })
    );
  };

  //update-edit product handler
  const updateproductHandler = async(product) => {
    
    const response = await api.put(`/products/${product.id}`, product);
    const { id, name } = response.data; //destructuring response here
    setProduct(
      products.map((xyz) => {
        return xyz.id === id ? { ...response.data } : xyz;
      })
    );
  };

  //delete api call for category

  const removeHandler = async (id) => {
    await api.delete(`/categories/${id}`);
    const newCategoryList = categories.filter((category) => {
      return category.id !== id;
    });

    setCategories(newCategoryList);
  };
  // delete api call for product
  const removeproductHandler = async (id) => {
    await api.delete(`/products/${id}`);
    const newproductList = products.filter((product) => {
      return product.id !== id;
    });

    setProduct(newproductList);
  };
  //useEffect- retrieve from local storage

  useEffect(() => {
    const getAllCategory = async () => {
      const allcategory = await retrieveCategory();
      if (allcategory) setCategories(allcategory);
    };
    getAllCategory();
  }, []);

  //useeffect for product
  useEffect(() => {
    const getAllproduct = async () => {
      const allproduct = await retrieveProduct();
      if (allproduct) setProduct(allproduct);
    };
    getAllproduct();
  }, []);
  //set in local storeage
  useEffect(() => {}, [categories]);

  //demo
  const getdata = (data) => {
    console.log("from child to parent in app js", data);
  };
  return (
    <div className="ui container">
      <Router>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <CategoryList
                {...props}
                categories={categories}
                getCategoryId={removeHandler}
              />
            )}
          />
          <Route
            path="/productlist"
            render={(props) => (
              <ProductList
                {...props}
                products={products}
                retrievedata={retrieveProduct}
                getproductId={removeproductHandler}
              />
            )}
          />

          <Route
            path="/add"
            render={(props) => (
              <AddCategory {...props} addCategoryHandler={addCategoryHandler} />
            )}
          />
{/*edit category route */}
          <Route
            path="/edit"
            render={(props) => (
              <EditCategory
                {...props}
                updateCategoryHandler={updateCategoryHandler}
              />
            )}
          />
{/*edit product route */}
          <Route
          path="/editproduct"
          render={(props) => (
            <Editproduct
              {...props}
              updateproductHandler={updateproductHandler}
            />
          )}
        />

          <Route
            path="/addProduct"
            render={(props) => (
              <AddProduct {...props} addProductHandler={addProductHandler} />
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
