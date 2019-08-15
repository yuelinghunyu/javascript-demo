import React from "react"
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom"
import Debounce from '../component/debounce'
import Throttle from '../component/throttle'
import DeepClone from '../component/deepClone'


const styles = {
  display: 'flex',
  flexDirection: 'row',
  listStyle: 'none'
}
const liStyle = {
  width: "100px",
  textAlign: 'center',
  listStyle: 'none'
}

const BasicRouter = () => {
  return (
    <Router>
      <div>
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
        </ul>
        <hr />

        <Route 
          exact 
          path="/debounce"
          render={props => <Debounce {...props}/>}
        />
        <Route path="/throttle" component={Throttle}></Route>
        <Route path="/deepClone" component={DeepClone}></Route>
      </div>
    </Router>
  );
}

export default BasicRouter;
