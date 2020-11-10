const initialState = {
    user:""
}
export function authentication(state1 = initialState, action) {
    if(action.type=== "USER_LOGIN"){
        return {
            ...state1,
            user:action.user
        }
    }
    return state1;
}
