export default function(state={}, action){
    switch(action.type){
        case 'LATEST_NEWS':
            return {...state, latestnews:action.payload}
        case 'ARTICLE_NEWS':
            return {...state, articlenews:action.payload}
        default:
            return state
    }
}