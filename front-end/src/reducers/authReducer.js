export default (state = [], action) => {
    if(action.type === "LOGIN_ACTION" || action.type === "REGISTER_ACTION" || action.type === "CHECK_SESSION_ACTION"){
        return action.payload.data
    } else if (action.type === "LOGOUT_ACTION"){
        return []
    } else {
        return state
    }
}