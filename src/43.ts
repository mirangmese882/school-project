import { useState } from "react";

function ExampleComponent() {
  const [color, setColor] = useState("red");

  function changeColor(color) {
    setColor(color);
  }

  return (
    <div>
      <input type="text" value={color} onChange={(e) => changeColor(e.target.value)} />
      <button onClick={() => setColor("green")}>Change Color</button>
    </div>
  );
}

export default ExampleComponent;
