import React, { Component, useState } from "react";
import "./todo.css";

const Todo = () => {
  const [users, setUsers] = useState([
    { id: 1, task: "Clean", status: "Do" },
    { id: 2, task: "Wash", status: "Do" },
    { id: 3, task: "Eat", status: "Do" },
  ]);
  const [id, setId] = useState("");
  const [task, setTask] = useState("");
  const [status, setStatus] = useState("");
  const handleClick = (obj) => {
    let arr1 = users.filter((item) => {
      return item.task !== obj.task;
    });
    setUsers(arr1);
  };
  const handleClick1 = (obj) => {
      setId(obj.id);
      setTask(obj.task);
      setStatus(obj.status);
  };
  


  const handleClick2 = () => {
      let obj = {
          id: users.length+1,
          task: task,
          status: status
      }
      let arr1 = [...users , obj]
      setUsers(arr1)
  };

  const handleChange = (e) => {
    if (e.target.name === "newTask") {
      setTask(e.target.value);
    }
    if (e.target.name === "newStatus") {
      setStatus(e.target.value);
    }
  };
  const handleClick3 = () => {
      let arr1 = [...users];
      const updatedArray = arr1.map((item) => {
          return {
              id : item.id,
              task: (item.id === id) ? task : item.task,
              status: (item.id === id) ?status : item.status
          }
      })
      setUsers(updatedArray);
  }

  return (
    <div>
      <label htmlFor="newTask">Task: </label>
      <input
        type="text"
        name="newTask"
        defaultValue={task}
        onChange={handleChange}
      />
      <label htmlFor="newStatus"> Status: </label>
      <input
        type="text"
        name="newStatus"
        defaultValue={status}
        onChange={handleChange}
      />
      <br />
      <button onClick={handleClick2}>Add Task</button>
      <button onClick={handleClick3}>Update</button>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Task</th>
            <th>Status</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0
            ? users.map((item) => {
                return (
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.task}</td>
                    <td>{item.status}</td>
                    <td>
                      <button onClick={() => handleClick(item)}>Delete</button>
                    </td>
                    <td>
                      <button onClick={() => handleClick1(item)}>Edit</button>
                    </td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </table>
    </div>
  );
};

export default Todo;
