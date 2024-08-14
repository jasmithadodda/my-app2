import './App.css';
import { createContext } from "react";
import ComponentA from './hooks/contextReducer/ComponentA';
import ComponentB from './hooks/contextReducer/ComponentB';
import ComponentC from './hooks/useContext/ComponentC'


export const ThemeContext = createContext(null);
const initialState = 0
const reducer = (state,action) => {

  switch(action){
      case 'increment': return state+1
      case 'decrement' : return state -1
      case 'reset':   return initialState
      default: return state

  }
}

function App() {
  return (
 <div>
      <ComponentA/>
      <ComponentB/>
      <ComponentC/>
</div>
  );
}

export default App;
