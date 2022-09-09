import React, { useState, useEffect} from "react";
import axios from "axios";

const myStyle = {
    // color: 'green',
    fontFamily: 'serif',
    listStyleType: 'square',
    paddingRight: '80%',
    margin: 10
}

function UserList() {
   const [users, setUsers] = useState([])

   useEffect(() =>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => {
       console.log(res)
       setUsers(res.data)
    })
    .catch(err => {
        console.log(err)
    })
   }, [])
    return (
        <div>
        <ul>
            {users.map(user => (
                    <li key={user.id} style={myStyle}>Name: {user.name}
                    <p> Username: {user.username}</p>
                    </li>
                ))}
        </ul>
        </div>
    )
}

export default UserList;