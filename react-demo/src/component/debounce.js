import React, { useState }from 'react'
import Content from '../hocomponent/content'
const styles = {
  display: "flex",
  flexDirection: "column"
}

const debounce = (fn, delay) => {
  let timer = null
  return(...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}
const DebounceCode = () => {
  return(
    <pre>
      {"const debounce = " + debounce.toString()}
    </pre>
  )
}
const DebounceConsole = () => {
  const [num, setNum] = useState(0)
  return(
    <div style={styles}>
      <button
        onClick={debounce(()=> setNum(num + 1), 1000)}
      >debounce 快速点击</button>
      <span>{num}</span>
    </div>
  )
}


export default Content(DebounceCode, DebounceConsole)