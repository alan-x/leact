import Router, {Route, Link} from './../index'
import Leact, {Component, LeactDom} from '@followwinter/leact'
// import Leact from './../src/Leact'
// import LeactDom from './../src/LeactDom'
// import Component from './../src/Component'
//
class Mine extends Component {
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
            <p>leact-router</p>
            <hr/>
            <Link to='/article'>文章列表</Link>
            <Link to='/mine'>个人中心</Link>
            <hr/>
            <Route path='/article' component={Article}/>
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