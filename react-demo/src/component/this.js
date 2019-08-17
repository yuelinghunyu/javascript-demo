import React from 'react'
import Content from '../hocomponent/content'

const styles = {
  display: "flex",
  flexDirection: "column"
}

// 实现方法
function foo(){
  this.a = 10;
  console.log(this);
}

var obj = new foo();      // foo{ a : 10 }  创建的新对象的默认名为函数名
                        // 然后等价于 foo { a : 10 };  var obj = foo;
console.log(obj.a);       // 10    new绑定

const ThisCode = () => {
  return(
    <pre>
      {/* {实现方法的展示} */}
    </pre>
  )
}

const ThisConsole = () => {
  return (
    <div style={styles}>
      {/* {实现方法的展示} */}
    </div>
  )
}

export default Content(ThisCode, ThisConsole)