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
        if (!this.shouldComponentUpdate(this.props, next)) {
            return
        }
        this.state = next
        callback && callback(this.state)
        LeactDom.patch(this.$$element, this.render())
        this.componentDidUpdate(this.props, next);
    }

    componentWillMount() {
    }

    componentDidMount() {
    }

    componentDidMount() {
    }

    componentWillReceiveProps(nextProps, state) {
    }

    shouldComponentUpdate(props, state) {
        return true

    }

    componentWillUpdate(nextProps, props) {

    }

    componentDidUpdate(props, preProps) {

    }

    componentWillUnmount() {
    }
}

export default Component