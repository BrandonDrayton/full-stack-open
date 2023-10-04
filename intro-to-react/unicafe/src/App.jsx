import { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
  };
  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };
  const handleBadClick = () => {
    setBad(bad + 1);
  };

  const sum = good + neutral + bad;
  const avg = sum === 0 ? 0 : (good - bad) / sum;
  const positive = sum === 0 ? 0 : good / sum;

  return (
    <div>
      <div>
        <h1>Give Feedback</h1>
        <button onClick={handleGoodClick}>GOOD</button>
        <button onClick={handleNeutralClick}>NEUTRAL</button>
        <button onClick={handleBadClick}>BAD</button>
      </div>
      <div>
        <h2>Statistics</h2>
        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>All: {sum}</li>
          <li>Average: {avg}%</li>
          <li>Positive: {positive}%</li>
        </ul>
      </div>
    </div>
  );
};

export default App;
