import { useDispatch } from "react-redux";
import { todoCreate } from "../../actions/todo";
export const TodoCreate =()=>{
    const dispatchTodo=useDispatch();
    const handleSubmit=(event)=>{
        event.preventDefault();
        const content=event.target.content.value;
        if(content){
            dispatchTodo(todoCreate(content));
            event.target.content.value="";
        }
    }
    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Nhập nội dung..." name="content">
                </input>
                <button>Tạo mới</button>
            </form>
        </>
    )
}