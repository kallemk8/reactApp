const initialState = {
    user:"",
    user_details:""
}
export function authentication(state1 = initialState, action) {
    if(action.type=== "USER_LOGIN"){
        return {
            ...state1,
            user:action.user
        }
    }
    if(action.type=== "USER_REG"){
        return {
            ...state1,
            user_details:action.user_details
        }
    }
    return state1;
}
