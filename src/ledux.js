class Ledux {

}

Ledux.prototype.state
Ledux.prototype.callbackList = []

function compose(...funcs) {
    if (funcs.length === 0) {
        return arg => arg
    }

    if (funcs.length === 1) {
        return funcs[0]
    }

    return funcs.reduce((a, b) => (...args) => a(b(...args)))
}


function calculateState(reducers, action) {
    if (typeof reducers === 'object') {
        Object.keys(reducers).forEach(reducer => {
            console.log(reducer)
            Ledux.prototype.state[reducer] = reducers[reducer](Ledux.prototype.state[reducer], action)
        })
        return
    } else if (typeof reducers === 'function') {
        Ledux.prototype.state = reducers(Ledux.prototype.state, action)
        return
    }
    throw 'error typeof reducer:' + typeof reducers
}

function createStore(reducers, initState = {}, enhance) {
    Ledux.prototype.state = initState
    if (typeof enhance === 'function') return enhance(createStore)(reducers, initState)

    calculateState(reducers)

    return {
        dispatch: (action, callback) => {
            calculateState(reducers, action)
            callback && callback(Ledux.prototype.state)
            Ledux.prototype.callbackList.forEach(callback => {
                callback()
            })
        },
        getState: () => Ledux.prototype.state
    }
}

function combineReducers(reducers) {
    return reducers
}


function subscribe(callback) {
    let index = Ledux.prototype.callbackList.length
    Ledux.prototype.callbackList.push(callback)
    return () => {
        Ledux.prototype.callbackList.splice(index, 1)
    }
}

function applyMiddleware(...middlewares) {
    return createStore => (...args) => {
        const store = createStore(...args)
        let dispatch = () => {
        }

        const middlewareAPI = {
            getState: store.getState,
            dispatch: (...args) => dispatch(...args)
        }

        const chain = middlewares.map(middleware => middleware(middlewareAPI))
        dispatch = compose(...chain)(store.dispatch)

        return {
            ...store,
            dispatch
        }
    }
}


export {
    createStore,
    combineReducers,
    subscribe,
    applyMiddleware
}