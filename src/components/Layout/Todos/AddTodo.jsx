import { useContext } from "react";
import { TodoContext } from "../../Context/TodoContextWrapper";


const AddTodo = () => {
    const { addTodos } = useContext(TodoContext);
   // const [Todo, setTodo] = useState('')
    const onSubmit = (e)=> {
        e.preventDefault()
        const form = e.target
        const todo = form.todo.value
        const todoObj = {todo, status:false}
   //     console.log(todoObj);
        addTodos(todoObj);
        form.reset()
    }
    return (
      <div className=" pt-4">
        <h3 className="text-3xl text-center">Add Todo</h3>
        <form onSubmit={onSubmit}>
          <input 
            name="todo"
            placeholder="Add todo"
            type="text"
            className="border p-2  w-full"
          />
          <div  className="flex justify-end">
            <button type="submit" className="bg-green-400 hover:bg-green-600 text-white font-bold mt-4 p-4 rounded-lg">
              Add Todo
            </button>
          </div>
        </form>
      </div>
    );
};

export default AddTodo;