import React from "react";
import styles from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const BuildControls = (props) => {
  let controlBox = Object.keys(props.ingredients).map((ingKey) => {
    return (
      <BuildControl
        key={ingKey}
        label={ingKey}
        addIngredientHandler={props.addIngredientHandler}
        removeIngredientHandler={props.removeIngredientHandler}
        lessDisable={!Boolean(props.ingredients[ingKey])}
      />
    );
  });

  return (
    <div className={styles.BuildControls}>
      <p>
        Current Price: <strong>$ {props.currentPrice.toFixed(2)}</strong>
      </p>
      {controlBox}
      <button className={styles.OrderButton}>ORDER NOW</button>
    </div>
  );
};

export default BuildControls;
