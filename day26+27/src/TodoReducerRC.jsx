export default function todoReducer(todos, action){
    switch(action.type){
        case "add":
            return [...todos, {id : action.id, text : action.text, done : false}];
        case "change":
            const updatedTodo = action.updatedTodo;
            return todos.map( (todo) =>
            todo.id == updatedTodo.id ? updatedTodo : todo
        );
        case "remove":
            return todos.filter((todo)=> todo.id !== action.id);
        default: return todos;
    }
}
