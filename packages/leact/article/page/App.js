import Leact, {LeactDom, Component} from '@followwinter/leact'
import connect from "@followwinter/leact-ledux";
import {Route,Link} from '@followwinter/leact-router'

import Articles from "./article/Articles";
import Detail from "./detail/Detail";

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