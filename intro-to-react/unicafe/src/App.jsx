import { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
    console.log(good);
  };
  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
    console.log(neutral);
  };
  const handleBadClick = () => {
    setBad(bad + 1);
    console.log(bad);
  };
  return (
    <div>
      <div>
        <h1>Give Feedback</h1>
        <button onClick={handleGoodClick}>GOOD</button>
        <button onClick={handleNeutralClick}>NEUTRAL</button>
        <button onClick={handleBadClick}>BAD</button>
      </div>
    </div>
  );
};

export default App;
