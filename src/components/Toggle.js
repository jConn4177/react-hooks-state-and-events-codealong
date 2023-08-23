import React, { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(true);
  const onClickHandler = () => setIsOn((isOn) => !isOn);
  const color = isOn ? "red" : "white";

  return (
    <button onClick={onClickHandler} style={{ background: color }}>
      {isOn ? "On" : "Off"}
    </button>
  );
}

export default Toggle;
