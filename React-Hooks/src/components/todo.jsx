import React, { Component , useState } from 'react';
import './todo.css'

const Todo = () => {
    const [users,setUsers] = useState([
        {task:"Clean", status:"Do" },
        {task:"Wash", status:"Do" },
        {task:"Eat", status:"Do" }
    ]);
    const handleClick = (obj) => {
        let arr1 = users.filter((item) => {
            return item.task !== obj.task
        })
        console.log(arr1);
        setUsers(arr1);

    }

    return ( <div>
        <table>
            <thead>
                <tr>
                    <th>Task</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {
                    (users.length > 0)
                    ?users.map((item) => {
                        return <tr>
                            <td>{item.task}</td>
                            <td>{item.status}</td>
                            <td><button onClick={() => handleClick(item)}>Delete</button></td>
                        </tr>
                    })
                    :null
                }
            </tbody>
        </table>
    </div> );
}
 
export default Todo;