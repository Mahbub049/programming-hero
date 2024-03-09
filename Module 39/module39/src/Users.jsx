import { useEffect, useState } from "react"

export default function Users(){

    const [users, setUsers] = useState([]); //[] to set the initial or default value

    useEffect( ()=> { //Callback
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response => Response.json())
        .then(data => setUsers(data))
    },[]) //dependency

    return (
        <div>
            <h3>Users: {users.length}</h3>
        </div>
    )
}