import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header';
import RecipeCard from '../components/RecipeCard';
import RecipesContext from '../context/RecipesContext';

function Drinks() {
  const { selectedOption, dataRecipes, dataReturnRecipes } = useContext(RecipesContext);

  const optionSelected = selectedOption === 'fetchMealByName'
    || selectedOption === 'fetchCocktailByName';

  const isOneRecipe = optionSelected && dataRecipes.length === 1;
  const isMoreThanOneRecipe = dataRecipes.length > 1 && optionSelected;
  const noRecipes = dataReturnRecipes === 'emptyReturn';
  const message1 = 'Sorry, we haven';
  const message2 = 't found any recipes for these filters.';

  return (
    <>
      <Header title="Drinks" />
      <div>
        { isOneRecipe && <Redirect to={ `/drinks/${dataRecipes[0].idDrink}` } /> }
        { isMoreThanOneRecipe && <RecipeCard /> }
        { noRecipes && global.alert(`${message1}'${message2}`) }
      </div>
    </>
  );
}

export default Drinks;
