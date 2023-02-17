import { useState } from "react";

function TodoList() {
  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState(() => {
    const storagejson = JSON.parse(localStorage.getItem("jobs"));
    return storagejson ?? [];
  });

  const handleSubmit = () => {
    setJobs((prev) => {
      const newJobs = [...prev, job];
      const jsonJobs = JSON.stringify(newJobs);
      localStorage.setItem("jobs", jsonJobs);

      return newJobs;
    });
    setJob("");
  };

  const hanldeDelete = (id) => {
    setJobs(() =>
      jobs.filter((value, index) => {
        return index !== id;
      })
    );
  };

  return (
    <div>
      <input value={job} onChange={(e) => setJob(e.target.value)} />
      <button onClick={handleSubmit}>Add</button>
      <br />
      <ul>
        {jobs.map((val, index) => (
          <div key={index}>
            <li>{val}</li>
            <button onClick={() => hanldeDelete(index)}>Delete</button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
