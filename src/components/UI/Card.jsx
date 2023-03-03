import React from "react";
import classes from "./Card.module.css";

// export default function Card(props){
//     return(
//         <div className={classes.card}>{props.children}</div>
//     );

// };

const Card = (props) => {
    // const  bgc = "black"
  return (
    <div className={classes.card} style={{backgroundColor: props.bgc}}>
      {props.children}
    </div>
  );
};


export default Card;

