import React, { useState } from "react";

const Question = ({ question }) => {
  const [check, setCheck] = useState(false);

  const onChangeHandler = (event) => {
    setCheck(event.target.checked);
  };

  return (
    <div>
      <input type="checkbox" onChange={onChangeHandler} />
      {question.question}
      {check ? "Yes" : "No"}
    </div>
  );
};

export default Question;
