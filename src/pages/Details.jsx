import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchAPI } from '../helpers/fetchAPI';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

function Details({ history }) {
  const [recipeDetails, setRecipeDetails] = useState([{}]);

  const { location: { pathname } } = history;
  const url = pathname.split('/').slice(1);
  const recipeType = (url[0] === 'foods') ? 'Meal' : 'Cocktail';

  useEffect(() => {
    fetchAPI(`fetch${recipeType}ById`, url[1]).then((arr) => setRecipeDetails(arr));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filterIngredients = Object
    .entries(recipeDetails[0])
    .filter((key) => key[0].includes('strIngredient') && key[1])
    .map((e) => e[1]);

  const filterMeasures = Object
    .entries(recipeDetails[0])
    .filter((key) => key[0].includes('strMeasure') && key[1])
    .map((e) => e[1]);

  return recipeDetails.map((recipe) => (
    <div key="recipe">
      <img
        data-testid="recipe-photo"
        alt={ recipe.strMeal || recipe.strDrink }
        src={ recipe.strMealThumb || recipe.strDrinkThumb }
      />
      <h1 data-testid="recipe-title">
        { recipe.strMeal || recipe.strDrink }
      </h1>
      <button
        type="button"
        data-testid="share-btn"
      >
        <img src={ shareIcon } alt="share button" />
      </button>
      <button
        type="button"
        data-testid="favorite-btn"
      >
        <img src={ whiteHeartIcon } alt="favorite button" />
      </button>
      <h3 data-testid="recipe-category">
        { recipe.strCategory }
      </h3>
      <ol>
        {
          filterIngredients.map((ingredient, index) => (
            <li
              key={ `${index}${ingredient}` }
              data-testid={ `${index}-ingredient-name-and-measure` }
            >
              {`${ingredient} - ${filterMeasures[index]}`}
            </li>
          ))
        }
      </ol>
      <span data-testid="instructions">
        { recipe.strInstructions }
      </span>
      {
        (recipe.strYoutube)
        && (<iframe
          width="360"
          height="240"
          data-testid="video"
          title={ recipe.strMeal || recipe.strDrink }
          src={ `https://www.youtube.com/embed/${recipe.strYoutube.split('=')[1]}` }
        />)
      }
      <div>
        <div data-testid="0-recomendation-card">recomendações</div>
      </div>
      <button type="button" data-testid="start-recipe-btn">
        Start Recipe
      </button>
    </div>
  ));
}

Details.propTypes = { history: PropTypes.objectOf() }.isRequired;

export default Details;
