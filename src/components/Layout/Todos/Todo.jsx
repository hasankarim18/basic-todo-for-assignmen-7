
import { useContext } from "react";
import { FaTimesCircle, FaRegCheckCircle, FaTrash } from "react-icons/fa";
import { TodoContext } from "../../Context/TodoContextWrapper";
const Todo = ({todo}) => {
    
    const { toggleStatus, deleteTodo } = useContext(TodoContext);


    return (
      <li className="flex border p-2 rounded-md justify-between  w-full">
        <div className="text-xl flex items-center h-full">
          <strong className="inline-block mr-2">{todo.id}. </strong>
          <p className={`${todo.status ? 'line-through': ''}`}> {todo.todo}</p>
        </div>
        <div className="flex gap-4">
          {(() => {
            if (todo.status) {
              return (
                <button 
                onClick={()=> {toggleStatus(todo.id)}}
                 className="bg-yellow-400 tooltip relative p-2 rounded-md">
                  <FaTimesCircle />
                  <span className="">Mark as Incomplete </span>
                </button>
              );
            } else {
              return (
                <button 
                onClick={()=> {toggleStatus(todo.id)}}

                  title="Make  Incomplete"
                  className="bg-green-400 tooltip p-2 relative rounded-md"
                >
                  <FaRegCheckCircle />
                  <span className=" ">Mark as Complete</span>
                </button>
              );
            }
          })()}
          <button onClick={()=> {deleteTodo(todo.id)}} className="bg-red-400 p-2 rounded-md" >
            <FaTrash className="hover:text-white" />
          </button>
        </div>
      </li>
    );
};

export default Todo;