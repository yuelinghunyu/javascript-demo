import React from 'react'
import Content from '../hocomponent/content'

const styles = {
  display: "flex",
  flexDirection: "column"
}

// 实现方法
function objectFactory() {
  const obj = Object.create(null)
  const Constructor = [].shift.call(arguments)
  obj._proto_ = Constructor.prototype
  const ret = Constructor.apply(obj, arguments)
  return typeof ret === "object" ? ret : obj
}
function Person(name,age){
  this.name=name;
  this.age=age;
  this.sayName=function(){
      console.log(this.name);
  }
  return{
    name:this.name,
    age:this.age,
    sayName:this.sayName
  }
}

Person.prototype.sayHi=function(){
  console.log("I am "+this.name);
}

// const person = objectFactory(Person, 'jdj', 18)
// console.log(person)

const NewCode = () => {
  return(
    <pre>
      {"" + objectFactory}
    </pre>
  )
}

const NewConsole = () => {
  return (
    <div style={styles}>
      {/* {实现方法的展示} */}
    </div>
  )
}

export default Content(NewCode, NewConsole)