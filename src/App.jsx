import { useState } from 'react'

const Average = (props) => {
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

const statsApp = (props) => {


  return (
    <div>
       <h1>Statistics</h1>
      <p>Good</p>
      {good}
      <p>Bad</p>
      {bad}
      <p>Neutral</p>
      {neutral}
      <p>Average</p>
      {averagee/total}
      <p>Positive</p>
      {good/total *100}
    </div>
  )
}
const StatisticsLine = ({text, value}) => {
  if (text === "positive"){
    return(
      <tr>
  <td>
    {text}
  </td>
  <td>
    {value}
  </td>
</tr>
    )
  }
  return(
    <tr>
    <td>
      {text}
    </td>
      <td>
       {value}
      </td>
    </tr>
  )

}
const Statistics = ({good, neutral, bad, averagee, total}) => {
  let positive = (100*good)/total

  return(
    <div>
      <h1>Statistics</h1>
    <StatisticsLine text ='good' value = {good} />

    <StatisticsLine text ='bad' value = {bad} />

    <StatisticsLine text ='neutral' value = {neutral} />
    
    <StatisticsLine text ='total' value = {total} />

    <StatisticsLine text ='average' value = {averagee/total} />
    
    <StatisticsLine text ='positive' value = {positive} />

    </div>


  )
}
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [averagee, setAveragee] = useState(0)
  const [total, setTotal] = useState(0)

 

  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    setTotal(total + 1)

  }
 const handleBadClick = () => {
  const updatedBad = bad + 1
  setBad(updatedBad)
  setAveragee(averagee - 1)
  setTotal(total + 1)

}
const handleGoodClick = () => {
  const updatedGood = good + 1
  setGood(updatedGood)
  setAveragee(averagee + 1)
  setTotal(total + 1)

}
  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleBadClick}>bad</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <Statistics good={good} neutral={neutral} averagee={averagee} total={total} bad={bad} />
    </div>
  )
}


export default App
