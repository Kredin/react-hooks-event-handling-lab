// Code EyesOnMe Component Her
import React from "react";

function handleOnFocus() {
  console.log("Good!");
}

function handleOnBlur() {
  console.log("Hey! Eyes on me!");
}

function EyesOnMe() {
  return (
    <div>
      <button
        onFocus={() => {
          console.log("Good!");
        }}
        onBlur={handleOnBlur}
      >
        Eyes on me
      </button>
    </div>
  );
}

export default EyesOnMe;
