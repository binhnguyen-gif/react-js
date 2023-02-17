import { useReducer, useRef } from "react";

// Inint state
const initState = {
  job: "",
  jobs: [],
};

// Actions
const SET_JOB = "set_job";
const ADD_JOB = "add_job";
const DELETE_JOB = "delete_job";

const setJob = (payload) => {
  return {
    type: SET_JOB,
    payload,
  };
};

const addJob = (payload) => {
  return {
    type: ADD_JOB,
    payload,
  };
};

const deleteJob = (payload) => {
  return {
    type: DELETE_JOB,
    payload,
  };
};

const reducer = (state, action) => {
  let newState;
  switch (action.type) {
    case SET_JOB:
      newState = {
        ...state,
        job: action.payload,
      };
      break;
    case ADD_JOB:
      newState = {
        ...state,
        jobs: [...state.jobs, action.payload],
      };
      break;
    case DELETE_JOB:
      const newJobs = [...state.jobs];
      newJobs.splice(action.payload, 1);
      newState = {
        ...state,
        jobs: newJobs
      }
      break;
    default:
      throw new Error("Invalid action");
  }
  return newState;
};

function ReducerComponent1() {
  const [state, dispatch] = useReducer(reducer, initState);
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
