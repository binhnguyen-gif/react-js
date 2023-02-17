// import logo from './logo.svg';
import { useContext, useState } from "react";
import "./App.css";
// import ContextComponent from "./Components/ContextComponent";
import Paragraph from "./Components/Paragraph";
import { ThemeContext } from "./Components/ThemeContext";

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

function App() {
  const [show, setShow] = useState(false);
  const context = useContext(ThemeContext)
  return (
      <div className="App">
        <button onClick={() => setShow(!show)}>Toogle</button>
        <button onClick={context.toogleTheme}>Toogle</button>
        {/* {show && <ContextComponent />} */}
        <Paragraph /> 
      </div>
  );
}

export default App;
