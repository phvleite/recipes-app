import React from 'react';
import PropTypes from 'prop-types';

function Explorer(props) {
  console.log(props);
  const { linkTo, history } = props;
  const isFood = linkTo === 'foods';
  console.log(history);

  const btnNationality = (
    <button
      className="btn-explore-food"
      data-testid="explore-drinks"
      type="button"
      onClick={ () => history.push('/explore/foods/nationalities') }
    >
      <div className="title-btn-explore">
        By Nationality
      </div>
      {/* <img
        src={ ExploreDrinks }
        alt="imagem comida"
      /> */}
    </button>
  );

  return (
    <div className="box-explore">
      <button
        className="btn-explore-food"
        data-testid="explore-by-ingredient"
        type="button"
        // onClick={ () => history.push(`/explore/${linkTo}/ingredients`) }
        onClick={ () => history.push('/explore/foods/ingredients') }
      >
        <div className="title-btn-explore">
          By Ingredient
        </div>
        {/* <img
          src={ ExploreFoods }
          alt="imagem comida"
        /> */}
      </button>
      { isFood && btnNationality }
      <button
        className="btn-explore-food"
        data-testid="explore-surprise"
        type="button"
        // onClick={ () => history.push('/explore/foods/nationalities') }
      >
        <div className="title-btn-explore">
          Surprise me!
        </div>
        {/* <img
          src={ ExploreDrinks }
          alt="imagem comida"
        /> */}
      </button>
    </div>
  );
}

Explorer.propTypes = {
  history: PropTypes.objectOf(),
}.isRequerid;

export default Explorer;
