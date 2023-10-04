import { useState } from "react";
const Buttons = ({ onBadClick, onGoodClick, onNeutralClick }) => {
  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={onGoodClick}>GOOD</button>
      <button onClick={onNeutralClick}>NEUTRAL</button>
      <button onClick={onBadClick}>BAD</button>
    </div>
  );
};

const StatisticLine = ({ text, value }) => {
  return (
    <tbody>
      <tr>
        <td>{text}:</td>
        <td>{value}</td>
      </tr>
    </tbody>
  );
};

const Statistics = ({ good, neutral, bad, sum, avg, positive }) => {
  return (
    <table>
      <StatisticLine text="Good" value={good} />
      <StatisticLine text="Neutral" value={neutral} />
      <StatisticLine text="Bad" value={bad} />
      <StatisticLine text="All" value={sum} />
      <StatisticLine text="Average" value={avg} />
      <StatisticLine text="Positive" value={good} />
    </table>
  );
};

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
      <Buttons
        onBadClick={handleBadClick}
        onGoodClick={handleGoodClick}
        onNeutralClick={handleNeutralClick}
      />
      <div>
        <h2>Statistics</h2>
        {sum === 0 ? (
          "No Feedback Given"
        ) : (
          <Statistics
            good={good}
            bad={bad}
            neutral={neutral}
            sum={sum}
            avg={avg}
            positive={positive}
          />
        )}
      </div>
    </div>
  );
};

export default App;
