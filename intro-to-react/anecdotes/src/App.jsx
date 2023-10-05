import { useState } from "react";

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));
  const copy = [...votes];
  const handleAnecdoteClick = () => {
    anecdotes[setSelected(Math.floor(Math.random() * anecdotes.length))];
  };
  const handleVoteClick = () => {
    copy[selected] += 1;
    setVotes(copy);
  };
  console.log(votes);
  const mostVotes = votes.indexOf(Math.max(...votes));
  console.log(mostVotes, anecdotes[mostVotes]);
  return (
    <>
      <h1>Anecdote of the day!</h1>
      <div>
        {anecdotes[selected]} has {votes[selected]} votes
      </div>
      <Button text="New Anecdote" onClick={handleAnecdoteClick} />
      <Button text="Add Vote" onClick={handleVoteClick} />
      <h1>Anecdote with the most votes!</h1>
      <div>
        {anecdotes[mostVotes]} has {votes[mostVotes]} votes!
      </div>
    </>
  );
};

export default App;
