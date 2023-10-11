import React from "react";

const Course = ({ course }) => {
  return (
    <>
      <Header title={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  );
};
const Header = ({ title }) => {
  return <h1>{title}</h1>;
};

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part) => (
        <div key={part.id} text={part.name} value={part.exercises}>
          {part.name}: {part.exercises}
        </div>
      ))}
      ;
    </>
  );
};
const Total = ({ parts }) => {
  const totalExercises = parts.reduce((acc, current) => {
    return acc + current.exercises;
  }, 0);

  return <div>Total exercises: {totalExercises}</div>;
};

export default Course;
