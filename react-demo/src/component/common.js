import React from 'react'
import Content from '../hocomponent/content'

const styles = {
  display: "flex",
  flexDirection: "column"
}

// 实现方法

const CommonCode = () => {
  return(
    <pre>
      {/* {实现方法的展示} */}
    </pre>
  )
}

const CommonConsole = () => {
  return (
    <div style={styles}>
      {/* {实现方法的展示} */}
    </div>
  )
}

export default Content(CommonCode, CommonConsole)