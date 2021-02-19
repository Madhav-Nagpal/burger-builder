import React, { Component, Fragment } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENT_PRICES = {
  salad: 0.4,
  bacon: 0.5,
  cheese: 1,
  meat: 1.5,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 5,
  };

  addIngredientHandler = (ingredient) => {
    this.setState((prevState, props) => {
      let updatedIngredients = { ...prevState.ingredients };
      updatedIngredients[ingredient] = prevState.ingredients[ingredient] + 1;
      let updatedTotalPrice =
        prevState.totalPrice + INGREDIENT_PRICES[ingredient];
      return {
        ingredients: updatedIngredients,
        totalPrice: updatedTotalPrice,
      };
    });
  };

  removeIngredientHandler = (ingredient) => {
    this.setState((prevState, props) => {
      let updatedIngredients = { ...prevState.ingredients };
      updatedIngredients[ingredient] = prevState.ingredients[ingredient] - 1;

      let updatedTotalPrice =
        prevState.totalPrice - INGREDIENT_PRICES[ingredient];
      return {
        ingredients: updatedIngredients,
        totalPrice: updatedTotalPrice,
      };
    });
  };

  render() {
    return (
      <Fragment>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredients={this.state.ingredients}
          addIngredientHandler={this.addIngredientHandler}
          removeIngredientHandler={this.removeIngredientHandler}
          currentPrice={this.state.totalPrice}
        />
      </Fragment>
    );
  }
}
export default BurgerBuilder;
