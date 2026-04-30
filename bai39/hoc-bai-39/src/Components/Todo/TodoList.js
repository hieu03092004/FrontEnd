import { useDispatch, useSelector } from "react-redux"
import { todoDelete,todoCompleted } from "../../actions/todo";
export const TodoList=()=>{
    const todos=useSelector(state=>state.todoReducer.todos);
    const dispatchTodo=useDispatch();
    const handleDelete=(id)=>{
       dispatchTodo(todoDelete(id));
    }
    const handleCompleted=(id,completed)=>{
        dispatchTodo(todoCompleted(id,completed));
    }
    // console.log("todos",todos);
    return(
        <>
            <ul>
                {todos.map((item)=>{
                    return(
                    <li key={item.id}>
                        <span style={{textDecoration:item.completed?"line-through":"none"}}>{item.content}</span>
                        {item.completed?<button onClick={()=>handleCompleted(item.id,false)}>Hoàn tác</button>:<button onClick={()=>handleCompleted(item.id,true)}>Hoàn thành</button>}
                        <button onClick={()=>{handleDelete(item.id)}}>Xóa</button>
                    </li>
                    )
                })}
            </ul>
        </>
    )
}