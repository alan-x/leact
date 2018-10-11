import Router from "../src/Router";


let $content = document.getElementById('content')
let $article = document.getElementById('article')
let $detail = document.getElementById('detail')
let $mine = document.getElementById('mine')

// 前置中间件
Router.beforeHook((path, data, match) => {
    console.log('before', {path, data, match})
})

// 后置中间件
Router.afterHook((match) => {
    console.log('end', {match})
})

// 注册路由
Router.register('/article', (isMatch, match, data) => {
    if (!isMatch) return
    $content.innerText = `这是文章页面, 收到数据: ${data.data}`
})
// 注册路由
Router.register('/mine', (isMatch, match, data) => {
    if (!isMatch) return
    $content.innerText = `这是个人中心, 收到数据: ${data.data}`
})
// 注册路由
Router.register('/detail/:id', (isMatch, match, data) => {
    console.log(isMatch, match, data)
    if (!isMatch) return
    $content.innerText = `这是个人中心, 收到数据: ${data.data}, URL参数:${match.params.id}`
})
Router.init()


$article.onclick = () => {
    Router.push('/article', {data: '文章'})
}
$detail.onclick = () => {
    Router.push('/detail/sfsdf', {data: '文章详情'})
}
$mine.onclick = () => {
    Router.push('/mine', {data: '个人中心'})
}





