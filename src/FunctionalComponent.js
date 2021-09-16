import { useState, useEffect } from "react";

const FunctionalComponent = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("useEffect");
    return () => {console.log("func. comp. unmount")}
  },[counter])

  //! console.log("Func Counter: ", counter);

// useEffect(() => {
//     console.log("useEffect");
//     return () => {console.log("func comp unmount")}
// },[counter])

// console.log("Func Comp Rendered!")

  const increase = () => {
      setCounter(counter + 1);

  }

  return (
    <div className="function">
      <h2>Functional Component</h2>
      <p>Counter: {counter}</p>
      <button onClick={() => increase()}>Increase</button>

    </div>
  );
};
export default FunctionalComponent;