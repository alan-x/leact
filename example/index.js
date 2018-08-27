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
    render() {
        return <div>
            <Title title={this.props.title}></Title>
            <Detail content={this.props.content}></Detail>
        </div>
    }
}
console.log(<App title="leact" content="i am leact"></App>)

LeactDom.render(
    <App title="leact" content="i am leact"></App>,
    document.getElementById('app')
)