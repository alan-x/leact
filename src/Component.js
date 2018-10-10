import LeactDom from "./LeactDom";

class Component {
    constructor(props) {
        this.props = props;
        this.state = {};
    }

    render() {
        throw 'component must contain render()'
    }

    setState(data, callback) {
        let next = {...this.state, ...data}
        // this.componentWillUpdate(this.props, next);
        this.state = next
        callback && callback(this.state)
        LeactDom.patch(this.$$element, this.render())
        // this.componentDidUpdate(this.props, prevState);

    }

    componentWillMount() {
    }

    componentDidMount() {
    }

    componentDidMount() {
    }

    componentWillReceiveProps() {
    }

    shouldComponentUpdate() {
        return true

    }

    componentWillUpdate(nextProps, props) {

    }
    componentDidUpdate(props,preProps){

    }
    componentWillUnmount() {
    }
}

export default Component