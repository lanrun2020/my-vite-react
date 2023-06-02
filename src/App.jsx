import { Component } from 'react'
import './App.css'
import { Layout } from 'antd'
import HeaderContent from './layout/header'
import { Content, Header } from 'antd/es/layout/layout'
import Main from './layout/content'

class App extends Component {
  render () {
    return (
      <Layout>
        <Header>
          <HeaderContent></HeaderContent>
        </Header>
        <Content>
          <Main></Main>
        </Content>
      </Layout>
    )
  }
}

export default App
