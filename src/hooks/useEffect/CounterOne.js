import React, { useEffect, useState } from "react";

function CounterOne() {
    const [count, setCount] = useState(0);
    const [name,setName] = useState('')
    //useEffect will add the render method of class component -- 
    //re render the component when the state changes
    useEffect(
      () => {  
      //this call back will be executed after each rendering is done
          console.log('useEffect is updating the document title')
          document.title = `you clicked ${count} times`
      } ,[count]
)
//i want useeffect to be called only when the count is increment not when the name is updated
  return (
    <div>
      {" "}
      <input type="text"
        value = {name}
        onChange = { e => setName(e.target.value)}
    />
      <div>
        <button onClick={() => setCount(count + 1)}>
          clicked {count} times
        </button>
      </div>
    </div>
  );
}

export default CounterOne;