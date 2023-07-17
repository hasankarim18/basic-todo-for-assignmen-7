import AddTodo from "./Todos/AddTodo";
import Todos from "./Todos/Todos";

const Layout = () => {
  return (
    <div className="">
      <div>
        <AddTodo />
      </div>
      <div>
        <Todos />
      </div>
    </div>
  );
};

export default Layout;
