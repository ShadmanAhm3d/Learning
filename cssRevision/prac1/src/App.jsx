import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css"

function App() {
  return (
    <>
      <div>
        <TheComp />
      </div>
    </>
  );
}

//color changer
function TheComp() {

  const [color , setColor] = useState("red");
  const [ishidden, setIshidden] = useState(false)



  function handler(e){

    const newi = e.target.textContent.toLowerCase();
    const x = e.target.hidden;
    
    setIshidden(true);
    console.log(e)
    setColor(newi)

  }
  return (
    <div>
      <div id="main" style={{backgroundColor : color}}>
        <div id="bottom">
          <button>Red</button>
          <button onClick={handler}>black</button>
          <button onClick={handler}>blue</button>
          <button>aqua</button>
          <button>pink</button>
          <button>purple</button>
        </div>
      </div>
    </div>
  );
}

export default App;
