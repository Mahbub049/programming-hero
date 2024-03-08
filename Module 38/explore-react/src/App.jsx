import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Subject from './subject'
import { Completed } from './subject'
import Friends from './Friends'
import Courses from './Courses'
import BookStore from './BookStore'
// import BookStore from './BookStore'

function App() {
  const friends = ['Mahan', 'Mirza', 'Farah', 'Flavia', 'Sajid'];
  const books = [
    {id: 1, name: 'Math', price: 120},
    {id: 2, name: 'Phy', price: 110},
    {id: 3, name: 'Che', price: 100},
    {id: 4, name: 'Bio', price: 90}
  ]
  const courses = [
    {name: 'IS', code:'5101'},
    {name: 'CS', code:'5102'},
    {name: 'DSP', code:'5103'},
    {name: 'AIoT', code:'5104'},
    {name: 'RM', code:'5105'},
  ]
  return (
    <>
      <h1>Vite + React</h1>
      <MyDetails></MyDetails>
      <Student></Student>
      <Employee></Employee>
      <Developer></Developer>
      <JobApply name="Bank" salary="20K"></JobApply>
      <JobApply name="Developer" salary="40K"></JobApply>
      <Faculty name="Faculty" salary="30K"></Faculty>
      <Faculty name="Faculty"></Faculty><br />
      <Subject name="ICT" salary="30K"></Subject><br />
      <Completed name="Bangla" Completed={true}></Completed>
      <Completed name="English" Completed={false}></Completed><br />
      {
        friends.map(friend =><Friends name={friend}></Friends>)
      } <br />
      {
        courses.map(course => <Courses object={course}></Courses>)
      }
      <BookStore book={books}></BookStore>
    </>
  )

}

function MyDetails(){
  const name = 'Mahbub';
  const roll = 49;
  const uni ={ name: 'BUP', established: 2008 };
  
  return (
    <h3>My name is {name} and my roll number is {roll}. <br /> I am currently a student of {uni.name} which was established in {uni.established}</h3>
  )
}

function Student(){
  const name = 'Mahbub';
  const income = 2000;
  return (
    <div className='student'>
      <h3>My name is: {name}</h3>
      <h4>My income is {income}</h4>
    </div>
  )
}

function Employee(){
  const name = 'Mahbub';
  const income = 20000;
  const devStyle ={
    border: '2px solid purple',
    borderRadius: '20px'
  }
  return (
    <div style={devStyle}>
      <h3>My name is: {name}</h3>
      <h4>My income is {income}</h4>
    </div>
  )
}

function Developer(){
  const name = 'Mahbub';
  const age = 24;
  return (
    <div style={{ 
      border: '2px solid purple',
      borderRadius: '20px'
     }}>
      <h3>My name is: {name}</h3>
      <h4>My age is {age}</h4>
    </div>
  )
}

function JobApply(props){
  return (
    <div>
      <h3>Applying for the Job Title: {props.name}</h3>
      <p>Monthly Salary: {props.salary} </p>
    </div>
  )
}

function Faculty({name, salary="No Salary"}){
  return (
    <div>
      <h3>Job Title: {name}</h3>
      <p>Salary: {salary} </p>
    </div>
  )
}
export default App
