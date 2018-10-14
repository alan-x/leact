import Leact from './../src/Leact'
import LeactDom from './../src/LeactDom'
import Component from './../src/Component'
import {combineReducers, applyMiddleware, createStore, subscribe} from './ledux'

function connect(mapStateToProps, mapDispatchToProps) {
    return (WrappedComponent) => {
        return class Control extends Component {
            constructor(props) {
                super(props)

                this.store = window.Store
                // 第一次初始化
                let nextProps = mapStateToProps && mapStateToProps(this.store.getState()) || {}
                let actions = mapDispatchToProps && mapDispatchToProps(this.store.dispatch) || {}
                this.state = {...nextProps, ...actions}
            }

            componentDidMount() {
                this.unSub = subscribe(() => {
                    let nextProps = mapStateToProps && mapStateToProps(this.store.getState()) || {}
                    let actions = mapDispatchToProps && mapDispatchToProps(this.store.dispatch) || {}
                    this.setState({...nextProps, ...actions})
                })
            }

            componentWillUnmount() {
                // this.unSub()
            }

            render() {
                return <WrappedComponent {...this.state}/>
            }
        }
    }
}

class Provider extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let {store, children} = this.props
        window.Store = this.props.store

        children = children.map(child => {
            child.props.store = store
            return child
        })
        return children
    }
}

export default connect
export {Provider, combineReducers, applyMiddleware, createStore, subscribe}