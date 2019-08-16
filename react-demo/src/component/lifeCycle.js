import React, { Component } from 'react'
import Content from '../hocomponent/content'

const styles = {
  display: "flex",
  flexDirection: "column"
}

// 实现方法
class LifeCycle extends Component{
  constructor(){
    super()
    console.log("初始化")
  }
  componentWillMount() {
    console.log("componentWillMount")
  }
  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps" + nextProps)
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate" + nextProps + ";" + nextState)
    return true
  }
  componentWillUpdate() {
    console.log("componentWillUpdate")
  }
  render() {
    console.log("render")
    return(
      <div>render 渲染</div>
    )
  }
  componentDidUpdate() {
    console.log("componentDidUpdate")
  }
  componentDidMount() {
    console.log("componentDidMount")
  }
  componentWillUnmount() {
    console.log("componentWillUnmount")
  }
}

const LifeCycleCode = () => {
  return(
    <pre>
      {"" + LifeCycle}
    </pre>
  )
}

const LifeCycleConsole = () => {
  return (
    <div style={styles}>
      {console.log(new LifeCycle())}
    </div>
  )
}

export default Content(LifeCycleCode, LifeCycleConsole)