import React from 'react'

// // destructing the props
// export default function Greet({name,alias}) {
//     console.log(name+alias)
//   return (
//     <div>
//       <h1>Welcome to react {name} {alias}</h1>
      
//     </div>
//   )
// }

// // destructing the props
// export default function Greet(props) {
//     console.log(props)
//   return (
//     <div>
//       <h1>Welcome to react {props.name} {props.alias}</h1>
      
//     </div>
//   )
// }

export default function Greet(props) {
    const {name,alias}=props
  return (
    <div>
      <h1>Welcome to react {name} {alias}</h1>
      
    </div>
  )
}
 