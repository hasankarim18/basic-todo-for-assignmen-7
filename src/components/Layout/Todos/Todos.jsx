import { useContext } from "react";
import { TodoContext } from "../../Context/TodoContextWrapper";
import Todo from "./Todo";

const Todos = () => {

    const {todos} = useContext(TodoContext)

  

    return (
      <div>
        <ul className="grid grid-cols-1 gap-8" >
          {todos.map((todo) => {
            return <Todo key={todo.id} todo={todo} />;
          })}
        </ul>
      </div>
    );
};

export default Todos;