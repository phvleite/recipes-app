import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header';
import RecipesContext from '../context/RecipesContext';

function Drinks() {
  const { selectedOption, dataRecipes } = useContext(RecipesContext);

  useEffect(() => {
    console.log(dataRecipes);
  }, [dataRecipes]);

  const optionSelected = selectedOption === 'fetchMealByName'
    || selectedOption === 'fetchCocktailByName';

  const isOneRecipes = optionSelected && dataRecipes.length === 1;

  return (
    <>
      <Header title="Drinks" />
      <div>
        { isOneRecipes && <Redirect to={ `/drinks/${dataRecipes[0].idDrink}` } /> }
      </div>
    </>
  );
}

export default Drinks;
