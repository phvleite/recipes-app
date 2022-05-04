import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Explorer from '../components/Explorer';

function ExploreFoods() {
  return (
    <>
      <Header title="Explore Foods" />
      <Explorer linkTo="foods" />
      <Footer />
    </>
  );
}

export default ExploreFoods;
