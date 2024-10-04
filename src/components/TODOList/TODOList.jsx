import { useState } from "react";
import css from "./TODOList.module.css";

export function TODOList() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const addTask = () => {
    if (inputValue.trim()) {
      setTasks([...tasks, inputValue]);
      setInputValue("");
    }
  };
  return (
    <>
      <div className={css.container}>
        <p>TODO List</p>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Введіть завдання"
        />

        <button onClick={addTask}>Додати</button>

        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
