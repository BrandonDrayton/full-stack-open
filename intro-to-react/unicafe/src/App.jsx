import React, { useState } from "react";

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
    <tr>
      <td>{text}:</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad, sum, avg, positive }) => {
  const lines = [
    { text: "Good", value: good },
    { text: "Neutral", value: neutral },
    { text: "Bad", value: bad },
    { text: "All", value: sum },
    { text: "Average", value: avg },
    { text: "Positive", value: positive },
  ];

  return (
    <table>
      <tbody>
        {lines.map((line, index) => (
          <StatisticLine key={index} text={line.text} value={line.value} />
        ))}
      </tbody>
    </table>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = (setter) => () => {
    setter((prev) => prev + 1);
  };

  const sum = good + neutral + bad;
  const avg = sum === 0 ? 0 : (good - bad) / sum;
  const positive = sum === 0 ? 0 : (good / sum) * 100;

  return (
    <div>
      <Buttons
        onBadClick={handleClick(setBad)}
        onGoodClick={handleClick(setGood)}
        onNeutralClick={handleClick(setNeutral)}
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
            avg={avg.toFixed(2)}
            positive={positive.toFixed(2) + "%"}
          />
        )}
      </div>
    </div>
  );
};

export default App;
