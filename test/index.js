import Router, {Route, Link} from './../index'
// import Leact, {Component, LeactDom} from '@followwinter/leact'
import Leact from './../src/Leact'
import LeactDom from './../src/LeactDom'
import Component from './../src/Component'

//
class Mine extends Component {

    constructor(props) {
        super(props)
        console.log('constructor')
    }

    componentDidMount() {
        super.componentDidMount();
        console.log('componentDidMount')

    }


    componentWillReceiveProps(nextProps, state) {
        super.componentWillReceiveProps(nextProps, state);
        console.log('componentWillReceiveProps')
    }

    render() {
        return <p>mine</p>
    }
}

class Article extends Component {
    render() {
        return <p>article</p>
    }
}

class App extends Component {
    render() {
        return <div>
            <Link to='/mine'>个人中心</Link>
            <Route path='/mine' component={Mine}/>
        </div>
    }
}

LeactDom.render(
    <Router>
        <App/>
    </Router>,
    document.getElementById('app')
)