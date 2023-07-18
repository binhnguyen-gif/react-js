import { useState } from "react";
// useState trạng thái của dữ liệu (dữ liệu thay đổi) 
// dữ liệu thay đổi gì giao diện thay đổi đó


const arr1 = [100, 200, 300, 400];
function StateComponent() {
  // const total = arr1.reduce((total, current) =>  total + current);

  const [state, setState] = useState(
    arr1.reduce((total, 
      ) => {
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

// Dùng khi nào?
//  Khi muốn dữ liệu thay đổi thì giao diện tụ động được cập nhật(render lại dữ liệu)

// Cách dùng
// Lưu ý
// - Component được re-render sau khi setState
// - Intitial state chỉ dùng cho lần đầu
// - Set state với callback?
// - Initial state với callback?
// - Set state là thay thế state bằng giá trị mới
