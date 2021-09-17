// we have to connected action to reducer to pass
// updated state to store
export default function(state=null, action){
    switch(action.type){
        case 'MOVIES_LIST':
            return action.payload
        default:
            return null
    }
}