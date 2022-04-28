import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header';
import RecipesContext from '../context/RecipesContext';

function Foods() {
  const { selectedOption, dataRecipes } = useContext(RecipesContext);

  useEffect(() => {
    console.log(dataRecipes);
  }, [dataRecipes]);

  const optionSelected = selectedOption === 'fetchMealByName'
    || selectedOption === 'fetchCocktailByName';

  const isOneRecipes = optionSelected && dataRecipes.length === 1;

  return (
    <>
      <Header title="Foods" />
      <div>
        { isOneRecipes && <Redirect to={ `/foods/${dataRecipes[0].idMeal}` } /> }
      </div>
    </>
  );
}

export default Foods;
