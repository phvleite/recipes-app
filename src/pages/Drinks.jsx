import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header';
import RecipeCard from '../components/RecipeCard';
import RecipesContext from '../context/RecipesContext';

function Drinks() {
  const { selectedOption, dataRecipes } = useContext(RecipesContext);

  const optionSelected = selectedOption === 'fetchMealByName'
    || selectedOption === 'fetchCocktailByName';

  const isOneRecipe = optionSelected && dataRecipes.length === 1;
  const isMoreThanOneRecipe = dataRecipes.length > 1 && optionSelected;

  console.log(dataRecipes);

  return (
    <>
      <Header title="Drinks" />
      <div>
        { isOneRecipe && <Redirect to={ `/drinks/${dataRecipes[0].idDrink}` } /> }
        { isMoreThanOneRecipe && <RecipeCard /> }
      </div>
    </>
  );
}

export default Drinks;
