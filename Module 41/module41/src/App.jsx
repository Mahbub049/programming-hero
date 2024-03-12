import { useState } from 'react'
import './App.css'
// import add from './assets/Utils/count'
// import { add, multiply as mult } from './assets/Utils/count'
import { add, multiply as mult } from './assets/Utils/count'

function App() {

  const a = 10, b=20;
  const result = add(a, b);
  // const result1 = multiply(a, b);
  const result1 = mult(a, b);
  console.log(result, result1)

  return (
    <>

    </>
  )
}

export default App
