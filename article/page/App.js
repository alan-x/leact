import Leact from './../../src/Leact'
import LeactDom from './../../src/LeactDom'
import Component from './../../src/Component'
import Router, {Route, Link, withRouter} from './../leact-router'
import Articles from "./article/Articles";
import Detail from "./detail/Detail";
import connect from "../leact-ledux";

class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div>
            <Link to='/article'>文章</Link>|<Link to='/article/1'>文章详情</Link>
            <hr/>
            <Route path='/article' component={Articles}/>
            <Route path='/article/:id' component={Detail}/>
        </div>
    }
}

export default App