
import "./App.css";
import ConTextBar from './components/ContextBar/ContextBar.js';
import WrittingBox from './components/WrittingBox/WrittingBox.js'
import ParagraphArea from './components/ParagraphArea/ParagraphArea.js'
import {useState, useEffect} from 'react';

const App = () => {

  const [wpm, setWpm] = useState(20);

  let paragraph = "October arrived, spreading a damp chill over the grounds and into the castle. Madam Pomfrey, the nurse, was kept busy by a sudden spate of colds among the staff and students. Her Pepperup potion worked instantly, though it left the drinker smoking at the ears for several hours afterward. Ginny Weasley, who had been looking pale, was bullied into taking some by Percy. The steam pouring from under her vivid hair gave the impression that her whole head was on fire";
  let textArray = paragraph.split(" ");

  const CheckTheInput = () => {
    
  };

  return (
    <>
    <div className = "App" >
      <ConTextBar wpm = {wpm}/>
      <ParagraphArea paragraph = {paragraph}/>
      <WrittingBox/>
    </div>
    </>
  );
};

export default App;
