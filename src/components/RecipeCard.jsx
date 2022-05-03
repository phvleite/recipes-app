import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';
import '../css/RecipeCard.css';

const RecipeCard = ({ recipeType }) => {
  const { dataRecipes } = useContext(RecipesContext);

  const magicNumber12 = 12;
  const dataRecipes12 = dataRecipes
    .filter((element, index) => index < magicNumber12)
    .map((element) => element);

  const idRecipeType = (recipeType === 'foods') ? 'idMeal' : 'idDrink';

  return (
    dataRecipes12
      .map((element, index) => (
        <div
          key={ index }
          data-testid={ `${index}-recipe-card` }
          className="box-recipe-card"
        >
          <Link to={ `/${recipeType}/${element[idRecipeType]}` }>
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
          </Link>
        </div>
      ))
  );
};

export default RecipeCard;
