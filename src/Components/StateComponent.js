import { useState } from "react";

const arr1 = [100, 200, 300, 400];
function StateComponent() {
  // const total = arr1.reduce((total, current) =>  total + current);

  const [state, setState] = useState(
    arr1.reduce((total, current) => {
      return total + current;
    })
  );
  const setValue = () => {
    setState(state + 1);
    // setState(prev => prev + 1);
    // setState(prev => prev + 1);
    // setState(prev => prev + 1);
  };

  const [info, setInfo] = useState({
    name: "Nguyen Van A",
    age: 18,
    address: "Ha Noi, A",
  });

  const handleUpdate = () => {
    setInfo({ ...info, bio: "Yen a" });
  };

  return (
    <div>
      <span>Value: {state}</span>
      <span>Info: {JSON.stringify(info)}</span>
      <br />
      <button onClick={setValue}>Check</button>
      <button onClick={handleUpdate}>handleUpdate</button>
    </div>
  );
}

export default StateComponent;
