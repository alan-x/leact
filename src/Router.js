class Router {

    callbackMap = {}

    match = {
        path: '',
        data: {}
    }

    before = () => {
    }

    after = () => {
    }

    beforeHook(before) {
        this.before = before
    }

    afterHook(after) {
        this.after = after
    }

    register(path, callback) {
        let unregister = () => {
            delete this.callbackMap[path]
        }
        this.callbackMap[path] = callback
        return unregister
    }

    init() {
        this.push(window.location.pathname)
    }

    push(path, data = {}) {
        this.match = {path, data}
        this.before(path, data, this.match)

        Object.keys(this.callbackMap).forEach(route => {
            let callback = this.callbackMap[route]
            window.history.pushState(data, '', path)

            /*
            如果不包含 : 匹配符
            直接对比字符串就好了
             */
            if (!route.includes(':')) {
                callback(route === path, this.match, data)
                return
            }

            /*
            如果包含 : 直接切分然后对比路径长度
             */
            let pathRealArr = path.split('/')
            let pathArr = route.split('/')

            if (pathArr.length !== pathRealArr.length) {
                callback(false, this.match, data)
                return
            }

            /*
            长度相等并且包含 :
             */
            let tempMatch = true
            while (pathArr.length) {

                let pathPatternTmep = pathArr.pop()
                let pathRealtemp = pathRealArr.pop()

                if (pathPatternTmep.includes(':')) {
                    this.match = {
                        ...this.match,
                        params: {[pathPatternTmep.replace(':', '')]: pathRealtemp}
                    }
                } else if (pathPatternTmep !== pathRealtemp) {
                    tempMatch = false
                    break
                }
            }

            callback(tempMatch, this.match, data)
            return

        })

        this.after(this.match)
    }
}

export default Router