class LeactDom {
    static render(vdom, parent = null) {
        console.log('render', vdom, [parent])
        if (['string', 'number'].includes(typeof vdom)) {
            return parent.appendChild(document.createTextNode(vdom))
        }

        if (typeof vdom === 'object' && typeof vdom.type === 'string') {
            let newElement = document.createElement(vdom.type)
            this.mapPropsToAttribute(vdom.props, newElement)
            vdom.children.forEach((child) => {
                this.render(child, newElement)
            })
            parent.appendChild(newElement)
            return newElement
        }

        if (typeof vdom === 'object' && typeof vdom.type === 'function') {
            let component = new vdom.type(vdom.props)
            let v = component.render()
            component.$$element = this.render(v, parent)
            component.$$element.$$component = component
            return component.$$element
        }

        throw `could not find this type of vdom: ${vdom}`
    }

    static patch(dom, vdom, parent = dom.parentNode) {
        console.log('patch', [dom], vdom, [parent])
        // 都是字符串, 改变内容就好了
        if (dom.nodeType === 3 && typeof vdom === 'string' && dom !== vdom) {
            dom.textContent = vdom
            return
        }
        // 原本是字符串, 但是新的不是字符串
        if (dom.nodeType === 3 && typeof vdom === 'object' && typeof vdom.type === 'string') {
            parent.replaceChild(this.render(vdom, parent), dom)
            return
        }

        if (dom.nodeType === 1 && typeof vdom === 'object' && typeof vdom.type === 'string') {
            if (dom.nodeName.toLowerCase() !== vdom.type) {
                parent.replaceChild(this.render(vdom, parent), dom)
                return
            }
            let len = Math.max(dom.children.length, vdom.children.length)
            for (let i = 0; i < len; i++) {
                this.patch(dom.childNodes[i], vdom.children[i], dom)
                return
            }

        }

    }

    static mapPropsToAttribute(props, element) {
        Object.keys(props).forEach((key) => {
            let newKey=key
            if (key === 'onChange') {
                newKey='oninput'
            }
            element[newKey.toLowerCase()] = props[key]
        })
    }
}

export default LeactDom