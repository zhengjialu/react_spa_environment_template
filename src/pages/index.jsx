import React, {Component} from 'react'
import ReactDom from 'react-dom'
import {HashRouter as Router, Redirect, Route} from 'react-router-dom'

import Hello from './page-hello'

const routeConfig = [
  {
    path: "/",
    component: Hello,
    routes: [
      {
        path: "/111",
        component: Hello,
        routes: [
          {
            path: "/222",
            component: Hello
          }
        ]
      }
    ]
  }
]

const RouteDom = route => {
  return (
    <Route
      path={route.path}
      render={props => (
        <route.component {...props} routes={route.routes} />
      )}
    />
  )
}

class RouterUrl extends Component {
  render() {
    return(
      <Router>
        {routeConfig.map((item, i) => <RouteDom key={i} {...item} />)}
        <Redirect from="/hello" to="/" />
      </Router>
    )
  }
}

ReactDom.render(<RouterUrl />, document.getElementById('app'))