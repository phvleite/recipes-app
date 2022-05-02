import React, { useContext } from 'react';
import RecipesContext from '../context/RecipesContext';
import '../css/RecipeCard.css';

const RecipeCard = () => {
  const { dataRecipes } = useContext(RecipesContext);

  // const magicNumber05 = 5;
  const magicNumber12 = 12;
  const dataRecipes12 = dataRecipes
    .filter((element, index) => index < magicNumber12)
    .map((element) => element);

  // const dataCategory05 = dataCategory
  //   .filter((category, ind) => ind < magicNumber05)
  //   .map((category) => category);

  // console.log(dataCategory05);

  return (
    dataRecipes12
      .map((element, index) => (
        <div
          key={ index }
          data-testid={ `${index}-recipe-card` }
          className="box-recipe-card"
        >
          <div
            data-testid={ `${index}-card-name` }
            className="box-title-recipe-card"
          >
            {element.strMeal || element.strDrink}
          </div>
          <div className="box-img-recipe-card">
            <img
              alt={ element.strMeal || element.strDrink }
              src={ element.strMealThumb || element.strDrinkThumb }
              data-testid={ `${index}-card-img` }
            />
          </div>
        </div>
      ))
  );
};

export default RecipeCard;
