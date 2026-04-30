import { TodoCreate } from "./TodoCreate"
import { TodoList } from "./TodoList"
export const Todo=()=>{
    return(
        <>
           <h1>Todo App</h1>
           <TodoCreate/>
            <TodoList/>
        </>
    )
}