import React from 'react';
// import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import '../css/Footer.css';
// import RecipesContext from '../context/RecipesContext';

const Footer = (props) => {
  const { title } = props;
  const isRend = true;
  const pagesTitle = [
    'Explore',
    'Explore Foods',
    'Explore Drinks',
    'Explore Ingredients',
    'Ingredients',
    'Done Recipes',
    'Favorite Recipes',
    'Profile',
  ];

  console.log(isRend, pagesTitle, title);

  return (
    <footer
      data-testid="footer"
      className="box-footer"
    >
      <div>
        <img src={ drinkIcon } alt="icone drinks" data-testid="drinks-bottom-btn" />
      </div>
      <div>
        <img src={ exploreIcon } alt="icone explorar" data-testid="explore-bottom-btn" />
      </div>
      <div>
        <img src={ mealIcon } alt="icone meals" data-testid="food-bottom-btn" />
      </div>
    </footer>
  );
};

Footer.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Footer;
