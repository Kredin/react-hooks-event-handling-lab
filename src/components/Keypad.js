// Code Keypad Component Here
import React, { useState } from "react";

function Keypad() {
  const [password, setPassword] = useState("");
  return (
    <div>
      <input
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          console.log("Entering password...");
        }}
      />
    </div>
  );
}

export default Keypad;
