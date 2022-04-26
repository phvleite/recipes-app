import React, { useState } from 'react';

function Login() {
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
      console.log('chega aqui');
    } else {
      setPassword(value);
    }

    setDisabledButton(!validate());
  }

  // const onClick = () => {

  // };

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
        // onChange={ onCLick }
        disabled={ disabledButton }
      />
    </form>
  );
}

export default Login;
