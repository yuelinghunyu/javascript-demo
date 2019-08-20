import React from 'react'
import Content from '../hocomponent/content'

const styles = {
  display: "flex",
  flexDirection: "column"
}

// 实现方法
// eslint-disable-next-line
Function.prototype.myapply = (context, arr) => {
  context.fn = this || window
  let result = null

  if(!arr) {
    result = context.fn()
  } else {
    let args = []
    for(let i = 0, leg = arr.length; i < leg; i++) {
      args.push(arr[i])
    }
    result = context.fn(...args)
  }

  delete context.fn
  return result
}

const ApplyCode = () => {
  return(
    <pre>
      {"Function.prototype.myapply = " + Function.myapply}
    </pre>
  )
}

const ApplyConsole = () => {
  return (
    <div style={styles}>
      {/* {实现方法的展示} */}
    </div>
  )
}

export default Content(ApplyCode, ApplyConsole)
