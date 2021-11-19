import React, { Component } from "react";
import "./todo.css";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        { id: 1, task: "Clean", status: "Do" },
        { id: 2, task: "Wash", status: "Do" },
        { id: 3, task: "Eat", status: "Do" },
      ],
      task: "",
      status: "",
      id: "",
    };
  }
  handleChange = (e) => {
    if (e.target.name === "newTask") {
      this.setState({
        task: e.target.value,
      });
    } else if (e.target.name === "newStatus") {
      this.setState({
        status: e.target.value,
      });
    }
  };
  //delete row
  handleClick = (obj) => {
    let arr1 = [...this.state.users];
    const filtered = arr1.filter((item) => {
      return item.id !== obj.id;
    });
    this.setState({
      users: filtered,
    });
  };
  // update state values for update operation
  handleClick1 = (obj) => {
    let arr1 = [...this.state.users];
    console.log(obj);
    this.setState({
      id: obj.id,
      task: obj.task,
      status: obj.status,
    });
  };
  //add new row
  handleClick2 = () => {
    let newObj = {
      id: this.state.users.length + 1,
      task: this.state.task,
      status: this.state.status,
    };
    let arr1 = [...this.state.users, newObj];
    this.setState({
      users: arr1,
    });
  };
  //update row
  handleClick3 = () => {
    const { users, id, task, status } = this.state;
    let arr1 = [...users];
    const updatedArr = arr1.map((item) => {
      return {
        id: item.id,
        task: item.id === id ? task : item.task,
        status: item.id === id ? status : item.status,
      };
    });
    this.setState({
      users: updatedArr,
    });
  };

  render() {
    const { task, users, status } = this.state;
    return (
      <div>
        <label htmlFor="newTask">Task</label>
        <input
          type="text"
          defaultValue={task}
          name="newTask"
          onChange={this.handleChange}
        />
        <label htmlFor="newStatus">Status</label>
        <input
          type="text"
          defaultValue={status}
          name="newStatus"
          onChange={this.handleChange}
        />
        <br />
        <button onClick={this.handleClick2}>Add Task</button>
        <button onClick={this.handleClick3}>Update Task</button>

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
                        <button onClick={() => this.handleClick(item)}>
                          Delete
                        </button>
                      </td>
                      <td>
                        <button onClick={() => this.handleClick1(item)}>
                          Update
                        </button>
                      </td>
                    </tr>
                  );
                })
              : null}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Todo;
