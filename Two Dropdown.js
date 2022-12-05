import React, { useState } from "react";
export default function App() {
  const [selected, setSelected] = useState(" ");
  const algorithm = [
    "Searching Algorithm",
    "Sorting Algorithm",
    "Graph Algorithm"
  ];
  const language = ["C++", "Java", "Python", "C#"];
  const dataStructure = ["Arrays", "LinkedList", "Stack", "Queue"];
  const changeSelectOptionHandler = (event) => {
    setSelected(event.target.value);
  };
  let type;
  let options;
  if (selected === "Algorithm") {
    type = algorithm;
  } else if (selected === "Language") {
    type = language;
  } else if (selected === "Data Structure") {
    type = dataStructure;
  }
  if (type) {
    options = type.map((el, ind) => (
      <option key={ind} defaultValue={ind?.[selected]}>
        {" "}
        {el}
      </option>
    ));
  }
  return (
    <div className="App">
      {" "}
      <h1>Jainex</h1>{" "}
      <select onChange={changeSelectOptionHandler}>
        {" "}
        <option>Algorithm</option> <option>Language</option>{" "}
        <option>Data Structure</option>{" "}
      </select>{" "}
      <select>
        {" "}
        {/** This is where we have used our options variable */ options}{" "}
      </select>{" "}
    </div>
  );
}
