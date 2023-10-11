import React from "react";

const Course = ({ course }) => {
  return (
    <>
      <Header title={course.name} />
      <Content parts={course.parts} />
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
        <div
          key={part.id}
          text={part.name}
          value={part.exercises}
          {...console.log(part.id)}
        >
          {console.log(part.name)}
          {part.name}: {part.exercises}
        </div>
      ))}
    </>
  );
};
export default Course;
