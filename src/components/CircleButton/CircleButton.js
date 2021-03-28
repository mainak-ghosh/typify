import React from "react";

const CircleButton = (props) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 80 80"
        width="25"
        height="25"
      >
        <circle
          cx="40"
          cy="40"
          r="20"
          fill= {props.color}
          id="circle"
        />
      </svg>
    </>
  );
};

export default CircleButton;
