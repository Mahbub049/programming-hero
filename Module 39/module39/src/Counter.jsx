import { useState } from "react";

export default function Counter(){
    const [count, setCount] = useState(0);

    const HandleAdd = () => {
        const newCount = count + 1;
        setCount(newCount)
    }

    const HandleReduce = () => {
        const newCounter = count - 1;
        setCount(newCounter);
    }
    return (
        <div style={{ border: '2px solid tomato', padding: '50px', margin: '50px', borderRadius: '10px'}}>
            <h3>Counter: {count}</h3>
            <button onClick={HandleAdd}>Add</button>
            <button onClick={HandleReduce}>Remove</button>
        </div>
    )
}