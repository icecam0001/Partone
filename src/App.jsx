import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Course from './components/Course';

const Header = (props) => {
  return (
    <header>
      <h1>{props.course}</h1>

    </header>
  )
}
const Part1 = (props) => {
  return (
    <header>
      <p>{props.name} {props.exercises}</p>
    </header>
  )
}
const Part2 = (props) => {
  return (
    <header>
      <p>{props.name} {props.exercises}</p>
    </header>
  )
}
const Part3 = (props) => {
  return (
    <header>
      <p>{props.name} {props.exercises}</p>
    </header>
  )
}
const Total = (props) => {
  return (
    <header>
      <p> {props.exercises1+props.exercises2+props.exercises3}</p>
    </header>
  )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header course={course.name} />
      <Part1 name={course.parts[0].name} exercises={course.parts[0].exercises} />
      <Part2 name={course.parts[1].name} exercises={course.parts[1].exercises} />
      <Part3 name={course.parts[2].name} exercises={course.parts[2].exercises} />
      <Total exercises1={course.parts[2].exercises} exercises2={course.parts[1].exercises} exercises3={course.parts[0].exercises}/>

   
    </div>
  )
}






export default App
