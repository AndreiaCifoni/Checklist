import React from "react";
import Checklist from "./Checklist";

const questionary = [
  { id: "1", query: "Do you live in Canada?" },
  { id: "2", query: "Do you like hokey?" },
];

const App = () => {
  return (
    <div>
      <Checklist questionary={questionary} />
    </div>
  );
};

export default App;
