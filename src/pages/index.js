import './page'
import React from 'react'
import ReactDom from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import { createHashHistory } from 'history'
import objectAssign from 'object-assign'
import { connect, Provider } from 'react-redux'
import configureStore from 'app/store/configureStore'
import { syncHistoryWithStore } from 'react-router-redux'

import Home from 'react-proxy?name=home!./home'
import Before from 'react-proxy?name=home!./before'
import After from './after'

Object.assign = objectAssign

const routes = history => (
    <Router history={history}>
        <Route path="/" component={Home} />
        <Route path="/before" component={Before}></Route>
        <Route path="/after" component={After}></Route>
        <Route path="*" component={Home} />
    </Router>
)

const store = configureStore(browserHistory)
const history = syncHistoryWithStore(browserHistory, store)

ReactDom.render(
    <Provider store={store}>
        {routes(history)}
    </Provider>, document.getElementById('app')
)
