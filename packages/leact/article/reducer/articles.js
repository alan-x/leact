import {ACTION_ARTICLE_LIST} from "./actions";

export const getArticleList = (data) => {
    return {
        type: ACTION_ARTICLE_LIST,
        data: data
    }

}


const articles = (state = [], action = {}) => {

    switch (action.type) {
        case ACTION_ARTICLE_LIST: {
            return [...action.data]
        }
        default: {
            return state
        }
    }

}
export default articles