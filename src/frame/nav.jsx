import React, { Component } from 'react'
import { Menu } from 'antd'
import { Link } from 'react-router-dom'
import routeUrl from '../router'

const { SubMenu } = Menu

const menuMap = routes => {
  return (
    routes.map(item => {
      if (item.children) {
        return (
          <SubMenu key={item.key} title={item.title}>
            {menuMap(item.children)}
          </SubMenu>
        )
      } else {
        return (
          <Menu.Item key={item.key}>
            <Link to={item.url}>{item.title}</Link>
          </Menu.Item>
        )
      }
    })
  )
}

class Nav extends Component {
  render() {
    return (
      <Menu mode="horizontal">
        {menuMap(routeUrl)}
      </Menu>
    )
  }
}

export default Nav