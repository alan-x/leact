import Leact, {LeactDom, Component} from '@followwinter/leact'
import connect from '@followwinter/leact-ledux'

import {getArticleList} from "../../reducer/articles";

class Articles extends Component {
    constructor(props) {
        super(props)
        this.state = {
            articles: props.articles
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.props.getArticleList([
                {
                    id: 1,
                    title: '这是文章1',
                    detail: '这是文章1的详情',
                },
                {
                    id: 2,
                    title: '这是文章2',
                    detail: '这是文章2的详情',
                },
                {
                    id: 3,
                    title: '这是文章3',
                    detail: '这是文章3的详情',
                }
            ])
        }, 0)
    }


    componentWillReceiveProps(nextProps, state) {
        this.setState({
            articles: nextProps.articles
        })
    }

    render() {
        const {articles} = this.state
        return <div>
            <h1>文章列表</h1>
            {
                articles ? articles.map(article => {
                    return <div>
                        {article.title}
                    </div>
                }) : 'articles'
            }
        </div>
    }
}

// export default Articles
export default connect(
    (state) => {
        return {
            articles: state.articles
        }
    },
    (dispatch) => {
        return {
            getArticleList: (data) => dispatch(getArticleList(data))
        }
    }
)(Articles)