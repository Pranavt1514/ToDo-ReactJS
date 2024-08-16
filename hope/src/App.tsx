import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";
import { useState , useEffect} from "react";
function App() {
  const [todos, setTodos] = useState([
    "Go gym",
    "Buy groceries",
    "Clean house",
    "Cook dinner",
  ]);

  const [todoValue, setTodoValue] = useState("");

  function persistData(newTodoList){
    localStorage.setItem('todos', JSON.stringify({todos: newTodoList}));
  }


  function handleAdd(todo) {
    const newTodoList = [...todos, todo];
    persistData(newTodoList);
    setTodos(newTodoList);
  }

  function handleDelete(index) {
    const newTodoList = todos.filter((todo, i) => i !== index);
    persistData(newTodoList);
    setTodos(newTodoList);
  }
  function handleEdit(index) {
    const valueTobeEdited = todos[index];
    setTodoValue(valueTobeEdited);
    handleDelete(index);
  }

  useEffect(() => {
    if(!localStorage) return;
    let localToDos= localStorage.getItem('todos');
    if(!localToDos) return;
    localToDos= JSON.parse(localToDos).todos;

    setTodos(localToDos);
  }, []);

  return (
    <main>
      <ToDoInput
        todoValue={todoValue}
        setTodoValue={setTodoValue}
        handleAddTodos={handleAdd}
      />
      <ToDoList handleEdit= {handleEdit} handleDelete={handleDelete} todos={todos} />
    </main>
  );
}

export default App;
