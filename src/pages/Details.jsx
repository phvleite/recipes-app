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
  }, []);

  const filterIngredients = Object
    .entries(recipeDetails)
    .filter((key) => key[0].includes('strIngredient') && key[1])
    .map((e) => e[1]);
  console.log(filterIngredients);

  return recipeDetails.map((recipe) => (
    <div key={ recipe.strMeal || recipe.strDrink }>
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
    </div>
  ));
}

Details.propTypes = { history: PropTypes.objectOf() }.isRequired;

export default Details;
