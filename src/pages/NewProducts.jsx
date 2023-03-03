import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import products from "../data.js";
import Card from "../components/UI/Card";
import classes from "./Products.module.css";
import SaleItem from "../components/SaleItem";
import SingleProductListing from "../components/SingleProductListing.jsx";

const NewProducts = () => {
  return (
    <section className={classes.mainSection}>
      <div>
        <h2 className={classes.pageTitle}>New To Our Store</h2>
        <Card bgc="#EEEEEE">
        
        {products.map(
            (product) =>
            product.new &&  (
                <SingleProductListing Product={product} key={product.id} />
              )
          )}

  
        </Card>
      </div>
    </section>
  );
};

export default NewProducts;
