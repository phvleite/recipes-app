import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RecipeCard from '../components/RecipeCard';
import RecipesContext from '../context/RecipesContext';
import fetchAPI from '../helpers/fetchAPI';

function Foods() {
  const {
    selectedOption,
    dataRecipes,
    dataReturnRecipes,
    setFunctions: { setDataRecipes, setDataCategory },
  } = useContext(RecipesContext);

  const optionSelected = selectedOption === 'fetchMealByName'
    || selectedOption === 'fetchCocktailByName';

  const isOneRecipe = optionSelected && dataRecipes.length === 1;
  // const isMoreThanOneRecipe = dataRecipes.length > 1 && optionSelected;
  const noRecipes = dataReturnRecipes === 'emptyReturn';
  const message = 'Sorry, we haven\'t found any recipes for these filters.';

  useEffect(() => {
    fetchAPI('fetchMealByName', '').then((data) => setDataRecipes(data));
    fetchAPI('fetchMealListCategory', '').then((data) => setDataCategory(data));
  }, [setDataRecipes, setDataCategory]);

  return (
    <>
      <Header title="Foods" />
      <div>
        <p>f</p>
      </div>
      <div>
        { isOneRecipe && <Redirect to={ `/foods/${dataRecipes[0].idMeal}` } /> }
        <RecipeCard />
        { noRecipes && global.alert(`${message}`) }
      </div>
      <Footer />
    </>
  );
}

export default Foods;
