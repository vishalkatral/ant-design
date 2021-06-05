import React from 'react'
import { Layout, Space, Row, Col, Card, Tabs } from 'antd'

import BreadCrumb from '../components/breadcrumb'
import TabsOne from '../components/tabBasic'
import MainMenu from '../components/mainMenu'
import TabIcon from '../components/tabIcon'
import TabBasic from '../components/tabBasic'

function callback(key) {
  console.log(key)
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`

const { Header, Content, Footer, Sider } = Layout

const { TabPane } = Tabs

class tab extends React.Component {
  state = {
    collapsed: false,
  }

  onCollapse = collapsed => {
    console.log(collapsed)
    this.setState({ collapsed })
  }

  render() {
    const { collapsed } = this.state
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <MainMenu />
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <BreadCrumb />

            <div className="site-statistic-demo-card">
              <Card title="Basic Tabs">
                <TabBasic />
              </Card>

              <Card title="Icon Tabs" style={{ marginTop: '20px' }}>
                <TabIcon />
              </Card>

              <Card title="Card Tabs" style={{ marginTop: '20px' }}>
                <Tabs onChange={callback} type="card">
                  <TabPane tab="Tab 1" key="1">
                    Content of Tab Pane 1
                  </TabPane>
                  <TabPane tab="Tab 2" key="2">
                    Content of Tab Pane 2
                  </TabPane>
                  <TabPane tab="Tab 3" key="3">
                    Content of Tab Pane 3
                  </TabPane>
                </Tabs>
              </Card>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Created by Liquis</Footer>
        </Layout>
      </Layout>
    )
  }
}

export default tab
