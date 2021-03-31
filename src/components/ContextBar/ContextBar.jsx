import React from "react";
import "./ContextBar.css";
import CircleButton from "../CircleButton/CircleButton.jsx";
import PropTypes from "prop-types";

const ContextBar = ({ wpm }) => {
  return (
    <div className="Body">
      <p>WPM : {wpm}</p>
      <p>typify </p>
      <div>
        <CircleButton color="gold" />
        <CircleButton color="black" />
        <CircleButton color="red" />
      </div>
    </div>
  );
};

ContextBar.defaultProps = {
  wpm: 0,
};

ContextBar.propTypes = {
  wpm: PropTypes.number,
};

export default ContextBar;
