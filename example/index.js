import Route from "../src/Route";


let $content = document.getElementById('content')
let $article = document.getElementById('article')
let $detail = document.getElementById('detail')
let $mine = document.getElementById('mine')

// 前置中间件
Route.beforeHook((path, data, match) => {
    console.log('before', {path, data, match})
})

// 后置中间件
Route.afterHook((match) => {
    console.log('end', {match})

})

// 注册路由
Route.register('/article', (isMatch, match, data) => {
    if (!isMatch) return
    $content.innerText = `这是文章页面, 收到数据: ${data.data}`
})
// 注册路由
Route.register('/mine', (isMatch, match, data) => {
    if (!isMatch) return
    $content.innerText = `这是个人中心, 收到数据: ${data.data}`
})
// 注册路由
Route.register('/detail/:id', (isMatch, match, data) => {
    console.log(isMatch, match, data)
    if (!isMatch) return
    $content.innerText = `这是个人中心, 收到数据: ${data.data}, URL参数:${match.params.id}`
})
Route.init()


$article.onclick = () => {
    Route.push('/article', {data: '文章'})
}
$detail.onclick = () => {
    Route.push('/detail/sfsdf', {data: '文章详情'})
}
$mine.onclick = () => {
    Route.push('/mine', {data: '个人中心'})
}





