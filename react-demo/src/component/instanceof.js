import React from 'react'
import Content from '../hocomponent/content'

const styles = {
  display: "flex",
  flexDirection: "column"
}

// 实现方法
function Fn(){
  // 每个函数function都有一个prototype，即显式原型（属性），默认指向一个空的object对象。
    // console.log(Fn.prototype)
}
Fn()
// var fn=new Fn()
// console.log(fn.__proto__)
// console.log(Fn.prototype===fn.__proto__)

const instance_of = (L, R) => {
  // L代表左表达式，R代表右表达式
  const O = R.prototype
  L = L.__proto__
  while(true) {
    if(L === null) return false
    if(O === L) return true
    L = L.__proto__
  }
}

const array = [1, 2, 3]
// console.log(instance_of(array, Array))

const InstanceOfCode = () => {
  return(
    <pre>
      {"const instance_of = " + instance_of}
    </pre>
  )
}

const InstanceOfConsole = () => {
  return (
    <div style={styles}>
      {
        "const array = " + JSON.stringify(array)
      }
      <br />
      {
        "console.log(" + instance_of(array, Array) + ")"
      }
    </div>
  )
}

export default Content(InstanceOfCode, InstanceOfConsole)