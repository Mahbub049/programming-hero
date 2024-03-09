import { useState } from "react"

export default function Player(){
    const [count, setCount] = useState(0);

    const adding = () =>{
        const newCount = count + 1;
        setCount(newCount);
    }

    const removing = () =>{
        setCount(count - 1);
    }

    return (
        <div>
            <h3>Player: {count}</h3>
            <button onClick={adding}>Add</button>
            <button onClick={removing}>Remove</button>
        </div>
    )
}