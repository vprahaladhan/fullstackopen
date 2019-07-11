import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const good_fdbk = 'good'
const neutral_fdbk = 'neutral'
const bad_fdbk = 'bad'

const Button = (props) => {
    return (
        <button onClick={props.onClick}>{props.feedback}</button>
    )
}

const Statistic = (props) => {
    return (
        <tbody>
            <tr>
                <td>{props.text}</td><td>{props.value}{props.text==="positive" ? '%' : ''}</td>
            </tr>
        </tbody>
    )
}

const Statistics = (props) => {
    if (props.all === 0) {
        return (<>No feedback given</>)
    }
    return (
        <table>
            <Statistic text={good_fdbk} value={props.good} />
            <Statistic text={neutral_fdbk} value={props.neutral} />
            <Statistic text={bad_fdbk} value={props.bad} />
            <Statistic text="all" value={props.all} />
            <Statistic text="average" value={(props.good - props.bad) / props.all} />
            <Statistic text="positive" value={props.good / props.all * 100} />
        </table>
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
            <Statistics good={good} neutral={neutral} bad={bad} all={good + neutral + bad}/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))

export default App;