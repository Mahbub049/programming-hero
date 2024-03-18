import './App.css'
import LineChart from './assets/components/LineChart/LineChart';
import Navbar from './assets/components/Navbar/Navbar';
import PriceOptions from './assets/components/PriceOptions/PriceOptions';


function App() {

  return (
    <>
      <Navbar></Navbar>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
    </>
  )
}

export default App
