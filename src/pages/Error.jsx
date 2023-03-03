import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import classes from './Error.module.css';

const Error = () => {
  return (
    <section className="section">
      <div className="Error-Main-section">
        <h2 className={classes.pageTitle}>404</h2>
        <h3> Page not found</h3>
        <Link to="/" className="btn">
          Home
        </Link>
      </div>
    </section>
  );
};
export default Error;
