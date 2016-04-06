import React     from 'react';
import {Route, Redirect}   from 'react-router';
import App       from './components/App';
import Home      from './components/Home';
import Servers   from './components/Servers';
import Indexes   from './components/Indexes';
import Types     from './components/Types';
import Documents from './components/Documents';

export default (
  <Route component={App}>
    <Route path='/' component={Servers} />
    <Route path='/servers/:serverid' component={Indexes} />
    <Route path='/servers/:serverid/indexes/:indexid' component={Types} />
    <Route path='/servers/:serverid/indexes/:indexid/types/:typeid' component={Documents} />

    <Redirect from="/servers" to="/" />
    <Redirect from="/servers/:serversid/indexes" to="/servers/:serversid" />
    <Redirect from="/servers/:serversid/indexes/:indexid/types" to="/servers/:serversid/indexes/:indexid" />
    <Redirect from="/servers/:serversid/indexes/:indexid/types/:typeid/documents" to="/servers/:serversid/indexes/:indexid/types/:typeid" />
  </Route>
)
