import React from "react";
import PropTypes from 'prop-types';


const CircleButton = ({color}) => {
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
          fill= {color}
          id="circle"
        />
      </svg>
    </>
  );
};

CircleButton.defaultProps = {
  color : 'red',
}

CircleButton.propTypes = {
  color : PropTypes.string,
}

export default CircleButton;
