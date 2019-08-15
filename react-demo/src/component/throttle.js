import React, { useState } from 'react'
import Content from '../hocomponent/content'

const styles = {
  display: "flex",
  flexDirection: "column"
}

const throttle = (fn, delay = 500) => {
  let flag = true
  return (...args) => {
    if(!flag) return
    flag = false
    setTimeout(() => {
      fn.apply(this, args)
      flag = true
    }, delay)
  }
}

const ThrottleCode = () => {
  return(
    <pre>
      {"const throttle = " + throttle.toString()}
    </pre>
  )
}

const ThrottleConsole = () => {
  const [num, setNum] = useState(0)
  return (
    <div style={styles}>
      <button
        onClick={throttle(()=> setNum(num + 1), 1000)}
      >throttle 快速点击</button>
      <span>{num}</span>
    </div>
  )
}

export default Content(ThrottleCode, ThrottleConsole)