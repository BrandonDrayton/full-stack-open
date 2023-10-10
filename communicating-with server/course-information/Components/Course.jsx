import React from "react";

const Course = ({ course }) => {
  return (
    <>
      <Header title={course.name} />
    </>
  );
};
const Header = ({ title }) => {
  return <h1>{title}</h1>;
};

export default Course;
