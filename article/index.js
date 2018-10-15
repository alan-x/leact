import Leact, {LeactDom, Component} from '@followwinter/leact'
import {Provider, combineReducers, applyMiddleware, createStore, subscribe} from '@followwinter/leact-ledux'
import Router, {Route} from '@followwinter/leact-router'
import reducers from "./reducer/reducers";
import App from "./page/App";


const store = createStore(
    combineReducers(reducers),
    {}
)

LeactDom.render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>,
    document.getElementById('app')
)


