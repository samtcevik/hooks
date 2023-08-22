import { useState } from "react";
import UseMemoComponent from "./components/UseMemoComponent";
import UseCallbackComponent from "./components/useCallbackComponent";
import UseReducerComponent from "./components/UseReducerComponent";

function App() {
  const[isD, setIsD] = useState(true);

  setInterval(()=>{setIsD(!isD)});

  return (
    <div className="App">
      <UseMemoComponent />
      <UseCallbackComponent/>
      <UseReducerComponent/>
    </div>
  );
}

export default App;
