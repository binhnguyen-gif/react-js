// import logo from './logo.svg';
// import { useContext, useState } from "react";
import "./App.css";
// import ContextComponent from "./Components/ContextComponent";
// import Paragraph from "./Components/Paragraph";
// import { ThemeContext } from "./Components/ThemeContext";
// import { StoreContext } from "./store";
import { useStore, actions } from "./store";

// import Paragraph from './Components/Paragraph';
// import Memouse from './Components/Memouse';
// import ReducerComponent from './Components/ReducerComponent';
// import ReducerComponent1 from './Components/ReducerComponent1';
// import Ref from './Components/Ref';
// import LayoutEffect from './Components/LayoutEffect';
// import Content from './Components/Content';
// import Preview from './Components/Preview';
// import Effect from './Components/Effect';
// import TodoList from './Components/TodoList';
// import StateComponent from './Components/StateComponent';
// import TwoWayBinding from './Components/TowWayBinding';

// function App() {
//   const [show, setShow] = useState(false);
//   const context = useContext(ThemeContext)
//   return (
//       <div className="App">
//         <button onClick={() => setShow(!show)}>Toogle</button>
//         <button onClick={context.toogleTheme}>Toogle</button>
//         {/* {show && <ContextComponent />} */}
//         <Paragraph />
//       </div>
//   );
// }

function App() {
  const [state, dispatch] = useStore();
  const { todos, todoInput } = state;

  console.log(state);
  const hanldeAdd = () => {
    dispatch(actions.addTodoInput(todoInput));
  };
  console.log(todos);
  return (
    <div>
      <input
        value={todoInput}
        placeholder="Enter  todo..."
        onChange={(e) => {
          dispatch(actions.setTodoInput(e.target.value));
        }}
      />
      <button onClick={hanldeAdd}>Add</button>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </div>
  );
}

export default App;
