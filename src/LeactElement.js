class LeactElement {

    type = null
    props = null
    children = null

    constructor(type, props, children) {
        this.type = type
        this.props = props || {}
        this.children = children
    }


}

export default LeactElement