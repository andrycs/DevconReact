import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import ProjectIndex from './components/project_index';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={ProjectIndex} />
    </Route>
);

