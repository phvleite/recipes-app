import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import RecipesContext from '../context/RecipesContext';

function Foods() {
  const { selectedOption, dataRecipes } = useContext(RecipesContext);

  useEffect(() => {
    console.log(dataRecipes);
  }, [dataRecipes]);

  return (
    <>
      <Header title="Foods" />
      <div>Foods</div>
      <div>
        A escolha foi:
        {' '}
        { selectedOption }
      </div>
    </>
  );
}

export default Foods;
