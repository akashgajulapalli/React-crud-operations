import React, { Component } from 'react';
import './todo.css'

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            users: [
                {task:"Clean", status:"Do" },
                {task:"Wash", status:"Do" },
                {task:"Eat", status:"Do" }
            ],
            task:"",
            status:""

         }
    }
    handleChange = (e) => {
        console.log(e.target);
        if(e.target.name === "newTask"){
            this.setState({
                task: e.target.value
            })
        }
        else if(e.target.name === "newStatus"){
            this.setState({
                status: e.target.value
            })
        }

            }
    handleClick = (obj) => {
        let arr1 = [...this.state.users];
        const filtered = arr1.filter((item) => {
            return item.task !== obj.task;
        })
        this.setState({
            users: filtered
        })                   
    }
    handleClick1 = (obj) => {
        let arr1 =[...this.state.users];
        console.log(obj);
        
        
    }
    handleClick2 = () => {
        let newObj = {
            task:this.state.addTask,
            status:"Do"
        }
        let arr1 = [...this.state.users , newObj]
        this.setState({
            users: arr1
        })
    }
    render() { 
        const { task , users ,status } = this.state;
        return ( <div>
            <label htmlFor="newTask">Task</label>
            <input type="text" defaultValue={ task } name="newTask" onChange={this.handleChange} />
            <label htmlFor="newStatus">Status</label>
            <input type="text" defaultValue={ status } name="newStatus" onChange={this.handleChange} />

            <button onClick={this.handleClick2}>Add Task</button>

            <table>
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Status</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        (users.length > 0)
                        ?users.map((item) => {
                            return <tr>
                                <td>{item.task}</td>
                                <td>{item.status}</td>
                                <td><button onClick={() => this.handleClick(item)}>Delete</button></td>
                                <td><button onClick={() => this.handleClick1(item)}>Update</button></td>
                            </tr>
                        })
                        :null
                    }
                </tbody>
            </table>
        </div> );
    }
}
 
export default Todo;