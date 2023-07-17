import { useContext } from "react";
import { TodoContext } from "../../Context/TodoContextWrapper";
import Todo from "./Todo";

const Todos = () => {

    const {todos} = useContext(TodoContext)

  

    return (
      <div>
        <ul className="grid grid-cols-1 gap-4 pt-8 pb-8" >
          {todos.length === 0 && <div className="text-2xl text-center">No Todo List Found!</div>}
          {todos.map((todo) => {
            return <Todo key={todo.id} todo={todo} />;
          })}
        </ul>
      </div>
    );
};

export default Todos;