import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    // Update the document title when 'text' changes
    document.title = text;
  }, [text]);

  useEffect(() => {
    // Reset the 'count' to 0 after 5 seconds
    const timer = setTimeout(() => {
      setCount(0);
    }, 5000);

    // Clean up the timer if the component unmounts or if the dependencies change
    return () => clearTimeout(timer);
  }, []); // Empty dependencies array to run only once on mount

  console.log("Component rendering");

  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>
        I've been clicked {count} times
      </button>
      <input
        type="text"
        placeholder="Type away..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}

export default App;
