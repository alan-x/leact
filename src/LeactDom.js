class LeactDom {
    static render(element, container) {

        let root = LeactDom.createElement(element)
        console.log(root)
        container.append(root)
    }

    static createElement(element) {
        console.log({element})
        console.log(typeof(element) === 'string')
        if (typeof(element) === 'string') {
            return document.createTextNode(element)
        }
        let {type, props, children} = element

        const el = document.createElement(type)
        this.setProps(el, props)
        children.map((child) => {
            return LeactDom.createElement(child)
        }).forEach((child) => {
            el.append(child)
        })


        return el
    }

    static setProp(target, name, value) {
        if (name === 'className') {
            return target.setAttribute('class', value)
        }

        target.setAttribute(name, value)
    }

    static setProps(target, props) {
        Object.keys(props).forEach(key => {
            LeactDom.setProp(target, key, props[key])
        })
    }
}

export default LeactDom