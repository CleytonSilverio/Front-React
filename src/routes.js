import React from 'react';

import {  Switch, Route} from 'react-router-dom';

import Main from './pages/main/index';
import Shows from './pages/shows/index';
import Casa from './pages/casas/index';
import AddShow from './pages/shows/addshow';

const Routes = () => (

    // <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/shows/:id" component={Shows}/>
            <Route path="/casas" component={Casa}/>
            <Route path="/addshow" component={AddShow}/>   
            <Route path="*" component={() => <h1>Página não existe</h1>} />
        </Switch>
    // </BrowserRouter>

);

export default Routes;