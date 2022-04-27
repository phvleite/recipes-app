import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import recipesContext from './recipesContext';
import fetchByCategories from '../helpers/fetchByCategories';

function recipesProvider({ children }) {
  /*  useEffect(() => {}, []); */
  /*  const [fetchIngredients, setFetchIngredients] = useState('');
  const [fetchName, setFetchName] = useState('');
  const [fetchFirstLetter, setfetchFirstLetter] = useState(''); */

  const [selectedOption, setSelectedOption] = useState('');

  function returnSelectedOption(id) {
    console.log(id);
  }

  const contextValue = {
    returnSelectedOption,
  };

  return (
    <recipesContext.Provider value={ contextValue }>
      { children }
    </recipesContext.Provider>
  );
}

recipesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default recipesProvider;
