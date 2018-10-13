// import Leact from './Leact'
// import LeactDom from './LeactDom'
// import Component from './Component'
import Leact, {Component, LeactDom} from '@followwinter/leact'

import Router from '@followwinter/Router'

class LRouter extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return this.props.children
    }
}

class Route extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isMatch: false,
            match: {},
            data: {}
        }
        Router.register(this.props.path, (isMatch, match, data) => {
            this.setState({
                isMatch, match, data
            })
        })
    }

    render() {
        return <div>
            {this.state.isMatch ? <this.props.component/> : ''}
        </div>
    }
}

class Link extends Component {
    render() {
        return <a href={this.props.to} onClick={(e) => this.handleClick(e)}>
            {this.props.children}
        </a>
    }

    handleClick(e) {
        e.preventDefault()
        Router.push(this.props.to, this.props.data || {})
    }
}

class NavLink extends Component {
    render() {

    }
}

class Redirect extends Component {
    render() {

    }
}

export default LRouter
export {Route, Link, NavLink, Redirect}