import './App.css'
import Counter from './Counter'

function App() {
  function clicked(){
    alert('Button Clicked');
  }
  function addNumber(num){
    alert(num+5);
  }
  return (
    <>
      <h3>React</h3>
      <Counter></Counter>
      <button onClick={clicked}>Click Me</button>
      <button onClick={()=>alert('Button Two Clicked')}>Click This</button>
      <button onClick={() => addNumber(10)}>Add Five</button>
    </>
  )
}

export default App
