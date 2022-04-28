import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from './RecipesContext';
import fetchAPI from '../helpers/fetchAPI';

function RecipesProvider({ children }) {
  /*  useEffect(() => {}, []); */
  /*  const [fetchIngredients, setFetchIngredients] = useState('');
  const [fetchName, setFetchName] = useState('');
  const [fetchFirstLetter, setfetchFirstLetter] = useState(''); */

  const [search, setSearch] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [dataRecipes, setDataRecipes] = useState([]);

  async function onClick() {
    const returnAPI = await fetchAPI(selectedOption, search);
    setDataRecipes([returnAPI]);
  }

  function returnSelectedOption({ target }) {
    const { id } = target;
    setSelectedOption(id);
  }

  const contextValue = {
    search,
    setSearch,
    selectedOption,
    returnSelectedOption,
    onClick,
    dataRecipes,
  };

  return (
    <RecipesContext.Provider value={ contextValue }>
      { children }
    </RecipesContext.Provider>
  );
}

RecipesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RecipesProvider;
