import React from 'react';
import Home from '../Home/HomeContainer';
import Info from '../Info/Info';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainLayout from '../../MainLayout/MainLayout';
import List from '../List/ListContainer';
import SearchResult from '../SearchResult/SearchResult';

const App = () => (
  <BrowserRouter>
    <MainLayout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/info' component={Info} />
        <Route exact path="/list/:id" component={List} />
        <Route exact path="/search/:searchString" component= {SearchResult}/>
      </Switch>
    </MainLayout>
  </BrowserRouter>
);

export default App;