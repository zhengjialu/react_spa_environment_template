import React, {Component} from 'react'
import { Layout } from 'antd'
import {Link} from 'react-router-dom'

const { Header, Footer, Content } = Layout;

class Frame extends Component {
  render() {
    return (
      <div className="frame">
        <Layout>
          <Header>
            <Link to="/hello">Header</Link>
          </Header>
          <Content>
            {this.props.children}
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </div>
    )
  }
}

export default Frame