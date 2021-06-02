import React from 'react'
import {
  Layout,
  Menu,
  Breadcrumb,
  Typography,
  Button,
  Space,
  Row,
  Col,
  Pagination,
  Steps,
  Radio,
  Table,
  Tag,
  Result,
  Card,
  Progress,
  Statistic,
  Collapse,
  Timeline,
  Tabs,
  Alert,
  Tooltip,
  List,
  Comment,
  Avatar,
  Image,
} from 'antd'
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  PieChartTwoTone,
  ProfileTwoTone,
  MailTwoTone,
  SmileOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
  MessageTwoTone,
  ClockCircleOutlined,
  TwitterOutlined,
  InstagramOutlined,
  BehanceOutlined,
} from '@ant-design/icons'

import HotTags from '../components/tags'
import EditableTagGroup from '../components/animateTag'
import CustomAvatar from '../components/avatar'
import CommentsList from '../components/commentsList'
import Alerts from '../components/alerts'

const { Panel } = Collapse

function callback(key) {
  console.log(key)
}

const { TabPane } = Tabs

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`

const { Header, Content, Footer, Sider } = Layout
const { SubMenu } = Menu
const { Step } = Steps

const { Title, Text } = Typography

const { Column, ColumnGroup } = Table

const { Countdown } = Statistic
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30 // Moment is also OK

function onFinish() {
  console.log('finished!')
}

const data = [
  {
    key: '1',
    fullName: 'John',
    age: 25,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    fullName: 'Jim',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    fullName: 'Joe',
    age: 33,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '4',
    fullName: 'Sara',
    age: 28,
    address: 'Sidney No. 2 Lake Park',
    tags: ['loser'],
  },
  {
    key: '5',
    fullName: 'Claire',
    age: 36,
    address: 'New York No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
]

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
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Option 1
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Option 2
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="User">
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />}>
              Files
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>

            <div className="site-statistic-demo-card" style={{ marginBottom: '20px' }}>
              <Row gutter={16}>
                <Col span={4}>
                  <Card>
                    <Statistic
                      title="Active"
                      value={11.28}
                      precision={2}
                      valueStyle={{ color: '#3f8600' }}
                      prefix={<ArrowUpOutlined />}
                      suffix="%"
                    />
                  </Card>
                </Col>

                <Col span={4}>
                  <Card>
                    <Statistic
                      title="Idle"
                      value={9.3}
                      precision={2}
                      valueStyle={{ color: '#cf1322' }}
                      prefix={<ArrowDownOutlined />}
                      suffix="%"
                    />
                  </Card>
                </Col>

                <Col span={4}>
                  <Card>
                    <Statistic title="Account Balance (CNY)" value={112893} precision={2} />
                  </Card>
                </Col>

                <Col span={4}>
                  <Card>
                    <Statistic title="Subscriptions" value={1128} />
                  </Card>
                </Col>

                <Col span={4}>
                  <Card>
                    <Countdown title="Countdown" value={deadline} onFinish={onFinish} />
                  </Card>
                </Col>
                <Col span={4}>
                  <Card>
                    <Countdown title="Million Seconds" value={deadline} format="HH:mm:ss:SSS" />
                  </Card>
                </Col>
              </Row>
            </div>

            <Row>
              <Col span={6}>
                <div className="site-card-border-less-wrapper">
                  <Card title="Income" bordered={false} style={{ width: 300 }}>
                    <Text type="secondary">Marketing</Text>
                    <Progress percent={30} size="small" />
                    <Text type="secondary">Advertisement</Text>
                    <Progress percent={50} size="small" />
                    <Text type="secondary">Consulting</Text>
                    <Progress percent={70} size="small" />
                    <Text type="secondary">Development</Text>
                    <Progress percent={85} size="small" />
                    <br />
                    <br />
                    <Text type="secondary">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor
                    </Text>
                  </Card>
                </div>
              </Col>
              <Col span={18}>
                <Table dataSource={data}>
                  <Column title="Full Name" dataIndex="fullName" key="fullName" />

                  <Column title="Age" dataIndex="age" key="age" />
                  <Column title="Address" dataIndex="address" key="address" />
                  <Column
                    title="Tags"
                    dataIndex="tags"
                    key="tags"
                    render={tags => (
                      <>
                        {tags.map(tag => (
                          <Tag color="blue" key={tag}>
                            {tag}
                          </Tag>
                        ))}
                      </>
                    )}
                  />
                  <Column
                    title="Action"
                    key="action"
                    render={(text, record) => (
                      <Space size="middle">
                        <a>Invite {record.lastName}</a>
                        <a>Delete</a>
                      </Space>
                    )}
                  />
                </Table>
              </Col>
            </Row>

            <Row>
              <Col span={24}>
                <Row gutter={16}>
                  <Col span={10}>
                    <Row gutter={16}>
                      <Col span={12}>
                        <Card>
                          <Statistic title="Messages" value={36} prefix={<MessageTwoTone />} />
                        </Card>
                        <Card style={{ marginTop: '20px' }}>
                          <Statistic
                            title="Team Members"
                            value={1804}
                            prefix={<ProfileTwoTone />}
                          />
                        </Card>
                      </Col>
                      <Col span={12}>
                        <Card>
                          <Statistic title="Support" value={40} prefix={<PieChartTwoTone />} />
                        </Card>
                        <Card style={{ marginTop: '20px' }}>
                          <Statistic title="Inbox" value={54} prefix={<MailTwoTone />} />
                        </Card>
                      </Col>
                    </Row>
                  </Col>
                  <Col span={14}>
                    <Card>
                      <Title level={3}>Downloads</Title>
                      <Text type="secondary">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod
                        tempor. Et quia eum nobis ut hic autem enim. Qui ea a qui accusantium
                        ducimus ut placeat modi.
                      </Text>
                      <Steps
                        current={1}
                        percent={60}
                        style={{ marginTop: '24px', marginBottom: '26px' }}>
                        <Step title="Finished" description="This is a description." />
                        <Step title="In Progress" description="This is a description." />
                        <Step title="Waiting" description="This is a description." />
                      </Steps>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row gutter={16} style={{ marginTop: '20px' }}>
              <Col span={12}>
                <Card>
                  <Title level={3}>Tasks</Title>
                  <Text type="secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor.
                    Et quia eum nobis ut hic autem enim. Qui ea a qui accusantium ducimus ut placeat
                    modi. Ut corrupti eum. Magnam culpa et itaque voluptas maiores et sed molestiae
                    ad. Ut earum est tempore enim odio hic architecto et iure. Qui dolore velit illo
                    velit atque reprehenderit sed cupiditate.
                  </Text>
                  <Timeline style={{ marginTop: '40px' }}>
                    <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                    <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                    <Timeline.Item
                      dot={<ClockCircleOutlined className="timeline-clock-icon" />}
                      color="red">
                      Technical testing 2015-09-01
                    </Timeline.Item>
                    <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
                  </Timeline>
                </Card>
                <Card style={{ marginTop: '18px' }}>
                  <Tabs defaultActiveKey="1" onChange={callback}>
                    <TabPane tab="Notes" key="1">
                      Quisquam et nisi. Dicta in ut eos consequatur ipsum omnis. Quisquam doloremque
                      error praesentium sapiente et vitae. Omnis facere sint nulla similique vel
                      voluptatem officia deleniti.
                    </TabPane>
                    <TabPane tab="Tab 2" key="2">
                      Distinctio voluptas repellendus rerum temporibus deserunt et corrupti sint.
                      Odit sit labore quia. Perferendis iure eos qui tempore ex saepe consequuntur
                      accusamus ipsa.
                    </TabPane>
                    <TabPane tab="Tab 3" key="3">
                      Maiores animi et quidem. Ducimus voluptate est consequatur ut vitae in. Ut
                      fugit sit ab blanditiis ab occaecati soluta quis.
                    </TabPane>
                  </Tabs>
                </Card>
              </Col>
              <Col span={12}>
                <Card>
                  <Result
                    status="403"
                    title="403"
                    subTitle="Sorry, you are not authorized to access this page."
                    extra={<Button type="primary">Back Home</Button>}
                  />
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
                <Row gutter={16}>
                  <Col span={8} style={{ textAlign: 'center' }}>
                    <Card>
                      <Text type="secondary">Lorem ipsum dolor</Text> <br /> <br />
                      <Progress type="circle" percent={75} />
                    </Card>
                  </Col>
                  <Col span={8} style={{ textAlign: 'center' }}>
                    <Card>
                      <Text type="secondary">Lorem ipsum dolor</Text> <br /> <br />
                      <Progress type="circle" percent={70} status="exception" />
                    </Card>
                  </Col>
                  <Col span={8} style={{ textAlign: 'center' }}>
                    <Card>
                      <Text type="secondary">Lorem ipsum dolor</Text> <br /> <br />
                      <Progress type="circle" percent={100} />
                    </Card>
                  </Col>
                </Row>
                <Card style={{ marginTop: '20px' }}>
                  <Result
                    style={{ padding: '30px' }}
                    icon={<SmileOutlined />}
                    title="Great, we have done all the survey!"
                    extra={<Button type="primary">Next</Button>}
                  />
                </Card>
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
                <Card
                  style={{ textAlign: 'center' }}
                  actions={[
                    <TwitterOutlined key="setting" />,
                    <InstagramOutlined key="edit" />,
                    <BehanceOutlined key="ellipsis" />,
                  ]}>
                  <Avatar
                    style={{ marginBottom: '20px' }}
                    size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                    icon={<CustomAvatar />}
                    // src={
                    //   <Image src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    // }
                  />

                  <Title level={5}>Panda</Title>
                  <Text type="secondary">Marketing Executive</Text>
                  <br />
                  <br />
                  <Text type="secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor
                    ammet dolar consectetur adipisicing elit
                  </Text>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col>
                <Card>hello</Card>
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
