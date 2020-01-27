import * as ledux from './../src/ledux'
import {combineReducers} from "./../src/ledux";
import {applyMiddleware} from "./../src/ledux";

function counter(state = 0, action = {}) {
    switch (action.type) {
        case ACTION_INCREMENT:
            return state + 1
        default:
            return state
    }
}


function counter2(state = 0, action = {}) {
    switch (action.type) {
        case ACTION_INCREMENT:

            return state + 1
        default:
            return state
    }
}

const ACTION_INCREMENT = 'INCREMENT'

const increment = () => {
    return {
        type: ACTION_INCREMENT
    }
}

const before = store => storeDispatch => action => {
    console.log('before', action.type, store.getState())
    return storeDispatch(action)
}

const store = ledux.createStore(
    combineReducers({
        counter, counter2
    }),
    {},
    applyMiddleware(before)
)

ledux.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(increment())

