import { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div >
        <button className="bg-lime-700" onClick={() => setCount(count + 1)}>
          {" "}
          Increment{" "}
        </button>
        <button className="bg-rose-800" onClick={() => setCount(count - 1)}>
          Decrement
        </button>
      </div>
      <div>Current value is {count}</div>
    </div>
  );
};
export default Counter;
