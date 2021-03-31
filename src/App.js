import "./App.css";
import ConTextBar from "./components/ContextBar/ContextBar.jsx";
import WrittingBox from "./components/WrittingBox/WrittingBox.jsx";
import ParagraphArea from "./components/ParagraphArea/ParagraphArea.jsx";
import { useState, useEffect } from "react";
import { ParagraphContext } from "./ParagraphContext";

const App = () => {
  const [wpm, setWpm] = useState(20);
  const [paragraph, setParagraph] = useState(
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  );

  let textArray = paragraph.split(" ");
  console.log("Array size is : ", textArray.length);

  let i = 0;
  textArray.forEach((element) => {
    console.log("Element [", i, "]", element);
    ++i;
  });

  const CheckTheInput = () => {
    setWpm(30);
  };

  useEffect(() => {
    setParagraph(
      "October arrived, spreading a damp chill over the grounds and into the castle. Madam Pomfrey, the nurse, was kept busy by a sudden spate of colds among the staff and students. Her Pepperup potion worked instantly, though it left the drinker smoking at the ears for several hours afterward. Ginny Weasley, who had been looking pale, was bullied into taking some by Percy. The steam pouring from under her vivid hair gave the impression that her whole head was on fire"
    );
  }, []);

  return (
    <>
      <div className="App">
        <ConTextBar wpm={wpm} />
        <ParagraphContext.Provider value={{ paragraph, setWpm }}>
          <ParagraphArea />
          <WrittingBox />
        </ParagraphContext.Provider>
      </div>
    </>
  );
};

export default App;
