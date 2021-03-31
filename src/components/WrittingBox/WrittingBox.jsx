import React from "react";
import "./WrittingBox.css";
import {useContext} from 'react';
import {ParagraphContext} from '../../ParagraphContext';

const WrittingBox = () => {

  const [inputValue, setInputValue] = React.useState("");
  const { paragraph, setWpm } = useContext(ParagraphContext);

  const handleSpace = (e) => {
      
    if (e.keyCode === 32) {
      setInputValue(e.target.value);
      e.currentTarget.value = "";
    }
  };

  return (
    <>
      <input
        type="text"
        className="WrittingBoxBody"
        placeholder="Write here"
        onKeyDown={handleSpace}
      ></input>
    </>
  );
};

export default WrittingBox;
