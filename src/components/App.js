import React from "react";
import QuestionList from "./QuestionList";

const questions = [
  { question: "Do you live in Canada?" },
  { question: "Do you like hokey?" },
];

const App = () => {
  return (
    <div>
      <QuestionList questions={questions} />
    </div>
  );
};

export default App;
