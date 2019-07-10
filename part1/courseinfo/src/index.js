import React from 'react'
import ReactDOM from 'react-dom'
import { useState } from 'react'

const Header = (props) => {
    return (
        <h1>{props.course}</h1>
    )
}

const Part = (props) => {
    return (
        <p>
            {props.name} {props.noOfExercises}
        </p>
    )
}

const Content = (props) => {
    return (
        <div>
            <Part name={props.part1} noOfExercises={props.exercises1} />
            <Part name={props.part2} noOfExercises={props.exercises2} />
            <Part name={props.part3} noOfExercises={props.exercises3} />
        </div>
    )
}

const Total = (props) => {
    return (
        <p>
            Number of exercises {props.exercises} 
        </p>
    )
}

const Display = ({ counter }) => <div>You are visitor no: {counter}</div>

const OldButton = ({ btnText, counterVal }) => <button onClick={counterVal}>{btnText}</button>

const Button = ({ onClick, text }) => (
    <button onClick={onClick}>
        {text}
    </button>
  )

const History = (props) => {
    if (props.allClicks.length === 0) {
        return (
            <div>
                the app is used by pressing the buttons
            </div>
        )
    }
  
    return (
        <div>
            button press history: {props.allClicks.join(' ')}
        </div>
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
            exercises: 8
          },
          {
            name: 'State of a component',
            exercises: 14
          }
        ]
    }

    const [counter, setCounter] = useState(0)

    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    const [allClicks, setAll] = useState([])
  
    const handleLeftClick = () => {
      setAll(allClicks.concat('L'))
      setLeft(left + 1)
    }
  
    const handleRightClick = () => {
      setAll(allClicks.concat('R'))
      setRight(right + 1)
    }
  
    debugger

    return (
        <div>
            <Header course={course.name} />
            <Content    part1={course.parts[0].name} exercises1={course.parts[0].exercises} 
                        part2={course.parts[1].name} exercises2={course.parts[1].exercises}
                        part3={course.parts[2].name} exercises3={course.parts[2].exercises} 
                        />
            <Total exercises={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}/>
            <Display counter={counter} />
            <OldButton btnText="Plus" counterVal={() => setCounter(counter + 1)} />
            <OldButton btnText="Minus" counterVal={() => setCounter(counter - 1)} />
            <OldButton btnText="Reset" counterVal={() => setCounter(0)} />
            <div>
            <p>
                {left}
                <Button onClick={handleLeftClick} text='left' />
                <Button onClick={handleRightClick} text='right' />
                {right}
            </p>
            <History allClicks={allClicks} />
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))

export default App;