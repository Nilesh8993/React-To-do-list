import React from "react";
import { useState } from "react";
import List from "./List";

function Form() {
  const [task, setTask] = useState([]);
  const [inputText, setInputText] = useState("");

  const handleChange = (e) => {
    // console.log(e);
    setInputText(e.target.value);
  };

  const addTask = (e) => {
    setTask([...task, inputText]);
    setInputText("");
  };

  const deleteTask = (key) => {
    let newTask = [...task];
    newTask.splice(key, 1);
    setTask([...newTask]);
  };

  // const completeTask = (item) => {};

  return (
    <>
      <label>Task: </label>
      <input type="text" onChange={handleChange} value={inputText} />
      <button onClick={addTask} style={{ margin: "10px" }}>
        ADD
      </button>
      <List task={task} delete={deleteTask} /*complete={completeTask}*/ />
    </>
  );
}

export default Form;
