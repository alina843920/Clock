import { useState } from "react";
import Clock from "./components/Clock/Clock";
const App = () => {
  const [isClockVisible, setIsClockVisible] = useState(false);

  const toggleClockVisibility = () => {
    setIsClockVisible(!isClockVisible);
  };

  return (
    <div>
      <button onClick={toggleClockVisibility}>
        {isClockVisible ? "stop" : "start"}
      </button>
      {isClockVisible && <Clock />}
    </div>
  );
};

export default App;
