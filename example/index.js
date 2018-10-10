import LeactDom from "../src/LeactDom";
import Leact from './../src/Leact'
import Component from "../src/Component";
// LeactDom.render(
//     '111',
//     document.getElementById('app')
// )

// LeactDom.render(
//     false,
//     document.getElementById('app')
// )

// LeactDom.render(
//     '',
//     document.getElementById('app')
// )

// LeactDom.render(
//     null,
//     document.getElementById('app')
// )

// LeactDom.render(
//     undefined,
//     document.getElementById('app')
// )

// LeactDom.render(
//     NaN,
//     document.getElementById('app')
// )

// LeactDom.render(
//     <div>
//         <p>this is a p</p>
//     </div>,
//     document.getElementById('app')
// )

class SmallComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
    }
    componentWillMount() {
        console.log('componentWillMount')
    }

    componentDidMount() {
        console.log('componentDidMount')
    }

    componentDidMount() {
        console.log('componentDidMount')
    }

    componentWillReceiveProps() {
        console.log('componentWillReceiveProps')
    }

    shouldComponentUpdate() {
        console.log('shouldComponentUpdate')
        return true

    }

    componentWillUpdate(nextProps, props) {

    }
    componentDidUpdate(props,preProps){

    }
    componentWillUnmount() {
        console.log('Content::componentWillUnmount')
    }

    render() {
        return (<div style={{background:'red'}}>
            <p>{this.state.value}</p>
            <input type="text" value={this.state.value} onChange={(e) => {
                this.setState({value: e.target.value})
            }}/>
        </div>)
    }

}

class App extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return <SmallComponent></SmallComponent>
    }
}

LeactDom.render(
    <App/>,
    document.getElementById('app')
)