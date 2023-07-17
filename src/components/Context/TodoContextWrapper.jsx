import { createContext, useEffect, useState } from "react";

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
          const updatedTodos = [...prev, newTodo]     
          localStorage.setItem('react_todos', JSON.stringify(updatedTodos))
            return updatedTodos
        })
    }

    const toggleStatus = (id)=> {    
      setTodos((prevTodos) => {
      const updatedTodos =  prevTodos.map((item) => {
          if (item.id === id) {
            const updatedTodo = {...item, status: !item.status}          
            return updatedTodo
          } else {
            return item;
          }
        });

        localStorage.setItem('react_todos', JSON.stringify(updatedTodos))
        return updatedTodos
      });
    }

    const deleteTodo = (id)=> {
      setTodos((prevTodos)=> {
        const updatedTodos = prevTodos.filter((item) => item.id !== id);
         localStorage.setItem("react_todos", JSON.stringify(updatedTodos));
        return updatedTodos;
      })
    }

    useEffect(() => {
      const savedTodos = JSON.parse(localStorage.getItem('react_todos'))
      console.log(savedTodos);

      if(!savedTodos){
        setTodos([])
      }else {
        setTodos(savedTodos)
      }
    
    }, [])
    

   

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
