import React from 'react'
import ReactDOM from 'react-dom'

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

const App = () => {
    const course = 'Half Stack application development'
    const parts = [
        {
            name: 'Fundamentals of React',
            exercises: 10
        },
        {
            name: 'Using props to pass data',
            exercises: 11
        },
        {
            name: 'State of a component',
            exercises: 14
        }
    ]

    return (
        <div>
            <Header course={course} />
            <Content    part1={parts[0].name} exercises1={parts[0].exercises} 
                        part2={parts[1].name} exercises2={parts[1].exercises}
                        part3={parts[2].name} exercises3={parts[2].exercises} 
                        />
            <Total exercises={parts[0].exercises + parts[1].exercises + parts[2].exercises}/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))

export default App;