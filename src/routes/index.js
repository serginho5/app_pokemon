import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Search from '../pages/Search';
import ResultSearch from '../pages/ResultSearch';
import PokemonDetail from '../pages/PokemonDetail';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Search} />
    <Route path="/resultsearch" component={ResultSearch} />
    <Route path="/pokemondetail" component={PokemonDetail} />
  </Switch>
);

export default Routes;
