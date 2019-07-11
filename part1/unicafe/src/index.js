import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
    return (
        <button onClick={props.onClick}>{props.feedback}</button>
    )
}

const App = () => {
    const good_fdbk = 'good'
    const neutral_fdbk = 'neutral'
    const bad_fdbk = 'bad'

    // save clicks of each button to own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const incGoodFdbk = () => setGood(good + 1);
    const incNeutralFdbk = () => setNeutral(neutral + 1);
    const incBadFdbk = () => setBad(bad + 1);

    let all = 0, average = 0

    return (
        <div>
            <h1>give feedback</h1>
            <Button feedback={good_fdbk} onClick={incGoodFdbk} />
            <Button feedback={neutral_fdbk} onClick={incNeutralFdbk} />
            <Button feedback={bad_fdbk} onClick={incBadFdbk} />
            <h1>statistics</h1>
            {good_fdbk} {good}<br />
            {neutral_fdbk} {neutral}<br />
            {bad_fdbk} {bad}<br />
            all {all=good + neutral + bad}<br />
            average {all === 0 ? 0 : average=(good - bad)/all}<br />
            positive {all === 0 ? 0 : good / all * 100}%
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))

export default App;