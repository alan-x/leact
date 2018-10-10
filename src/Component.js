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
        this.state = {...this.state, ...data}
        callback && callback(this.state)
        LeactDom.patch(this.$$element,this.render())
    }
}

export default Component