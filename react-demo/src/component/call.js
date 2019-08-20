import React from 'react'
import Content from '../hocomponent/content'

const styles = {
  display: "flex",
  flexDirection: "column"
}

// 实现方法
// eslint-disable-next-line
Function.prototype.myCall = function(context) {
  context.fn = this || window
  let args = []
  for(let i = 0, len = arguments.length; i < len; i++) {
    args.push(arguments[i])
  }
  let result = context.fn(...args)
  delete context.fn
  return result
}

const array = [1]
// Array.prototype.push.myCall(array, 2, 3)

const CallCode = () => {
  return(
    <pre>
      {"Function.prototype.myCall = " + Function.myCall}
    </pre>
  )
}

const CallConsole = () => {
  return (
    <div style={styles}>
      {array}
    </div>
  )
}

export default Content(CallCode, CallConsole)