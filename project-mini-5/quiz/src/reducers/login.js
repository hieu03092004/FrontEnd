export const loginReducer=(state=false,action)=>{
    // console.log("State",state);
    // console.log("Action",action);
    switch(action.type){
        case "CHECK_LOGIN":
            return action.status;
        default:
            return state;
    }
}