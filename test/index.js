import {combineReducers, applyMiddleware, createStore, subscribe} from './../src/ledux'
import Leact, {Component, LeactDom} from "@followwinter/leact";
// import Leact from './Leact'
// import LeactDom from './LeactDom'
// import Component from './Component'

import connect, {Provider} from './../src/leact-ledux'

function counter(state = 0, action = {}) {
    switch (action.type) {
        case ACTION_INCREMENT:
            return state + 1
        case ACTION_DECREMENT:
            return state-1
        default:
            return state
    }
}


function counter2(state = 0, action = {}) {
    switch (action.type) {
        case ACTION_INCREMENT:
            return state + 1
        case ACTION_DECREMENT:
            return state-1
        default:
            return state
    }
}

const ACTION_INCREMENT = 'INCREMENT'
const ACTION_DECREMENT = 'DECREMENT'

const increment = () => {
    return {
        type: ACTION_INCREMENT
    }
}
const decrement = () => {
    return {
        type: ACTION_DECREMENT
    }
}

const before = store => storeDispatch => action => {
    console.log('before', action.type, store.getState())
    return storeDispatch(action)
}

const store = createStore(
    combineReducers({
        counter, counter2
    }),
    {},
    applyMiddleware(before)
)


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: props.counter
        }
        console.log(props)
    }

    render() {
        return (<div>
            <p>{this.state.counter || ''}</p>
            <button onClick={() => this.handleIncrement()}>+</button>
            <button onClick={() => this.handleDecrement()}>-</button>
        </div>)
    }

    componentWillReceiveProps(nextProps) {
        console.log({nextProps})
        this.setState({
            counter: nextProps.counter
        })
    }

    handleIncrement() {
        this.props.increment()
    }

    handleDecrement() {
        this.props.decrement()
    }
}

let MyApp = connect((state) => {
    return {
        counter: state.counter
    }
}, (dispatch) => {
    return {
        increment: () => dispatch(increment()),
        decrement: () => dispatch(decrement())
    }
})(App)

LeactDom.render(
    <Provider store={store}>
        <MyApp/>
    </Provider>,
    document.getElementById('app')
)




