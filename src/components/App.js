import React from "react";
import "./../styles/App.css";


const App = () => {
  return (
    <div>
      const [count, setCount] = useState(0) function buttonClickHandler(e){" "}
      {
        // count++;

        setCount(count + 1)
      }
      return (
      <div>
        <p>Button clicked {count} times </p>
        <button onClick={buttonClickHandler}>Click me</button>
      </div>
      )
    </div>
  );
};

export default App;
