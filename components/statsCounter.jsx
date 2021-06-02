import { Col, Card, Statistic } from 'antd'

import { PieChartTwoTone, ProfileTwoTone, MailTwoTone, MessageTwoTone } from '@ant-design/icons'

const StatsCounter = props => (
  <>
    <Col span={12}>
      <Card>
        <Statistic title="Messages" value={36} prefix={<MessageTwoTone />} />
      </Card>
      <Card style={{ marginTop: '20px' }}>
        <Statistic title="Team Members" value={1804} prefix={<ProfileTwoTone />} />
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
  </>
)

export default StatsCounter
