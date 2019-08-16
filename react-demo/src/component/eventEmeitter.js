import React from 'react'
import Content from '../hocomponent/content'

const styles = {
  display: "flex",
  flexDirection: "column"
}

// 实现方法
class EventEmeitter {
  constructor() {
    this._events = this._events || new Map() // 储存事件 | 回调键值对
    // this._maxListeners = this._maxListeners || 10
  }
  // 触发名为type的事件 —— 对象
  emit(type, ...args) {
    let handler
    // 从储存事件键值对的this._events中获取对应事件回调函数
    handler = this._events.get(type)
    // 分为数组
    if(Array.isArray(handler)) {
      for(let i = 0; i < handler.length; i++) {
        if(args.length > 0) {
          handler[i].apply(this, args)
        } else {
          handler[i].apply(this)
        }
      }
    } else {
      if(args.length > 0) {
        handler.apply(this, args)
      } else {
        handler.call(this)
      }
    }
    return true
  }
  // 监听名为type的事件
  on(type, fn) {
    const handler = this._events.get(type)
    // 将type事件以及对应的fn函数放入this._events中储存
    if(!handler) {
      this._events.set(type, fn)
    } else if(handler && typeof handler === "function") {
      this._events.set(type, [handler, fn])
    } else {
      handler.push(fn)
    }
  }
  // 清除type事件
  off(type, fn) {
    const handler = this._events.get(type)
    if(handler && typeof handler === "function") { // 函数直接delete
      this._events.delete(type, fn)
    } else {
      let postion
      for(let i = 0; i < handler.length; i++) {
        if(handler[i] === fn) {
          postion = i
        } else {
          postion = -1
        }
      }

      if(postion !== -1) {
        handler.splice(postion, 1)
        if(handler.length === 1) {
          this._events.set(type, handler[0])
        }
      } else {
        return this
      }
    }
  }
}

const EventEmeitCode = () => {
  return(
    <pre>
      {"const eventEmeitter = " + EventEmeitter.toString()}
    </pre>
  )
}

const emitter = new  EventEmeitter()
class EventEmeitConsole extends React.Component{
  constructor() {
    super()
    this.state = {
      num: 0
    }
  }
  componentWillMount() {
    emitter.on("emiter", (msg) => {
      console.log("我接收到了")
      this.setState({
        num: msg
      })
    })
  }
  render() {
    return (
      <div style={styles}>
        <button
          onClick={this.handleEmeit.bind(this)}
        >点我发射 emit</button>
        <span>
          {this.state.num}
        </span>
      </div>
    )
  }
  handleEmeit() {
    emitter.emit("emiter", 1)
  }
}

export default Content(EventEmeitCode, EventEmeitConsole)