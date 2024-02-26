import { useEffect, useReducer, useRef } from "react";
const init = [
  {
    id: 1,
    content: "Thứ 2 học HTML",
  },
  {
    id: 3,
    content: "Thứ 3 học CSS",
  },
  {
    id: 4,
    content: "Thứ 4 học JS",
  },
];
const reducer = (state, action) => {
  //action Create delete
  console.log(state, action);
  switch (action.type) {
    case "CREATE":
      return [
        ...state,
        {
          id: Date.now(),
          content: action.value,
        },
      ];
    case "DELETE":
      const newState = state.filter((todo) => todo.id != action.id);
      return newState;
    default:
      return state;
  }
};
function Todos() {
  const [todos, dispath] = useReducer(reducer, init);

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.elements.inputTodo.value;
    if (value) {
      dispath({
        type: "CREATE",
        value: value,
      });
    }
  };

  const handleDelete = (id) => {
    console.log(id);
    dispath({
      type: "DELETE",
      id: id,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input name="inputTodo" />
        <button>Thêm todo</button>
      </form>
      {todos.length > 0 && (
        <ul>
          {todos.map((item) => (
            <li key={item.id}>
              {item.content}
              <button onClick={() => handleDelete(item.id)}>Xóa</button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
export default Todos;
