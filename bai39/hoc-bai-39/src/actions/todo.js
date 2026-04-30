export const todoCreate=(content)=>{
    return{
        type:"TODO_CREATE",
        content:content
    }
};
export const todoDelete=(id)=>{
    return{
        type:"TODO_DELETE",
        id:id
    }
};
export const todoCompleted=(id,completed)=>{
    return{
        type:"TODO_COMPLETED",
        id:id,
        completed:completed
    }
};