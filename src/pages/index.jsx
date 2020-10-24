import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom'

import Hello from './page-hello'

const routeConfig = [
  { path: "/", component: Hello }
]

class RouterUrl extends Component {
  render() {
    return(
      <Router>
        <Switch>
          { routeConfig.map((item, i) => <Route exact key={i} path={item.path} component={item.component} />) }
          <Route path="*">没有匹配到页面</Route>
          <Redirect from="/hello" to="/" />
        </Switch>
      </Router>
    )
  }
}

ReactDom.render(<RouterUrl />, document.getElementById('app'))