import React from 'react'
import Content from '../hocomponent/content'

const styles = {
  display: "flex",
  flexDirection: "column"
}

// 实现方法
const deepClone = (obj) => {
  if(obj === null) return null
  if(obj instanceof Date) return new Date(obj)
  if(obj instanceof RegExp) return new RegExp(obj)
  if(typeof obj !== 'object') return obj
  let t = new obj.constructor()
  for(let key in obj) {
    t[key] = deepClone(obj[key])
  }
  return t
}

const DeepCloneCode = () => {
  return(
    <pre>
      {'const deepClone = ' + deepClone.toString()}
    </pre>
  )
}

let a = {name: 'ldj',age: 30}

let b = deepClone(a)
// let b = a
b.age = 28


const DeepCloneConsole = () => {
  return (
    <div style={styles}>
      <div>
        <span>a:</span>
        <pre>
          {JSON.stringify(a)}
        </pre>
      </div>
      <div>
        <span>b:</span>
        <pre>
          {JSON.stringify(b)}
        </pre>
      </div>
    </div>
  )
}

export default Content(DeepCloneCode, DeepCloneConsole)