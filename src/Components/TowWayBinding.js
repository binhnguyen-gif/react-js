import { useState } from "react";

// const gifts = [
//     'CPU 19',
//     'RAM 32 RGB',
//     'RGB Keyboard'
// ]

const courses = [
  { id: 1, name: "HTML<CSS" },
  { id: 2, name: "Javascript" },
  { id: 3, name: "React js" },
];

function TwoWayBinding() {
  // const [reward, setReward] = useState("Chưa có phần thưởng");
  // const [name, setName] = useState('')
  //   const [checked, setChecked] = useState(2);
  const [checked, setChecked] = useState([]);
  //   const handleSubmit = () => {
  //     console.log(checked);
  //   };
  // const handleReward = () => {
  //     setReward(() => gifts[Math.floor(Math.random() * gifts.length)])
  //     console.log(Math.floor(Math.random() * gifts.length))
  // }
  console.log(checked);
  const handleCheckBox = (id) => {
    setChecked((prev) => {
      const isCheck = checked.includes(id);
      if (isCheck) {
        return checked.filter(item => item !== id)
      } else {
        return [...prev, id];
      }
    });
  };

  return (
    <div>
      {/* <h1>{reward}</h1>
        <button onClick={handleReward}>Lấy thưởng</button> */}
      {/* <input value={name} onChange={e => setName(e.target.value)}  />
        <button onClick={() => setName("Nguyen Van A")}>Change</button>  */}
      {/* {courses.map(course => (
            <div key={course.id}>
                <input type="radio" checked={checked === course.id} onChange={() => setChecked(course.id)} />
                {course.name}
            </div>
        ))}
       <button onClick={handleSubmit}>Change</button>  */}

      {courses.map((course) => (
        <div key={course.id}>
          <input
            type="checkbox"
            checked={checked.includes(course.id)}
            onChange={() => handleCheckBox(course.id)}
          />
          {course.name}
        </div>
      ))}
    </div>
  );
}

export default TwoWayBinding;
