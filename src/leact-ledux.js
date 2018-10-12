import Leact, {Component, LeactDom} from "@followwinter/leact";
import {combineReducers, applyMiddleware, createStore, subscribe} from '@followwinter/ledux'

function connect(mapStateToProps, mapDispatchToProps) {
    return (WrappedComponent) => {
        return class Control extends Component {
            constructor(props) {
                super(props)
                let store = props.store
                // 第一次初始化
                let nextProps = mapStateToProps && mapStateToProps(store.getState()) || {}
                let actions = mapDispatchToProps && mapDispatchToProps(store.dispatch) || {}
                this.state = {...nextProps, ...actions}
                subscribe(() => {
                    let nextProps = mapStateToProps && mapStateToProps(store.getState()) || {}
                    let actions = mapDispatchToProps && mapDispatchToProps(store.dispatch) || {}
                    console.log({...nextProps, ...actions})
                    this.setState({...nextProps, ...actions})
                })

            }



            componentDidMount() {

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
        children = children.map(child => {
            child.props.store = store
            return child
        })
        return children
    }
}

export default connect
export {Provider}