import LeactDom from "../src/LeactDom";
import Leact from './../src/Leact'
import Component from "../src/Component";
// 数字
// LeactDom.render(
//     '111',
//     document.getElementById('app')
// )
// 布尔
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

// 容器组件
// class App extends Component {
//     render() {
//         return this.props.children
//     }
// }
//
// LeactDom.render(
//     <App>
//         fuck2
//     </App>,
//     document.getElementById('app')
// )


// class App extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             isMatch: true
//         }
//         setInterval(() => {
//             this.setState({
//                 isMatch:!this.state.isMatch
//             })
//         },2000)
//     }
//
//     render() {
//         return this.state.isMatch?'match':'no match'
//     }
// }
//
// LeactDom.render(
//     <App/>,
//     document.getElementById('app')
// )


// 高阶组件
const connect = (WrappedComponent) => {
    return class Control extends Component {
        constructor(props) {
            super(props)
            this.state = {
                name: 1,
            }
            setInterval(() => {
                this.setState({
                    name: ++this.state.name
                })
            }, 2000)

        }

        componentWillReceiveProps(nextProps) {

        }

        render() {
                return <WrappedComponent {...this.state}/>
        }
    }
}

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: this.props.name
        }
    }

    render() {
        return <p>{this.state.name || ''}</p>
    }

    componentWillReceiveProps(nextProps, state) {
        // console.log('componentWillReceiveProps',nextProps)
        this.setState({
            name: nextProps.name
        })
    }
}

let MyApp = connect(App)
LeactDom.render(
    <MyApp/>,
    document.getElementById('app')
)

// class Article extends Component {
//     render() {
//         return 'article'
//     }
// }
//
// class App extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             isMatch: true
//         }
//
//         setTimeout(() => {
//             this.setState({
//                 isMatch: !this.state.isMatch
//             })
//             setTimeout(() => {
//                 this.setState({
//                     isMatch: !this.state.isMatch
//                 })
//                 setTimeout(() => {
//                     this.setState({
//                         isMatch: !this.state.isMatch
//                     })
//                 }, 2000)
//                 console.log('---')
//             }, 2000)
//             console.log('---')
//         }, 2000)
//     }
//
//     render() {
//         return <div>
//             {
//                 this.state.isMatch ? 'no match' : <Article/>
//             }
//         </div>
//     }
// }
//
// LeactDom.render(
//     <App/>,
//     document.getElementById('app')
// )
// console.log('---')


// 双向绑定
// class SmallComponent extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             value: ''
//         }
//     }
//
//     componentWillMount() {
//     }
//
//     componentDidMount() {
//     }
//
//     componentDidMount() {
//     }
//
//
//     componentWillReceiveProps(nextProps, state) {
//         this.setState({
//             value: nextProps.value
//         })
//     }
//
//     shouldComponentUpdate() {
//         return true
//
//     }
//
//     componentWillUpdate(nextProps, props) {
//
//     }
//
//     componentDidUpdate(props, preProps) {
//
//     }
//
//     componentWillUnmount() {
//     }
//
//     render() {
//         return (<div style={{background: 'red'}}>
//             <p>{this.state.value}</p>
//         </div>)
//     }
//
// }
//
// class App extends Component {
//
//     constructor(props) {
//         super(props)
//         this.state = {
//             value: ''
//         }
//     }
//
//     render() {
//         return <div>
//             <SmallComponent value={this.state.value}></SmallComponent>
//             <input type="text" value={this.state.value} onChange={(e) => {
//                 this.setState({value: e.target.value})
//             }}/>
//         </div>
//     }
// }
//
// LeactDom.render(
//     <App/>,
//     document.getElementById('app')
// )