import { useEffect, useState } from "react"
import './Friends.css'
import Friend from "./Friend";

export default function Friends(){
    const [friends, setFriend] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response=>Response.json())
        .then(data=>setFriend(data))
    },[])

    return(
        <div>
        {
            friends.map(friend=><Friend friend={friend}></Friend>)
        }
        </div>
    )
}