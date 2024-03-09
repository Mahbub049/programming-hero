import './App.css'
import Counter from './Counter'
import Player from './Player';
import Users from './Users';
import Friends from './Friends';

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
      <Friends></Friends>
      <Users></Users>
      <Player></Player>
      <Counter></Counter>
      <button onClick={clicked}>Click Me</button>
      <button onClick={()=>alert('Button Two Clicked')}>Click This</button>
      <button onClick={() => addNumber(10)}>Add Five</button>
    </>
  )
}

export default App

