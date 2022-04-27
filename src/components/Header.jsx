import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import ProfileIcon from '../images/profileIcon.svg';
import SearchIcon from '../images/searchIcon.svg';
import recipesContext from '../context/recipesContext';

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

  const contextValue = useContext(recipesContext);

  const [search, setSearch] = useState('');
  const [hideSearch, setHideSearch] = useState(false);

  pagesTitle.forEach((pages) => {
    if (pages === title) {
      isRend = false;
    }
  });

  return (
    <header>
      {console.log(contextValue)}
      <div>
        <Link exact to="/profile">
          <img src={ ProfileIcon } alt="icone perfil" data-testid="profile-top-btn" />
        </Link>
      </div>
      <div data-testid="page-title">{ title }</div>
      <div>
        {
          isRend
          && (
            <button
              type="button"
              onClick={ () => setHideSearch(!hideSearch) }
            >
              <img
                src={ SearchIcon }
                alt="icone perfil"
                data-testid="search-top-btn"
              />
            </button>)
        }
      </div>
      <div>
        {
          (hideSearch)
            ? (
              <>
                <input
                  type="text"
                  name="search"
                  data-testid="search-input"
                  value={ search }
                  onChange={ ({ target: { value } }) => setSearch(value) }
                />
                <div>
                  <label htmlFor="ingrediente">
                    <input
                      type="radio"
                      name="search"
                      id="ingrediente"
                      data-testid="ingredient-search-radio"
                      onChange={ ({ target: { id } }) => returnSelectedOption(id) }
                    />
                    Ingrediente
                  </label>
                  <label htmlFor="nome">
                    <input
                      type="radio"
                      name="search"
                      id="nome"
                      data-testid="name-search-radio"
                      onChange={ ({ target: { id } }) => returnSelectedOption(id) }
                    />
                    Nome
                  </label>
                  <label htmlFor="primeiraLetra">
                    <input
                      type="radio"
                      name="search"
                      id="primeiraLetra"
                      data-testid="first-letter-search-radio"
                      onChange={ ({ target: { id } }) => returnSelectedOption(id) }
                    />
                    Primeira Letra
                  </label>
                  <button type="button" data-testid="exec-search-btn">Search</button>
                </div>
              </>
            )
            : ''
        }
      </div>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
