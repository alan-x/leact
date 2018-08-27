import LeactElement from "./LeactElement";

class Leact {
    static createElement(type, props, children) {

        let ref = null
        let self = null
        let childElement = null


        if ((typeof type == 'string') && type.constructor == String) {
            switch (type) {
                case 'p': {
                }
                case 'div': {
                    self = type
                    ref = this.createNodeElement(type)

                    if (arguments.length - 2 > 0) {
                        children = []
                        for (let i = 2; i < arguments.length; i++) {
                            children.push(arguments[i])
                        }
                        childElement = children.map((child) => {
                            if ((typeof child == 'string') && child.constructor == String) {
                                ref.append(child)
                            } else {
                                ref.append(child.ref)
                            }
                            return child
                        })
                    }
                    break
                }
                default: {
                    ref = this.createTextElement(type)
                }
            }
        } else if (type instanceof Function) {
            self = new type()
            self.props = props
            let element = self.render()
            if ((typeof element == 'string') && element.constructor == String) {
                ref = element
            } else {
                ref = element.ref
            }
            childElement = [element]

        }


        let element = new LeactElement(ref, self, childElement)

        return element

    }


    static createTextElement(type) {
        return document.createTextNode(type)
    }

    static createNodeElement(type) {
        return document.createElement(type)
    }
}

export default Leact