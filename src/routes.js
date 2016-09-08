'use strict';

import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout';
import IndexPage from './components/IndexPage';
// import AthletePage from './components/AthletePage';
// import NotFoundPage from './components/NotFoundPage';
    // <Route path="athlete/:id" component={AthletePage}/>
    // <Route path="*" component={NotFoundPage}/>

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={IndexPage}/>
  </Route>
);

export default routes;