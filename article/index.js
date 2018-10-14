import Leact from './../src/Leact'
import LeactDom from './../src/LeactDom'
import Component from './../src/Component'
import LRouter, {Route} from './leact-router'
import {Provider, combineReducers, applyMiddleware, createStore, subscribe} from './leact-ledux'
import reducers from "./reducer/reducers";
import App from "./page/App";


const store = createStore(
    combineReducers(reducers),
    {}
)

LeactDom.render(
    <Provider store={store}>
        <LRouter>
            <App/>
        </LRouter>
    </Provider>,
    document.getElementById('app')
)


