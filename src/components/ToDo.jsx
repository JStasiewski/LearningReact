import { motion } from "framer-motion";

const ToDoList = ({
  page,
  setPage,
  x,
  setX,
  tasks,
  setTasks,
  inputValue,
  setInputValue,
}) => {
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const addTask = () => {
    if (inputValue !== "") {
      setTasks([...tasks, inputValue]);
      setInputValue("");
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((task, i) => i !== index));
  };

  return (
    <motion.div
      className="card"
      initial={{ x: x }}
      transition={{ duration: 1 }}
      animate={{ x: 0 }}
    >
      <div className="card-title">To Do List</div>
      <div className="toDoTaskBar">
        <input
          className="toDoInput"
          type="text"
          value={inputValue}
          onChange={handleChange}
        />
        <button className="toDoInputButton" onClick={addTask}>
          Dodaj zadanie
        </button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li className="toDoElem" key={index}>
            {task}
            <button className="toDoButton" onClick={() => removeTask(index)}>
              Usuń
            </button>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ToDoList;
