import { useState } from "react"

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>
}

const StatisticLine = ({ text, value }) => {
  return (
    <tbody>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    </tbody>
  )
}
const Statistics = ({ good, neutral, bad }) => {
  if (good + neutral + bad == 0) {
    return (
      <>
        <h1>statistics</h1>
        <div>No feedback given</div>
      </>
    )
  }

  const average = (good * 1 + bad * -1) / (good + bad + neutral)
  const positive = (good / (good + bad + neutral)) * 100 + "%"
  return (
    <>
      <h1>statistics</h1>
      <table>
        <StatisticLine text={"good"} value={good}></StatisticLine>
        <StatisticLine text={"neutral"} value={neutral}></StatisticLine>
        <StatisticLine text={"bad"} value={bad}></StatisticLine>
        <StatisticLine text={"average"} value={average}></StatisticLine>
        <StatisticLine text={"positive"} value={positive}></StatisticLine>
      </table>
    </>
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text={"good"}></Button>
      <Button onClick={() => setNeutral(neutral + 1)} text={"neutral"}></Button>
      <Button onClick={() => setBad(bad + 1)} text={"bad"}></Button>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </>
  )
}

export default App
