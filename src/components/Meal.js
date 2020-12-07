import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Meal = ({ category, listMeals, setListMeals }) => {
  const handleAddMeal = (meal, index) => {
    meal.quantity = 0;

    const newMeals = [...listMeals];
    if (newMeals.indexOf(meal) === -1) {
      meal.quantity++;
      newMeals.push(meal);
      setListMeals(newMeals);
    }
  };

  return category.meals.map((meal, index) => {
    return (
      <div
        key={index}
        className="meal-container"
        onClick={() => handleAddMeal(meal, index)}
      >
        <div className="meal-infos">
          <h3> {meal.title}</h3>
          <p
            className="description"
            style={{ display: meal.description ? "block" : "none" }}
          >
            {" "}
            {meal.description}
          </p>
          <div className="meal-price">
            <p> {meal.price} €</p>
            <p style={{ display: meal.popular ? "block" : "none" }}>
              <FontAwesomeIcon icon="star" /> Pop
            </p>
          </div>
        </div>
        <div
          className="meal-img"
          style={{ display: meal.picture ? "block" : "none" }}
        >
          <img src={meal.picture} alt="" />
        </div>
      </div>
    );
  });
};

export default Meal;
