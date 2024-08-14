import './App.css';
// import Greet from './components/Greet';
// import Message from './components/Message';
// import Counter from './components/Counter';
// import FunctionClick from './components/FunctionClick';
// import ClassClick from './components/ClassClick';
// import UserGreeting from './components/UserGreeting';
// import PackingList from './components/PackingList';
// import PeopleList from './components/PeopleList';
// import StyleSheet from './styles/StyleSheet';
// import Inline from './styles/Inline';
// import Read from './components/Read';
// import Form from './formcomponents/Form';
// import LifeCycleA from './formcomponents/LifeCycleA';
//import Users from './http/Users';
//import Weather from './components/Weather';
//import PostForm from './http/PostForm';
// import HookCounter from './hooks/HookCounter';
// import ClassCounter from './hooks/ClassCounter';
// import UseStatePrevCount from './hooks/UseStatePrevCount';
// import UseStateObject from './hooks/UseStateObject';
//import HookArray from './hooks/HookArray';
// import CounterOne from './hooks/useEffect/CounterOne';
// import ClassCounterOne from './hooks/useEffect/ClassCounterOne';
import ClassMouse from './hooks/useEffect/ClassMouse';
import HookMouse from './hooks/useEffect/HookMouse';
import MouseContainer from './hooks/useEffect/MouseContainer';

function App() {
  return (
 <div className="App">
    
   
    {/* <HookArray/> */}
     {/* <CounterOne/>  
    <ClassCounterOne/> */}
    <ClassMouse/>
    <HookMouse/>
    <MouseContainer/>
 </div>
  );
}

export default App;
