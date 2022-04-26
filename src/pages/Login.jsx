import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Login({ history }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabledButton, setDisabledButton] = useState(true);

  function validate() {
    const pattern = /\S+@\S+\.\S+/;
    const lengthPassword = 6;

    return pattern.test(email) && password.length >= lengthPassword;
  }

  function handleChange({ target: { name, value } }) {
    if (name === 'email') {
      setEmail(value);
    } else {
      setPassword(value);
    }

    setDisabledButton(!validate());
  }

  function submitForm() {
    localStorage.mealsToken = 1;
    localStorage.cocktailsToken = 1;
    localStorage.user = JSON.stringify({ email });
    history.push('/foods');
  }

  return (
    <form>
      <input
        type="email"
        data-testid="email-input"
        name="email"
        value={ email }
        onChange={ handleChange }
      />
      <input
        type="password"
        name="password"
        data-testid="password-input"
        value={ password }
        onChange={ handleChange }
        minLength="6"
      />
      <input
        type="button"
        data-testid="login-submit-btn"
        value="Enter"
        onClick={ submitForm }
        disabled={ disabledButton }
      />
    </form>
  );
}

Login.propTypes = {
  history: PropTypes.objectOf(),
}.isRequerid;

export default Login;
