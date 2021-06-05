import React from 'react'
import { Layout, Typography, Card, Row, Col, Progress, Button } from 'antd'

import { MinusOutlined, PlusOutlined } from '@ant-design/icons'

import BreadCrumb from '../components/breadcrumb'
import MainMenu from '../components/mainMenu'
import ProgressCircular from '../components/progressCircular'
import ProgressInfo from '../components/progressInfo'
import ProgressInfoMini from '../components/progressInfoMini'
import ProgressCircularMini from '../components/progressCircularMini'

function callback(key) {
  console.log(key)
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`

const { Header, Content, Footer, Sider } = Layout

const { Title } = Typography

class progress extends React.Component {
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
              <Row gutter={16}>
                <Col span={12}>
                  <Card title="Progress bar">
                    <Title level={5}>A standard progress bar.</Title>
                    <ProgressInfo />
                  </Card>
                  <Card title="Mini size progress bar">
                    <Title level={5}>Appropriate for a narrow area.</Title>
                    <ProgressInfoMini />
                  </Card>
                </Col>
                <Col span={12}>
                  <Card title="Circular Progress bar">
                    <Title level={5}>A Circular Progress bar.</Title>
                    <ProgressCircular />
                  </Card>
                  <Card title="Mini size circular progress bar">
                    <Title level={5}>A smaller circular progress bar.</Title>
                    <ProgressCircularMini />
                  </Card>
                </Col>
              </Row>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Created by Liquis</Footer>
        </Layout>
      </Layout>
    )
  }
}

export default progress
