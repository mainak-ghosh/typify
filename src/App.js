
import "./App.css";
import ConTextBar from './components/ContextBar/ContextBar.js';
import WrittingBox from './components/WrittingBox/WrittingBox.js'
import ParagraphArea from './components/ParagraphArea/ParagraphArea.js'

const App = () => {

  

  return (
    <>
    <div className = "App" >
      <ConTextBar/>
      <ParagraphArea/>
      <WrittingBox/>
    </div>
    </>
  );
};

export default App;
