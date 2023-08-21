import { useState } from "react";
import UseMemoComponent from "./components/UseMemoComponent";

function App() {
  const[isD, setIsD] = useState(true);

  setInterval(()=>{setIsD(!isD)});
  
  return (
    <div className="App">
      <UseMemoComponent />
    </div>
  );
}

export default App;
