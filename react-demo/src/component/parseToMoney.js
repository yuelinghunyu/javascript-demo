import React from 'react'
import Content from '../hocomponent/content'

const styles = {
  display: "flex",
  flexDirection: "column"
}

// 实现方法
const parseToMoneny = (num) => {
  num = parseFloat(num.toFixed(3))
  debugger
  let [interger, decimal] = String.prototype.split.call(num, '.')
  interger = interger.replace(/\d(?=(\d{3})+$)/g, '$&,')
  return interger + (decimal ? decimal : "")
}

parseToMoneny(1234.56)
const ParseToMonenyCode = () => {
  return(
    <pre>
      {"const parseToMoneny = " + parseToMoneny}
    </pre>
  )
}

const ParseToMonenyConsole = () => {
  return (
    <div style={styles}>
      {/* {实现方法的展示} */}
    </div>
  )
}

export default Content(ParseToMonenyCode, ParseToMonenyConsole)