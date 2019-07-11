import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const allVotes = [0, 0, 0, 0, 0, 0]

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max))

debugger

const App = (props) => {
    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState(allVotes)

    const selectAnecdote = (selectedAnecdote) => {
        setSelected(selectedAnecdote)
    }

    const addVotes = (selectedAnec) => {
        const copy = [...votes]
        console.log(copy)
        copy[selectedAnec]++
        setVotes(copy)
    }

    return (
        <div>
            <h1>Anecdote of the day</h1>
            {props.anecdotes[selected]} <br/> has {votes[selected]} votes.
            <p>
                <button onClick={() => addVotes(selected)}>Vote</button>
                <button onClick={() => selectAnecdote(getRandomInt(5))}>Next anecdote</button>
            </p>


        </div>
    )
}

ReactDOM.render(
    <App anecdotes={anecdotes} votes={allVotes} />,
    document.getElementById('root')
)