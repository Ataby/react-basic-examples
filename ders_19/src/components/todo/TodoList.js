import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { useDispatch } from "react-redux";
import { clear } from "../../redux/todoAction";


const TodoList = () => {
   const {todoList} = useSelector((state)=> state.todo)
  // const todoList = useSelector((state)=> state.todo.todoList)

  const dispatch=useDispatch();
  const handleClearList = (e) => {
    e.preventDefault();
    dispatch(clear());
     
  };


  return (
    <div>
      <div>
        {todoList.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </div>
      <div className="clear-wrapper">
        <button onClick={handleClearList} className="clear-button">
          Clear
        </button>
      </div>
    </div>
  );
};

export default TodoList;
