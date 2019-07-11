import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const good_fdbk = 'good'
const neutral_fdbk = 'neutral'
const bad_fdbk = 'bad'

let all = 0, average = 0

const Button = (props) => {
    return (
        <button onClick={props.onClick}>{props.feedback}</button>
    )
}

const Statistics = (props) => {
    if (props.all === 0) {
        return (<>No feedback given</>)
    }
    return (
        <div>
            {good_fdbk} {props.good}<br />
            {neutral_fdbk} {props.neutral}<br />
            {bad_fdbk} {props.bad}<br />
            all {props.all}<br />
            average {average=(props.good - props.bad) / props.all}<br />
            positive {props.good / props.all * 100}%
        </div>
    )
}
  

const App = () => {
    // save clicks of each button to own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const incGoodFdbk = () => setGood(good + 1);
    const incNeutralFdbk = () => setNeutral(neutral + 1);
    const incBadFdbk = () => setBad(bad + 1);

    all = good + neutral + bad

    return (
        <div>
            <h1>give feedback</h1>
            <Button feedback={good_fdbk} onClick={incGoodFdbk} />
            <Button feedback={neutral_fdbk} onClick={incNeutralFdbk} />
            <Button feedback={bad_fdbk} onClick={incBadFdbk} />
            <h1>statistics</h1>
            <Statistics good={good} neutral={neutral} bad={bad} all={good + neutral + bad}/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))

export default App;