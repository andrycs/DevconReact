import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import ProjectIndex from './components/project_index';
import ProjectShow from './components/project_show';
import ProjectSearch from './containers/project_search';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={ProjectIndex} />
        <Route path="/projects/search" component={ProjectSearch} />
        <Route path="/projects/:id" component={ProjectShow} />
    </Route>
);

