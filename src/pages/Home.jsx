import React from "react";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <>
      <section className="section">
        <h2 className={classes.pageTitle}>Home Page</h2>
      </section>
    </>
  );
};
export default Home;
