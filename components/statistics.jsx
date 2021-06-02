import { Statistic, Col, Card } from 'antd'

import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons'

function onFinish() {
  console.log('finished!')
}

const { Countdown } = Statistic
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30 // Moment is also OK

const Statistics = props => (
  <>
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
  </>
)

export default Statistics
