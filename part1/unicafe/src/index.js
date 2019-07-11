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
    return (
        <div>
            {good_fdbk} {props.good}<br />
            {neutral_fdbk} {props.neutral}<br />
            {bad_fdbk} {props.bad}<br />
            all {all=props.good + props.neutral + props.bad}<br />
            average {all === 0 ? 0 : average=(props.good - props.bad)/all}<br />
            positive {all === 0 ? 0 : props.good / all * 100}%
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

    return (
        <div>
            <h1>give feedback</h1>
            <Button feedback={good_fdbk} onClick={incGoodFdbk} />
            <Button feedback={neutral_fdbk} onClick={incNeutralFdbk} />
            <Button feedback={bad_fdbk} onClick={incBadFdbk} />
            <h1>statistics</h1>
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))

export default App;