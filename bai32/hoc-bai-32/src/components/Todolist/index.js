import {useReducer,useRef,useEffect} from 'react';
const init=[
  {
    id:1,
    content:"Thu 2 hoc HTML",
  },
  {
    id:2,
    content:"Thu 3 hoc CSS",
  },
  {
    id:3,
    content:"Thu 4 hoc JavaScript",
  },
]
const reducer=(state,action)=>{
  switch(action.type){
    case "CREATE":
      return [
        ...state,
        {
          id:state.length+1,
          content:action.value  
        }
      ]
    case "DELETE":
      const newState=state.filter(todo=>todo.id!=action.id);
      console.log(newState);
      return newState;
    default:
      return state;
  }
}
function Todos() {
  const [todos,dispatch]=useReducer(reducer,init)
  const inputRef=useRef();
  useEffect(()=>{
    inputRef.current.focus();
  })
  const handleSubmit=(e)=>{
    e.preventDefault();
    //e.preventDefault() de tranh load lai trang
    console.log(e.target.inputTodo.value);
    //e.target.inputTodo.value la lay ra gia tri cua o input khi form duoc submit
    const value=e.target.inputTodo.value;
    if(value){
      dispatch({
        type:"CREATE",
        value:value
      })
    }
    inputRef.current.value="";
  }
  const handleDelete=(id)=>{
    dispatch({
      type:"DELETE",
      id:id
    })
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} name="inputTodo"/>
        <button>Them toDo</button>
      </form>
      {todos.length >0 && (
        <ul>
          {todos.map(item=>{
            return(
              <li key={item.id}>
                {item.content}
                <button onClick={()=>handleDelete(item.id)}>Xóa</button>
              </li>
            )
          })}
        </ul>
      )}
    </>
  );
}
export default Todos;
