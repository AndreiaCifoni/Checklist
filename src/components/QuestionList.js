import React from "react";
import Question from "./Question";

const QuestionList = ({ questions }) => {
  return (
    <React.Fragment>
      {questions.map((question) => {
        return <Question question={question} />;
      })}
    </React.Fragment>
  );
};

export default QuestionList;
