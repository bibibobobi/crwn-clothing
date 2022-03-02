import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './Sass/App.scss';

import HomePage from './pages/hompage.component';
import ShopPage from './pages/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up.component';
import Header from './components/header.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
