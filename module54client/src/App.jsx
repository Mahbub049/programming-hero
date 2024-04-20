import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useLoaderData } from 'react-router-dom'

function App() {
  const [count, setCount] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:3213/users')
    .then(res=>res.json())
    .then(data=>setCount(data));
  },[])
  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const roll = form.roll.value;
    const user = {name, roll}
    fetch('http://localhost:3213/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(data=>{
      const newUsers = [...count, data];
      setCount(newUsers)
      console.log(data)
    })
  }
  return (
    <>
      <h1>User Management System</h1>
      <p>Total Users: {count.length}</p>
      <form onSubmit={handleForm} action="">
        <input type="text" name="name" id="" /><br />
        <input type="text" name="roll" id="" /><br />
        <input type="submit" value="Submit" />
      </form>
      <div>
        {
          count.map(user=><p key={user.id}>{user.id} {user.name} {user.roll}</p>)
        }
      </div>
    </>
  )
}

export default App
