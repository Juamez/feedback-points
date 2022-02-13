import { useState } from 'react'; 
import './App.css';

const Button = ({ event, text }) => {
  return <button onClick={event}>{text}</button>
}

const Paragraph = ({ text, value, symbol }) => (
  <p>
    {text}: {value} {symbol}
  </p>
);

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const incrementGoodFeedback = () => setGood(good + 1);
  const incrementNeutralFeedback = () => setNeutral(neutral + 1);
  const incrementBadFeedback = () => setBad(bad + 1);

  const sumAll = () => good + neutral + bad

  const average = () => ((good + (bad * -1)) / sumAll())

  const positivePercentage = () => (good / sumAll()) * 100

  return (
    <div className="App">
      <h2>Give feedback</h2>
      <Button event={incrementGoodFeedback} text={'Good'}/>
      <Button event={incrementNeutralFeedback} text={'Neutral'}/>
      <Button event={incrementBadFeedback} text={'Bad'}/>
      <h2>Statistics</h2>
      <Paragraph text={"Good"} value={good} />
      <Paragraph text={"Neutral"} value={neutral} />
      <Paragraph text={"Bad"} value={bad} />
      <Paragraph text={"All"} value={sumAll()}/>
      <Paragraph text={'Average'} value={average()} />
      <Paragraph text={'Positive'} value={positivePercentage()} symbol={'%'} />
    </div>
  );
}

export default App;
