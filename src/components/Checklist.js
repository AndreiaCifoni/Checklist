import React, { useState } from "react";

const Checklist = ({ questionary }) => {
  const [check, setCheck] = useState(false);

  const onChangeHandler = (event) => {
    setCheck(event.target.checked);
  };

  const questions = questionary.map((question) => {
    return (
      <div>
        <input type="checkbox" onChange={onChangeHandler} />
        {question.query}
        {check ? "Yes" : "No"}
      </div>
    );
  });

  return (
    <form>
      <ul>
        <li>
          <label>{questions}</label>
        </li>
      </ul>
    </form>
  );
};

export default Checklist;
