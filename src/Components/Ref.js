import { useEffect, useRef, useState } from "react";

function Ref() {
  const [count, setCount] = useState(60);

  const timeId = useRef();
  const h1Ref = useRef();

  useEffect(() => {
    const rect = h1Ref.current.getBoundingClientRect()
    console.log(rect)
  }, [count]);

  const handleStart = () => {
    timeId.current = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    console.log("Start ->", timeId.current);
  };

  const handleStop = () => {
    clearInterval(timeId.current);
    console.log("Stop ->", timeId.current);
  };
  return (
    <div>
      <h1 ref={h1Ref}>{count}</h1>
      <button onClick={() => handleStart()}>Start</button>
      <button onClick={() => handleStop()}>Stop</button>
    </div>
  );
}

export default Ref;