import { createContext, useState } from "react";

export const TodoContext = createContext();

const TodoContextWrapper = ({ children }) => {
    const [todos, setTodos] = useState([
        {id:1, todo:"Make todo app", status:false}, 
        {id:2, todo:"Use Context api", status:true}, 
    ])

    const addTodos = ({todo, status})=> {
        const newTodo = {todo, status}
        const lastTodo = todos[todos.length -1]
        const newTodoid = lastTodo.id
        newTodo.id = newTodoid+1
        console.log(newTodo);
        setTodos((prev)=> {
            return [
                ...prev, 
                newTodo
            ]
        })
    }

    const initialState = {
      todos: todos,
      setTodos: setTodos,
      addTodos: addTodos,
    };
    return (
      <TodoContext.Provider value={initialState}>
        {children}
      </TodoContext.Provider>
    );
}

export default TodoContextWrapper;
