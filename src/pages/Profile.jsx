import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Profile() {
  const [email, setEmail] = useState('');

  useEffect(() => setEmail(JSON.parse(localStorage.user).email), []);

  return (
    <>
      <Header title="Profile" />
      <h3 data-testid="profile-email">{ email }</h3>
      <button type="button">Click Me!</button>
      <button
        type="button"
        data-testid="profile-done-btn"
      >
        Done Recipes
      </button>
      <button
        type="button"
        data-testid="profile-favorite-btn"
      >
        Favorite Recipes
      </button>
      <button
        type="button"
        data-testid="profile-logout-btn"
      >
        Logout
      </button>
      <Footer />
      { console.log(email) }
    </>
  );
}

export default Profile;
