import { createContext, useState } from "react";

export const TodoContext = createContext();

const TodoContextWrapper = ({ children }) => {
    const [todos, setTodos] = useState([
        // {id:1, todo:"Make todo app", status:false}, 
        // {id:2, todo:"Use Context api", status:true}, 
    ])
    

    const addTodos = ({todo, status})=> {
        const newTodo = { todo, status };  
        if(todos.length === 0){    
           newTodo.id = 1;
        }else {
          
          const lastTodo = todos[todos.length - 1];
          const newTodoid = lastTodo.id + 1;
          newTodo.id = newTodoid;         
        }       
        setTodos((prev)=> {
            return [
                ...prev, 
                newTodo
            ]
        })
    }

    const toggleStatus = (id)=> {    
      setTodos((prevTodos) => {
      return  prevTodos.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              status: !item.status,
            };
          } else {
            return item;
          }
        });
      });

    }

    const deleteTodo = (id)=> {
      setTodos((prevTodos)=> {
        return prevTodos.filter(item => item.id !== id)
      })
    }

   

    const initialState = {
      todos: todos,
      setTodos: setTodos,
      addTodos: addTodos,
      toggleStatus: toggleStatus,
      deleteTodo
    };
    return (
      <TodoContext.Provider value={initialState}>
        {children}
      </TodoContext.Provider>
    );
}

export default TodoContextWrapper;
