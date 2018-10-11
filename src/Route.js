class Route {
    static callbackMap = {}
    static match = {
        path: '',
        data: {}
    }
    static before = () => {
    }
    static after = () => {
    }


    static beforeHook(before) {
        this.before = before
    }

    static afterHook(after) {
        this.after = after
    }

    static init(){
        this.push(window.location.pathname)
    }
    static register(path, callback) {
        let unregister = () => {
            delete this.callbackMap[path]
        }
        this.callbackMap[path] = callback
        return unregister
    }

    static push(path, data = {}) {
        this.before(path, data, this.match)
        window.history.pushState(data, '', path)
        this.match = {
            path, data
        }
        //['detail','1']
        let pathReal = path.split('/')
        Object.keys(this.callbackMap).forEach(key => {
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
                            this.match={...this.match,params:{[pathPatternTmep.replace(':','')]:pathRealtemp}}
                            tempMatch = true
                        }
                        tempMatch == false
                        break
                    }
                    isMatch = tempMatch
                }
            }

            this.callbackMap[key](isMatch, this.match, data||{})
        })

        this.after(this.match)
    }
}

export default Route