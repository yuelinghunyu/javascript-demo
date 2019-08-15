import React from "react"

const content = (WrapperComponentCode, WrapperComponentConsole) => {
  return class Content extends React.Component{
    constructor(props) {
      super(props)
      this.state = {
        title: unescape(props.location.search.match(/(^|&|\?)title=([^&]*)(&|$)/)[2])
      }
    }
    render() {
      return(
        <div>
        <h2>{this.state.title}</h2>
        <div className="content-div_styles">
          <code lang="js" className="left-pre_styles">
            <WrapperComponentCode></WrapperComponentCode>
          </code>
          <div className="right-pre_styles">
            <WrapperComponentConsole></WrapperComponentConsole>
          </div>
        </div>
      </div>
      )
    }
  }
}

export default content