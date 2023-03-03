import React, { useState, useContext } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import products from "../data.js";
import Card from "../components/UI/Card";
import classes from "./Products.module.css";
import SingleProductListing from "../components/SingleProductListing.jsx";

const Products = () => {

  return (
    <section className={classes.mainSection}>
      <div>
        <h2 className={classes.pageTitle}>All Products</h2>
        <Card bgc="#EEEEEE">
          {products.map((product) => (<SingleProductListing Product={product} key={product.id}/>))}
        </Card>
      </div>
    </section>
  );
};

export default Products;
