import React, { useState, useContext, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

import classes from "./StyledNavbar.module.css";
import CartContext from "../store/cart-context";


const StyledNavbar = (props) => {
  const [isShown, setIsShown] = useState(false);
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);
  const {items} = cartCtx;

  const btnClasses = `${classes.navButton} ${btnIsHighlighted ? classes.bump : ''}`;
  useEffect(() =>{
    if(cartCtx.items.length ===0){
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(()=>{
      setBtnIsHighlighted(false);
    }, 300);
    
    return() =>{
      clearTimeout(timer);
    };

  },[items])

  const numberOfCartItems = items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  return (
    <nav className={classes.navbar}>
      <img
        className={classes.navbarLogo}
        src="/images/GoodGums-logo-sm.png"
      ></img>
      <div className={classes.navbarButtons}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? classes.active : classes.link
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? classes.active : classes.link
          }
        >
          About
        </NavLink>
        <button
          to="/products"
          // className={({ isActive }) =>
          //   isActive ? classes.active : classes.link
          // }
          className={classes.navButton}
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        >
          Products
          {isShown && (
            <div className={classes.dropMenu}>
              <ul>
                <li>
                  <NavLink className={classes.dropMenuItem} to="/discount">
                    On Sale
                  </NavLink>
                </li>
                <li>
                  <NavLink className={classes.dropMenuItem} to="/newproducts">
                    New Products
                  </NavLink>
                </li>
                <li>
                  <NavLink className={classes.dropMenuItem} to="/products">
                    All Products
                  </NavLink>
                </li>
              </ul>
            </div>
          )}
        </button>
        <NavLink
          to="/purchase"
          className={({ isActive }) =>
            isActive ? classes.active : classes.link
          }
        >
          Purchase
        </NavLink>
        <button className={btnClasses} onClick={props.onShowCart}>
          Cart <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
      </div>
    </nav>
  );
};

export default StyledNavbar;
