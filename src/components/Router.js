//creating seperate route file
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import AddCategory from "./category/AddCategory";
import CategoryList from "./category/CategoryList";
import EditCategory from "./category/EditCategory";
import AddProduct from "./product/AddProduct";
import Editproduct from "./product/EditProduct";
import ProductList from "./product/ProductList";

const MainRouter = () => {
  return (
    <Router>
      <Header />
      <Switch>
        {/*Listing category route*/}
        <Route path="/" exact render={() => <CategoryList />} />
        {/*Listing product route*/}
        <Route path="/category/:id" render={() => <ProductList />} />
        {/*Add category route*/}
        <Route path="/add" render={() => <AddCategory />} />
        {/*Edit category route */}
        <Route path="/edit/:id" render={(props) => <EditCategory />} />
        {/*Edit product route */}
        <Route path="/editproduct/:id" render={() => <Editproduct />} />
        {/*Add product inside category route */}
        <Route path="/addProduct/:id" render={() => <AddProduct />} />
      </Switch>
    </Router>
  );
};

export default MainRouter;
