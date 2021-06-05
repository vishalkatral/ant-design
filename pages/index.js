import React from 'react'
import { Layout, Space, Row, Col, Card } from 'antd'

import HotTags from '../components/tags'
import EditableTagGroup from '../components/animateTag'
import CommentsList from '../components/commentsList'
import Alerts from '../components/alerts'
import TableList from '../components/tableList'
import Tasks from '../components/tasks'
import Statistics from '../components/statistics'
import ProgressInfo from '../components/progressInfo'
import ProgressCircular from '../components/progressCircular'
import ProfileCardStyle1 from '../components/profileCardStyle1'
import BreadCrumb from '../components/breadcrumb'
import MainMenu from '../components/mainMenu'
import CustomResult from '../components/customResult'
import TabsOne from '../components/tabBasic'
import StatsCounter from '../components/statsCounter'
import CustomSteps from '../components/customSteps'
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

class SiderDemo extends React.Component {
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

            <div className="site-statistic-demo-card" style={{ marginBottom: '20px' }}>
              <Row gutter={16}>
                <Statistics />
              </Row>
            </div>

            <Row>
              <Col span={6}>
                <div className="site-card-border-less-wrapper">
                  <Card title="Income" bordered={false} style={{ width: 345 }}>
                    <ProgressInfo />
                  </Card>
                </div>
              </Col>
              <Col span={18}>
                <TableList />
              </Col>
            </Row>

            <Row>
              <Col span={24}>
                <Row gutter={16}>
                  <StatsCounter />
                </Row>
              </Col>
            </Row>

            <Row gutter={16} style={{ marginTop: '20px' }}>
              <Col span={12}>
                <Card>
                  <Tasks />
                </Card>
                <Card style={{ marginTop: '18px' }}>
                  <TabBasic />
                </Card>
              </Col>
              <Col span={12}>
                <Card>
                  <CustomResult />
                </Card>
              </Col>
            </Row>

            <Row gutter={16} style={{ marginTop: '20px' }}>
              <Col span={12}>
                <Card>
                  <Alerts />
                </Card>
              </Col>
              <Col span={12}>
                <Row gutter={16}>progress</Row>
              </Col>
            </Row>

            <Row gutter={16} style={{ marginTop: '20px' }}>
              <Col span={8}>
                <Card>
                  <CommentsList />
                </Card>
              </Col>
              <Col span={8}>
                <Card>
                  <Space direction="vertical" size={30}>
                    <HotTags />
                    <EditableTagGroup />
                  </Space>
                </Card>
              </Col>

              <Col span={8}>
                <ProfileCardStyle1 />
              </Col>
            </Row>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Created by Liquis</Footer>
        </Layout>
      </Layout>
    )
  }
}

export default SiderDemo
