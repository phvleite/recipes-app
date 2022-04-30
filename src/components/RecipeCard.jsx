import React, { useContext } from 'react';
import RecipesContext from '../context/RecipesContext';
import '../css/RecipeCard.css';

const RecipeCard = () => {
  const { dataRecipes } = useContext(RecipesContext);

  const magicNumber12 = 12;
  const dataRecipes12 = dataRecipes
    .filter((element, index) => index < magicNumber12)
    .map((element) => element);

  return (
    dataRecipes12
      .map((element, index) => (
        <div
          key={ index }
          data-testid={ `${index}-recipe-card` }
          className="box-recipe-card"
        >
          <p
            data-testid={ `${index}-card-name` }
          >
            {element.strMeal || element.strDrink}
          </p>
          <img
            alt={ element.strMeal || element.strDrink }
            src={ element.strMealThumb || element.strDrinkThumb }
            data-testid={ `${index}-card-img` }
          />
        </div>
      ))
  );
};

export default RecipeCard;
