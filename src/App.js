import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Foods from './pages/Foods';
import Drinks from './pages/Drinks';
import InProgress from './pages/InProgress';
import Nationalities from './pages/Nationalities';
import Profile from './pages/Profile';
import DoneRecipes from './pages/DoneRecipes';
import FavoriteRecipes from './pages/FavoriteRecipes';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Explore from './pages/Explore';
import ExploreFoods from './pages/ExploreFoods';
import ExploreDrinks from './pages/ExploreDrinks';
import Ingredients from './pages/Ingredients';
import recipesProvider from './context/recipesProvider';

function App() {
  return (

    <BrowserRouter>
      <Switch>
        <recipesProvider>
          <Route exact path="/" component={ Login } />
          <Route exact path="/foods" component={ Foods } />
          <Route
            exact
            path="/foods/id-da-receita:"
            render={ (props) => <Foods { ...props } /> }
          />
          <Route exact path="/drinks" component={ Drinks } />
          <Route
            exact
            path="/drinks/id-da-receita:"
            render={ (props) => <Drinks { ...props } /> }
          />
          <Route
            exact
            path="/foods/id-da-receita:/in-progress"
            render={ (props) => <InProgress { ...props } /> }
          />
          <Route
            exact
            path="/drinks/id-da-receita:/in-progress"
            render={ (props) => <InProgress { ...props } /> }
          />
          <Route exact path="/explore" component={ Explore } />
          <Route exact path="/explore/foods" component={ ExploreFoods } />
          <Route exact path="/explore/drinks" component={ ExploreDrinks } />
          <Route exact path="/explore/foods/ingredients" component={ Ingredients } />
          <Route exact path="/explore/drinks/ingredients" component={ Ingredients } />
          <Route exact path="/explore/foods/nationalities" component={ Nationalities } />
          <Route exact path="/profile" component={ Profile } />
          <Route exact path="/done-recipes" component={ DoneRecipes } />
          <Route exact path="/favorite-recipes" component={ FavoriteRecipes } />
        </recipesProvider>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
