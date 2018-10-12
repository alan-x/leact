class Router {
    static beforeHook(before) {
        window.Router.before = before
    }

    static afterHook(after) {
        window.Router.after = after
    }

    static init() {
        this.push(window.location.pathname)
    }

    static register(path, callback) {
        let unregister = () => {
            delete window.Router.callbackMap[path]
        }
        window.Router.callbackMap[path] = callback
        return unregister
    }

    static push(path, data = {}) {
        window.Router.match = {
            path, data
        }
        //['detail','1']
        window.Router.before(path, data, window.Router.match)
        let pathReal = path.split('/')
        Object.keys(window.Router.callbackMap).forEach(key => {
            let isMatch = false

            if (!key.includes(':') && key === path) {
                isMatch = true
            } else {
                // ['detail',':id']
                let pathPattern = key.split('/')
                if (pathPattern.length !== pathReal.length) {
                    isMatch = false
                } else {
                    let tempMatch = false
                    while (pathPattern.length) {
                        let pathPatternTmep = pathPattern.pop()
                        let pathRealtemp = pathReal.pop()
                        if (pathPatternTmep === pathRealtemp) {
                            tempMatch = true
                        } else if (pathPatternTmep.includes(':')) {
                            window.Router.match = {
                                ...window.Router.match,
                                params: {[pathPatternTmep.replace(':', '')]: pathRealtemp}
                            }
                            tempMatch = true
                        }
                        tempMatch == false
                        break
                    }
                    isMatch = tempMatch
                }
            }
            window.history.pushState(data, '', path)
            window.Router.callbackMap[key](isMatch, window.Router.match, data || {})
        })

        window.Router.after(window.Router.match)
    }
}

window.Router = {}
window.Router.callbackMap = {}
window.Router.match = {
    path: '',
    data: {}
}
window.Router.before = () => {
}
window.Router.after = () => {
}

export default Router