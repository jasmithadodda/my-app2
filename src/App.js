import './App.css';
import { createContext, useReducer} from "react";
import ComponentA from './hooks/contextReducer/ComponentA';
import ComponentB from './hooks/contextReducer/ComponentB';
import ComponentC from './hooks/useContext/ComponentC'


export const CountContext = createContext();
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
  const [count,dispatch] = useReducer(reducer,initialState)
  return (
 <div>
  <CountContext.Provider  value={{countState:count,countDispatch:dispatch}}>
      <ComponentA/>
      <ComponentB/>
      <ComponentC/>
  </CountContext.Provider>
</div>
  );
}

export default App;
