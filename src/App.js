import "./App.css";
import { useState } from "react";

import PersonalInfo from "./components/PersonalInfo";
import Quiz from "./components/Quiz";
import YT from "./components/YT";
import ToDo from "./components/ToDo";

function App() {
  const [page, setPage] = useState(0);
  const [x, setX] = useState(0);

  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const componentList = [
    <PersonalInfo page={page} setPage={setPage} x={x} setX={setX} />,
    <Quiz page={page} setPage={setPage} x={x} setX={setX} />,
    <YT page={page} setPage={setPage} x={x} setX={setX} />,
    <ToDo
      page={page}
      setPage={setPage}
      x={x}
      setX={setX}
      tasks={tasks}
      setTasks={setTasks}
      inputValue={inputValue}
      setInputValue={setInputValue}
    />,
  ];

  return (
    <div className="App">
      <div>{componentList[page]}</div>
      <div className="button-area">
        {page !== 0 ? (
          <button
            onClick={() => {
              setPage(page - 1);
              setX(-2000);
            }}
          >
            Poprzednia
          </button>
        ) : (
          <div />
        )}
        {page !== componentList.length - 1 ? (
          <button
            onClick={() => {
              setPage(page + 1);
              setX(2000);
            }}
          >
            Następna
          </button>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}

export default App;
