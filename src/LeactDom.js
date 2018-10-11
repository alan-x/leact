class LeactDom {

    static render(vDom, parent = null) {
        console.log('render', vDom)
        /*
        如果 vDom 是空的
        就啥都不干
        直接返回
         */
        if (null === vDom) {
            return
        }
        /*
        如果 vDom 是字符串和数字
        就创建文本节点
        因为是字符串和数字
        不可能会有子节点
        如果传入了父元素
        就直接挂在到父元素上
         */

        if (['string', 'number'].includes(typeof vDom)) {
            let element = document.createTextNode(vDom)
            element.$$vDom = vDom
            parent && parent.appendChild(element)
            return element

        }
        /*
        如果 vDom 对象, vDom.type 是字符串
        说明是 html 标签
        就创建节点
        并渲染属性到节点
        同时渲染子元素
        如果传入了父元素
        就直接挂在到父元素上
         */
        if (typeof vDom === 'object' && typeof vDom.type === 'string') {

            let element = document.createElement(vDom.type)
            element.$$vDom = vDom

            this.mapPropsToAttribute(vDom.props, element)
            vDom.props.children = vDom.children
            vDom.children.forEach((child) => {
                this.render(child, element)
            })
            parent && parent.appendChild(element)
            return element
        }
        /*
        如果 vDom 是对象, 并且 vDom.type 是函数
        说明是组件
        就调用组件的 render 方法
        和相关的声明周期
         */
        if (typeof vDom === 'object' && typeof vDom.type === 'function') {
            console.log('fuction')
            // 组件的 construct 调用
            let component = new vDom.type(vDom.props)
            component.componentWillMount()
            component.props.children=vDom.children
            let compVDom = component.render()
            let element = this.render(compVDom, parent)
            component.$$element = element
            component.componentDidMount()
            component.$$element.$$component = component
            component.$$element.$$vDom = compVDom
            return element
        }
        if (Array.isArray(vDom)) {
            let children=[]
            vDom.forEach((v) => {
                children[children.length]=this.render(v, parent)
            })
            return children
        }

        throw `could not find this type of vDom: ${vDom}`
    }

    static patch(dom, vDom, parent = dom.parentNode) {
        // console.log('patch', [dom], vDom, [parent])
        // 创建
        if (dom === undefined) {
            this.render(vDom, parent)
            return
        }
        // 删除
        if (vDom === undefined) {
            dom.remove()
            return
        }
        // 更新 都是字符串, 改变内容就好了
        if (dom.nodeType === 3 && typeof vDom === 'string' && dom !== vDom) {
            dom.textContent = vDom
            return
        }
        // 更新 原本是字符串, 但是新的不是字符串
        if (dom.nodeType === 3 && typeof vDom === 'object' && typeof vDom.type === 'string') {
            parent.replaceChild(this.render(vDom), dom)
            return
        }
        // 更新 原本是对象, 新的也是对象, 并且是 html 元素
        if (dom.nodeType === 1 && typeof vDom === 'object' && typeof vDom.type === 'string') {
            // console.log('patch2', [dom], vDom, [parent])
            // 如果两个类型不相同
            if (dom.nodeName.toLowerCase() !== vDom.type) {
                let element = this.render(vDom)
                vDom.$$element = element
                parent.replaceChild(element, dom)
                return
            }
            this.mapPropsToAttribute(vDom.props, dom)
            let len = Math.max(dom.children.length, vDom.children.length)
            for (let i = 0; i < len; i++) {
                this.patch(dom.childNodes[i], vDom.children[i], dom)
            }
            return
        }
        // 更新 原本是对象, 新的也是对象, 并且是组件
        if (dom.nodeType === 1 && typeof vDom === 'object' && typeof vDom.type === 'function') {
            let component = dom.$$component
            let next = vDom && vDom.props || {}
            component.componentWillUpdate()
            component.componentWillReceiveProps(next, component.state)
            component.componentDidUpdate()
            return
        }
        throw 'error'

    }

    static mapPropsToAttribute(props, element) {
        Object.keys(props).forEach((key) => {
            // 处理 onchange 为 oninput
            if (key === 'style') {
                let style = props[key]
                Object.keys(style).forEach(s => {
                    element.style[s] = style[s]
                })
                // 处理 className
            } else if (key === 'className') {
                element.className = props[key]
                // 处理事件绑定
            } else if (key.startsWith('on')) {
                let newKey = key
                // 处理 onchange 为 oninput
                if (key === 'onChange') {
                    newKey = 'oninput'
                }
                element[newKey.toLowerCase()] = props[key]
            } else if (key === 'children') {
            }
            else {
                element[key.toLowerCase()] = props[key]
            }
        })
    }
}

export default LeactDom