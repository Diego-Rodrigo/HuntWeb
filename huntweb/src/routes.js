import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Product from './pages/product';
import People from './pages/people';



const Routes = () => (

    <BrowserRouter>
        <Switch>
            <Route exact path = '/' component={Main} />         
            
            <Route path = '/products/:id' component={Product} />
            <Route path = '/:codigo' component={People} />
            
        </Switch>
    </BrowserRouter>

);

export default Routes;