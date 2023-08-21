import { useState } from "react";
import UseMemoComponent from "./components/UseMemoComponent";
import UseCallbackComponent from "./components/useCallbackComponent";

function App() {
  const[isD, setIsD] = useState(true);

  setInterval(()=>{setIsD(!isD)});

  return (
    <div className="App">
      <UseMemoComponent />
      <UseCallbackComponent/>
    </div>
  );
}

export default App;
