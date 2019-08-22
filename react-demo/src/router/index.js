import React from "react"
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom"
import Debounce from '../component/debounce'
import Throttle from '../component/throttle'
import DeepClone from '../component/deepClone'
import EventEmeitter from '../component/eventEmeitter'
import LifeCycle from "../component/lifeCycle"
import InstanceOf from "../component/instanceof"
import Promise from "../component/promise"
import News from "../component/new"
import This from "../component/this"
import Call from "../component/call"
import Apply from "../component/apply"
import ParseToMoney from '../component/parseToMoney'

const headStyle = {
  width: "100%",
  overflow: "hidden",
  overflowX: 'auto'
}
const styles = {
  display: 'flex',
  flexDirection: 'row',
  listStyle: 'none',
  flexWrap: "nowrap"
}
const liStyle = {
  padding: "10px 20px",
  textAlign: 'center',
  listStyle: 'none'
}

const BasicRouter = () => {
  return (
    <Router>
      <div style={headStyle}>
        <ul style={styles}>
          {/* Debounce */}
          <li style={liStyle}>
            <NavLink
              to= {{pathname: "/debounce", search: "?title=Debounce"}}
              activeStyle={{
                fontWeight: "bold",
                color: "blue"
              }}
            >Debounce</NavLink >
          </li>
          {/* Throttle */}
          <li style={liStyle}>
            <NavLink
              to= {{pathname: "/throttle", search: "?title=Throttle"}}
              activeStyle={{
                fontWeight: "bold",
                color: "blue"
              }}
            >Throttle</NavLink >
          </li>
          {/* deepClone */}
          <li style={liStyle}>
            <NavLink
              to= {{pathname: "/deepClone", search: "?title=DeepClone"}}
              activeStyle={{
                fontWeight: "bold",
                color: "blue"
              }}
            >DeepClone</NavLink >
          </li>
          {/* eventEmeitter */}
          <li style={liStyle}>
            <NavLink
              to={{pathname: "/eventEmeitter", search: "?title=EventEmeitter"}}
            >
              EventEmeitter
            </NavLink>
          </li>
          {/* lifeCycle */}
          <li style={liStyle}>
            <NavLink
              to={{pathname: "/lifeCycle", search: "?title=LifeCycle"}}
            >
              lifeCycle
            </NavLink>
          </li>
          {/* instanceOf */}
          <li style={liStyle}>
            <NavLink
              to={{pathname: "/instanceOf", search: "?title=InstanceOf"}}
            >
              instanceOf
            </NavLink>
          </li>
          {/* promise */}
          <li style={liStyle}>
            <NavLink
              to={{pathname: "/promise", search: "?title=Promise"}}
            >
              promise
            </NavLink>
          </li>
          {/* New */}
          <li style={liStyle}>
            <NavLink
              to={{pathname: "/new", search:"?title=New"}}
            >
              new
            </NavLink>
          </li>
          {/* this */}
          <li style={liStyle}>
            <NavLink
              to={{pathname: "/this", search: "?title=This"}}
            >
              this
            </NavLink>
          </li>
          {/* call */}
          <li style={liStyle}>
            <NavLink
              to={{pathname: '/call', search: "?title=Call"}}
            >
              call
            </NavLink>
          </li>
          {/* apply */}
          <li style={liStyle}>
            <NavLink
              to={{pathname: '/apply', search: "?title=Apply"}}
            >
              apply
            </NavLink>
          </li>
          {/* parseToMoney */}
          <li style={liStyle}>
              <NavLink
                to={{pathname: '/parseToMoney', search: "?title=ParseToMoney"}}
              >
                parseToMoney
              </NavLink>
          </li>
        </ul>
      </div>
      <hr />
      <div>
        <Route exact  path="/debounce" component={Debounce}></Route>
        <Route path="/throttle" component={Throttle}></Route>
        <Route path="/deepClone" component={DeepClone}></Route>
        <Route path="/eventEmeitter" component={EventEmeitter}></Route>
        <Route path="/lifeCycle" component={LifeCycle}></Route>
        <Route path="/instanceOf" component={InstanceOf}></Route>
        <Route path="/promise" component={Promise}></Route>
        <Route path="/new" component={News}></Route>
        <Route path="/this" component={This}></Route>
        <Route path="/call" component={Call}></Route>
        <Route path="/apply" component={Apply}></Route>
        <Route path="/parseToMoney" component={ParseToMoney}></Route>
      </div>
    </Router>
  );
}

export default BasicRouter;
