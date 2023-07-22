import { useReducer, useRef } from "react";
import { addJob, setJob, deleteJob } from "./actions";
import reducer from "./reducer";
import { initState } from "./reducer";
import logger from "./logger";

// 4. Dispatch
function ReducerComponent1() {
  const [state, dispatch] = useReducer(logger(reducer), initState);
  const { job, jobs } = state;

  const refJob = useRef();

  const handleSubmit = () => {
    dispatch(addJob(job));
    dispatch(setJob(""));
    refJob.current.focus();
  };
  return (
    <div style={{ padding: "0 20px" }}>
      <h1>Todo</h1>
      <input
        ref={refJob}
        value={job}
        placeholder="Enter todo ..."
        onChange={(e) => dispatch(setJob(e.target.value))}
      />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((value, index) => (
          <li key={index}>
            {value}
            <span onClick={() => dispatch(deleteJob(index))}> &times;</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReducerComponent1;
