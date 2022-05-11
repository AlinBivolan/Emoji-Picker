import React from "react";

import classes from "./Category.module.css";

const Category = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.category}>R</div>
      <div className={classes.category}>😀</div>
      <div className={classes.category}>👋</div>
      <div className={classes.category}>🐵</div>
      <div className={classes.category}>🍇</div>
      <div className={classes.category}>🌍</div>
      <div className={classes.category}>🎃</div>
      <div className={classes.category}>👓</div>
      <div className={classes.category}>🏧</div>
    </div>
  );
};

export default Category;
