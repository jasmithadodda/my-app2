import './App.css';
//import ComponentC from './hooks/useContext/ComponentC';
import { createContext } from "react";
import CounterTwo from './hooks/useReducer/CounterTwo';
// import CounterOne from "./hooks/useReducer/CounterOne";

export const ThemeContext = createContext(null);

function App() {
  return (
 <div>
      <CounterTwo/>
</div>
  );
}

export default App;
