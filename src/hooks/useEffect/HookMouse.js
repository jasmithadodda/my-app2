import React, { useEffect, useState } from 'react'

export default function HookMouse() {
    const[x,setX] = useState(0)
    const[y,setY] = useState(0)

    const logMousePosition = e => {
        console.log('mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        //this gets called when the comopnent mounts
        console.log('use effect called--component mounted')
        window.addEventListener('mousemove',logMousePosition)

         //this is called when the compnent unmount
         return () => {
            console.log('component unmounting')
            window.removeEventListener('mousemove',logMousePosition)
          }
    },[] //this empty array will add the listener only once
    )


  return (
    <div>
        Hooks x- {x} Y-{y}
    </div>
  )
}
