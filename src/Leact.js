import LeactElement from "./LeactElement";

class Leact {
    static flatten(arr) {
        return [].concat(...arr)
    }

    static createElement(type, props, ...children) {
        if (typeof(type) === 'string') {
            return new LeactElement(type, props, Leact.flatten(children))
        } else if (type instanceof Function) {
            type = new type()
            type.props = props
            let comp = type.render()
            return comp
        }
    }

}

export default Leact