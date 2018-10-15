window.Ledux = {}
window.Ledux.state
window.Ledux.callbackList = []

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
            window.Ledux.state[reducer] = reducers[reducer](window.Ledux.state[reducer], action)
        })
        return
    } else if (typeof reducers === 'function') {
        window.Ledux.state = reducers(window.Ledux.state, action)
        return
    }
    throw 'error typeof reducer:' + typeof reducers
}

function createStore(reducers, initState = {}, enhance) {
    window.Ledux.state = initState
    if (typeof enhance === 'function') return enhance(createStore)(reducers, initState)

    calculateState(reducers)

    return {
        dispatch: (action, callback) => {
            calculateState(reducers, action)
            callback && callback(window.Ledux.state)
            window.Ledux.callbackList.forEach(callback => {
                callback()
            })
        },
        getState: () => window.Ledux.state
    }
}

function combineReducers(reducers) {
    return reducers
}


function subscribe(callback) {
    let index = window.Ledux.callbackList.length
    window.Ledux.callbackList.push(callback)
    return () => {
        window.Ledux.callbackList.splice(index, 1)
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