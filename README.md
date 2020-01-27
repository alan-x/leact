### 模仿`redux`,基于发布-订阅模式实现的状态管理工具
---
> 模仿`redux`,基于发布-订阅模式实现的状态管理工具

### 脚本
- `npm run build`: 打包

### 功能
- 和`redux`api 基本保持一致
- 状态管理

### api
- `createStore(reducer:Funciton,initState:Object,enhance:Function)`: 创建一个 store
- `combineReducers(reducers:Object)`: 将多个 reucer 合并
- `applyMiddleware(...middlewares:Function)`: 添加中间件

### 案例
```javascript

function counter(state = 0, action = {}) {
    switch (action.type) {
        case ACTION_INCREMENT:
            return state + 1
        default:
            return state
    }
}


function counter2(state = 0, action = {}) {
    switch (action.type) {
        case ACTION_INCREMENT:

            return state + 1
        default:
            return state
    }
}

const ACTION_INCREMENT = 'INCREMENT'

const increment = () => {
    return {
        type: ACTION_INCREMENT
    }
}

const before = store => storeDispatch => action => {
    console.log('before', action.type, store.getState())
    return storeDispatch(action)
}

const store = ledux.createStore(
    combineReducers({
        counter, counter2
    }),
    {},
    applyMiddleware(before)
)

ledux.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(increment())


```