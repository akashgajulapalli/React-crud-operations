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
            addTask:""
         }
    }
    handleChange = (e) => {
        this.setState({
            addTask: e.target.value
        })
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
    // handleClick1 = (obj) => {
    //     let arr1 =[...this.state.users];
    //     const updated = arr1.map((item) => {
    //         return {
    //             task: item.task, 
    //             status: (item.task === obj.task ) ? "Done" : "Do"
    //         }
    //     })
    //     this.setState({
    //         users: updated 
    //     })

    // }
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
        const { addTask , users } = this.state;
        console.log(addTask);
        return ( <div>
            <input type="text" defaultValue={ addTask } name="newTask" onChange={this.handleChange} />
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