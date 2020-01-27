### 基于发布-订阅模式实现的动态路由
---
> 基于发布订阅模式实现的动态路由

### 脚本
- `npm run build`: 打包

### 功能
- 动态注册
- 基于 history Api

### api
- `Router.beforeHook(hook:function(path:String, data:Object, match:Object)):boolean`: 前置中间件, 参数是一个返回布尔值的函数, 如果该函数返回`false`, 则本次跳转不会发生
    ```
    let router=new Router()
    router.beforeHook((path, data, match) => {
        console.log('before', {path, data, match}) // before {data:{}, match:{path:'',data:{},params:{}},path:''}
        return true
    })
    ```
- `Router.afterHook(hook:function(match:Object)):void`: 后置中间件
    ```
    let router=new Router()
    router.afterHook((match) => {
        console.log('after', {match}) // after match:{path:'',data:{},params:{}}
    })
    ```
- `Router.register(path,callback):Function`: 注册路由, 该路由需要一个路由和一个回调函数, 当一个路由触发的时候, 会触发所有路由注册时候的回调函数, 该函数返回一个函数, 可以用来取消该路由
    ```
    let router=new Router()
    let unListen = router.register('/article', (isMatch, match, data) => {
        if (!isMatch) return
        $content.innerText = `这是文章页面, 收到数据: ${data.data}`
    })
    unListen()
    ```
- `Router.init():void`: 初始化, 该函数用来做初始化使用, 当用户进入的时候不是首页, 可以做首次跳转
    ```
    let router=new Router()
    router.init()
    ```
- `Router.push(path, data)`: 跳转路由, 该函数用来做路由跳转, 可以激活监听的路由的监听器, 并改变地址
    ```
    let router=new Router()
    router.push('detail',{id:1})
    ```
