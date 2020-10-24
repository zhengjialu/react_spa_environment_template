import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { observable } from 'mobx';
import Frame from '../../frame'

@observer
class Hello extends Component {
  @observable content = 'hello world!'

  render() {
    return (
      <Frame>
        <div className="page-hello">{this.content}</div>
      </Frame>
    )
  }
}

export default Hello