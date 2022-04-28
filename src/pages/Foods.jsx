import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import RecipesContext from '../context/RecipesContext';

function Foods() {
  const { selectedOption } = useContext(RecipesContext);

  useEffect(() => {
    console.log(selectedOption);
  }, [selectedOption]);

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
