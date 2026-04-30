const initState={
    count:0
}
export const counterReducer=(state=initState,action)=>{
    switch(action.type){
        case "COUNTER_UP":
            return {
                count:state.count+1
            }
        case "COUNTER_DOWN":
            return {
                count:state.count-1
            }
        case "COUNTER_RESET":
            return {
                count:state.count=0
            }
        default:
            return state;

    }
}