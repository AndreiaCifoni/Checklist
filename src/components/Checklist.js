import React, { useState } from "react";

const Checklist = () => {
  const [check, setCheck] = useState(false);

  const onChangeHandler = (event) => {
    setCheck(event.target.checked);
  };

  return (
    <form>
      <input type="checkbox" onChange={onChangeHandler} />
      <label>ABC? {check ? "Yes" : "No"}</label>
    </form>
  );
};

export default Checklist;
