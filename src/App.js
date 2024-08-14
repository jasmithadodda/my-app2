import './App.css';
//import ComponentC from './hooks/useContext/ComponentC';
import { createContext } from "react";
import CounterOne from "./hooks/useReducer/CounterOne";

export const ThemeContext = createContext(null);

function App() {
  return (
 <div>
      <CounterOne/>
</div>
  );
}

export default App;
