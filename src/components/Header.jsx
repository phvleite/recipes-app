import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import ProfileIcon from '../images/profileIcon.svg';
import SearchIcon from '../images/searchIcon.svg';

const Header = (props) => {
  const { title } = props;
  let isRend = true;
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

  pagesTitle.forEach((pages) => {
    if (pages === title) {
      isRend = false;
    }
  });

  return (
    <header>
      <div>
        <Link exact to="/profile">
          <img src={ ProfileIcon } alt="icone perfil" data-testid="profile-top-btn" />
        </Link>
      </div>
      <div data-testid="page-title">{ title }</div>
      <div>
        { isRend
          && <img src={ SearchIcon } alt="icone perfil" data-testid="search-top-btn" /> }
      </div>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
