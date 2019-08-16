import React from 'react'
import Content from '../hocomponent/content'

const styles = {
  display: "flex",
  flexDirection: "column"
}


// 实现方法
function runAsync1(){
  var p = new Promise(function(resolve, reject){
      //做一些异步操作
      setTimeout(function(){
          console.log('异步任务1执行完成');
          resolve('随便什么数据1');
      }, 3000);
  });
  return p;            
}
function runAsync2(){
  var p = new Promise(function(resolve, reject){
      //做一些异步操作
      setTimeout(function(){
          console.log('异步任务2执行完成');
          resolve('随便什么数据2');
      }, 2000);
  });
  return p;            
}
function runAsync3(){
  var p = new Promise(function(resolve, reject){
      //做一些异步操作
      setTimeout(function(){
          console.log('异步任务3执行完成');
          resolve('随便什么数据3');
      }, 2000);
  });
  return p;            
}

Promise.race([runAsync1(), runAsync2(), runAsync3()]).then(res => {
  console.log(res)
})

const PromiseCode = () => {
  return(
    <pre>
      {/* {实现方法的展示} */}
    </pre>
  )
}

const PromiseConsole = () => {
  return (
    <div style={styles}>
      {/* {实现方法的展示} */}
    </div>
  )
}

export default Content(PromiseCode, PromiseConsole)