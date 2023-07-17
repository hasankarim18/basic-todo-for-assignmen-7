

const Todo = ({todo}) => {
  
    return (
        <div className="flex justify-between  w-full">
            <div className="text-xl flex items-center h-full">
                <strong className="inline-block mr-2">{todo.id}. </strong>
                {todo.todo}
            </div>
            <div>
                {(()=> {
                    if (todo.status) {
                     return <button className="bg-green-400 p-2 rounded-md">
                        Completed
                      </button>;
                    } else {
                     return <button className="bg-red-400 p-2 rounded-md">
                        Incomplete
                      </button>;
                    }
                })()}
            </div>
        </div>
    );
};

export default Todo;