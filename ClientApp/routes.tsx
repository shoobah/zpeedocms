import * as React from 'react';
import { Router, Route, HistoryBase } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Admin } from './components/Admin';

export default <Route component={ Layout }>
    <Route path='/' components={{ body: Home }} />
    <Route path='/admin' components={{ body: Admin }} />
</Route>;

// Allow Hot Module Reloading
declare var module: any;
if (module.hot) {
    module.hot.accept();
}
