import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header';
import RecipeCard from '../components/RecipeCard';
import RecipesContext from '../context/RecipesContext';
import Footer from '../components/Footer';
import fetchAPI from '../helpers/fetchAPI';

const MAGIC_NUMBER = 5;

function Drinks() {
  const {
    selectedOption,
    dataRecipes,
    dataReturnRecipes,
    setFunctions: { setDataRecipes },
  } = useContext(RecipesContext);

  const [categories, setCategories] = useState([]);

  const optionSelected = selectedOption === 'fetchMealByName'
    || selectedOption === 'fetchCocktailByName';

  const isOneRecipe = optionSelected && dataRecipes.length === 1;
  // const isMoreThanOneRecipe = dataRecipes.length > 1 && optionSelected;
  const noRecipes = dataReturnRecipes === 'emptyReturn';
  const message = 'Sorry, we haven\'t found any recipes for these filters.';

  useEffect(() => {
    fetchAPI('fetchCocktailByName', '').then((data) => setDataRecipes(data));
    fetchAPI('fetchCocktailListCategory', '').then((data) => setCategories(data));
  }, [setDataRecipes]);

  return (
    <>
      <Header title="Drinks" />
      <div className="box-filters-category">
        <ul className="list-filters-category">
          <li
            className="filter-category"
            data-testid="All-category-filter"
          >
            All
          </li>
          {
            categories.map(({ strCategory }) => (
              <li
                className="filter-category"
                key={ strCategory }
                data-testid={ `${strCategory}-category-filter` }
              >
                {strCategory }
              </li>
            )).slice(0, MAGIC_NUMBER)
          }
        </ul>
      </div>
      <div className="box-principal">
        { isOneRecipe && <Redirect to={ `/drinks/${dataRecipes[0].idDrink}` } /> }
        { <RecipeCard /> }
        { noRecipes && global.alert(`${message}`) }
      </div>
      <Footer />
    </>
  );
}

export default Drinks;
