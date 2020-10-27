import React, { Component } from 'react'
import { observer } from 'mobx-react'
import Store from './store'

const store = new Store

@observer
class Hello extends Component {

  render() {
    return (
      <div className="page-hello">{store.content}</div>
    )
  }
}

export default Hello