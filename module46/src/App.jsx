import './App.css'
import CustomHook from './components/CustomHook/CustomHook';
import Grandpa from './components/Grandpa/Grandpa';
import RefForm from './components/RefForm/RefForm';
import ReuseableForm from './components/ReuseableForm/ReuseableForm';
import SimpleForm from './components/SimpleForm/SimpleForm';
import StatefulForm from './components/StatefulForm/StatefulForm';

function App() {
  const handleSubmit = (data) => {
    console.log(data)
  }
  return (
    <>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <CustomHook></CustomHook> */}
      {/* <ReuseableForm formTitle={'Sign Up'} handleSubmit={handleSubmit}>
        <p>Please Sign Up</p>
      </ReuseableForm>
      <ReuseableForm formTitle={'Profile Update'} handleSubmit={handleSubmit}>
        <p>Update your Profile</p>
      </ReuseableForm> */}
      <Grandpa></Grandpa>
    </>
  )
}

export default App
