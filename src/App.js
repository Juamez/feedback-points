import React, { useState } from 'react';
import './App.css';
import Buttons from './Buttons';
import Statistics from './Statistics';

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodFeedback = () => setGood(good) + 1 
  const handleNeutralFeedback = () => setNeutral(neutral) + 1
  const handleBadFeedback = () => setBad(bad) + 1

  const sumAll = () => good + neutral + bad

  const average = () => ((good + (bad * -1)) / sumAll())

  const positivePercentage = () => (good / sumAll()) * 100

  return (
    <div className="App">
      <h2>Give feedback</h2>
      <Buttons
        eventGood={handleGoodFeedback} 
        eventNeutral={handleNeutralFeedback}
        eventBad={handleBadFeedback}
        textG={'Good'}
        textN={'Neutral'}
        textB={'Bad'}
        />
      <h2>Statistics</h2>
      <Statistics 
        good={good}
        bad={bad}
        neutral={neutral}
        all={sumAll()}
        average={average}
        positive={positivePercentage}
      />
    </div>
  );
}

export default App;
