import Component from "../src/Component";
import LeactDom from "../src/LeactDom";
import Leact from '../src/Leact'

class TodoService {
    static todoList = []

    static getAll() {
        return [...this.todoList]
    }

    static add(content) {
        this.todoList.push({
            content: content,
            id: this.todoList.length,
            state: 1
        })
    }

    static delete(id) {
        this.todoList.forEach((v, index) => {
            if (v.id === id) {
                this.todoList.splice(index, 1)
            }
        })
    }

    static update(todo) {
        this.todoList = this.todoList.map((v, index) => {
            if (v.id === todo.id) {
                return todo
            }
            return v
        })
    }
}

class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todo: props.todo
        }
    }


    componentWillReceiveProps(nextProps, state) {
        this.setState({
            todo: nextProps.todo
        })
    }

    render() {
        const {todo} = this.state
        return (<div style={{background: todo.state === 1 ? 'red' : 'green'}}>
            <span>{todo.content}</span>
            <button onClick={() => this.handleCompleteClick()}> 完成</button>
            <button onClick={() => this.handleDeleteClick()}>删除</button>
        </div>)
    }

    handleCompleteClick() {
        this.props.onUpdate({...this.state.todo, state: 3})
    }

    handleDeleteClick() {
        this.props.onDelete(this.state.todo.id)
    }
}

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todoList: props.todoList
        }
    }


    componentWillReceiveProps(nextProps, state) {
        this.setState({
            todoList: nextProps.todoList
        })
    }

    render() {
        const {todoList} = this.state
        return (<div>
            {todoList.map((todo) => {
                return <Todo todo={todo}
                             onDelete={this.props.onDelete}
                             onUpdate={this.props.onUpdate}
                />
            })}
        </div>)
    }


}

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            content: '',
            todoList: [...TodoService.getAll()]
        }
    }

    render() {
        const {content, todoList} = this.state

        return (<div>
            <input type="text" value={content} onChange={(e) => this.setState({content: e.target.value})}/>
            <button onClick={() => this.handleAddClick()}>添加</button>

            <p>{content}</p>
            <TodoList todoList={todoList}
                      onUpdate={todo => this.handleUpdateClick(todo)}
                      onDelete={(id) => this.handleDeleteClick(id)}
            />
        </div>)
    }

    handleDeleteClick(id) {
        TodoService.delete(id)
        this.setState({
            todoList: TodoService.getAll()
        })
    }

    handleAddClick() {
        TodoService.add(this.state.content)

        this.setState({
            content: '',
            todoList: TodoService.getAll()
        })
    }

    handleUpdateClick(todo) {
        TodoService.update(todo)
        this.setState({
            todoList: TodoService.getAll()
        })

    }
}

LeactDom.render(
    <App/>,
    document.getElementById('app')
)