import './App.css';
import ComponentC from './hooks/useContext/ComponentC';
import { createContext } from "react";

export const ThemeContext = createContext(null);

function App() {
  return (
 <div>
 <ThemeContext.Provider value="dark">
   <ComponentC />
 </ThemeContext.Provider>
</div>
  );
}

export default App;
