import { Col, Card, Statistic } from 'antd'

import { PieChartTwoTone, ProfileTwoTone, MailTwoTone, MessageTwoTone } from '@ant-design/icons'

const StatsCounter = props => (
  <>
    <Col span={6}>
      <Card>
        <Statistic title="Messages" value={36} prefix={<MessageTwoTone />} />
      </Card>
    </Col>
    <Col span={6}>
      <Card>
        <Statistic title="Team Members" value={1804} prefix={<ProfileTwoTone />} />
      </Card>
    </Col>
    <Col span={6}>
      <Card>
        <Statistic title="Support" value={40} prefix={<PieChartTwoTone />} />
      </Card>
    </Col>
     <Col span={6}>
      <Card>
        <Statistic title="Inbox" value={54} prefix={<MailTwoTone />} />
      </Card>
    </Col>
  </>
)

export default StatsCounter
