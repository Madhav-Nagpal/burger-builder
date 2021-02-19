import React from "react";
import styles from "./BuildControl.module.css";

const BuildControl = (props) => {
  return (
    <div className={styles.BuildControl}>
      <div className={styles.Label}>{props.label}</div>
      <button
        className={styles.Less}
        onClick={() => props.removeIngredientHandler(props.label)}
        disabled={props.lessDisable}
      >
        Less
      </button>
      <button
        className={styles.More}
        onClick={() => props.addIngredientHandler(props.label)}
      >
        More
      </button>
    </div>
  );
};

export default BuildControl;
