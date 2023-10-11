import React from "react";

const Course = ({ course }) => {
  return (
    <>
      {course.map((course) => (
        <>
          {console.log(course)}
          <Header key={course.id} title={course.name} />
          <Content key={`content-${course.id}`} parts={course.parts} />
          <Total parts={course.parts} />
        </>
      ))}
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
          <br />
        </div>
      ))}
    </>
  );
};

const Total = ({ parts }) => {
  const totalExercises = parts.reduce((acc, current) => {
    return acc + current.exercises;
  }, 0);

  return <div key="total">Total exercises: {totalExercises}</div>;
};

export default Course;
