import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header';
import RecipeCard from '../components/RecipeCard';
import RecipesContext from '../context/RecipesContext';

function Foods() {
  const { selectedOption, dataRecipes } = useContext(RecipesContext);

  const optionSelected = selectedOption === 'fetchMealByName'
    || selectedOption === 'fetchCocktailByName';

  const isOneRecipe = optionSelected && dataRecipes.length === 1;
  const isMoreThanOneRecipe = dataRecipes.length > 1 && optionSelected;

  return (
    <>
      <Header title="Foods" />
      <div>
        { isOneRecipe && <Redirect to={ `/foods/${dataRecipes[0].idMeal}` } /> }
        { isMoreThanOneRecipe && <RecipeCard /> }
      </div>
    </>
  );
}

export default Foods;
