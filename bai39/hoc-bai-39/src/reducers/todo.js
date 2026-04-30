const initState = {
    todos: [
        {
            id: 1,
            content: "Công việc 1",
            completed: false
        },
        {
            id: 2,
            content: "Công việc 2",
            completed: true
        },
    ]
}
export const todoReducer = (state = initState, action) => {
    switch (action.type) {
        case "TODO_CREATE":
            return {
                todos: [
                    ...state.todos,
                    {
                        id: Date.now(),
                        content: action.content,
                        completed: false
                    }
                ]
            }
        case "TODO_DELETE":
            return{
                todos:state.todos.filter(item=>item.id!=action.id)
            }
        case "TODO_COMPLETED":
            return {
                todos:state.todos.map(item=>item.id===action.id?
                {
                    ...item,
                    completed:action.completed
                }
                :item)
            }

        default:
            return state;
    }
}