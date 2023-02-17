import {  useLayoutEffect, useState } from "react";

function LayoutEffect() {
  const [count, setCount] = useState(0);

  useLayoutEffect(() => {
    if (count > 3) {
      setCount(0);
    }
  }, [count]);
  

  const handleCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      {count}
      <button onClick={() => handleCount()}>Count</button>
    </div>
  );
}

export default LayoutEffect;
