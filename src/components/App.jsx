import React, { useState } from "react";

function App() {
  const [mouseOver, setMouseOver] = useState(false);
  function changeToBlack() {
    setMouseOver(true);
  }

  function changeToWhite() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: mouseOver ? "black" : "white" }}
        onMouseOver={changeToBlack}
        onMouseOut={changeToWhite}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
