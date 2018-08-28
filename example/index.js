import LeactDom from "../src/LeactDom";
import Leact from "../src/Leact";
import Component from "../src/Component";

class Detail extends Component {
    render() {
        return <p>{this.props.content}</p>
    }
}

class Title extends Component {
    render() {
        return <p>{this.props.title}</p>
    }
}

class App extends Component {
    constructor() {
        super()
    }

    render() {
        return <div>
            <Title title={this.props.title}></Title>
            <Detail content={this.props.content}></Detail>
        </div>
    }
}

LeactDom.render(
    <App title={"leact"} content={"i am leact"}/>,
    document.getElementById('app')
)