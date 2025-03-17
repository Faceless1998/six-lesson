import React, { useState, useEffect } from "react";
/**/

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [myEl, setMyEl] = useState([3, 4, 5]);
  const [count, setCount] = useState(0);

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const savedItem = JSON.parse(localStorage.getItem("tasks"));
    if (savedItem) {
      setTasks(savedItem);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    });

    return () => clearInterval(interval);
  });

  const formattedTime = time.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false, //auqmebs 12 saatians es
  });

  const addTask = () => {
    if (inputValue.trim() === "") {
      return;
    } else {
      setTasks([...tasks, inputValue]);
      setInputValue("");
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const dajameba = () => {
    for (let i = 0; i < myEl.length; i++) {
      setCount(count + myEl.reduce((a, b) => a + b, 0));
    }
  };

  return (
    <>
      <div>
        {count}
        <button onClick={dajameba}>OK</button>
      </div>

      <div style={styles.container}>
        <div style={styles.box}> {formattedTime}</div>
      </div>

      <div
        style={{
          textAlign: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="შეიყვანე"
        />

        <button onClick={addTask}>OK</button>

        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button onClick={() => removeTask(index)}>remove</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const styles = {
  container: {
    backgroundColor: "#000",
    width: "108px",
    color: "white",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
  },
  box: {
    color: "lightgreen",
    textAlign: "center",
    justifyContent: "center",
    display: "flex",
  },
};

export default Todo;
