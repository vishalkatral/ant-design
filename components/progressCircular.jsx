import { Tooltip, Col, Card, Progress, Typography } from 'antd'

const { Text } = Typography

const ProgressCircular = props => (
  <>
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

    <Col span={8} style={{ textAlign: 'center', marginTop: '20px' }}>
      <Card>
        <Text type="secondary">Lorem ipsum dolor</Text> <br /> <br />
        <Tooltip title="3 done / 3 in progress / 4 to do">
          <Progress percent={60} success={{ percent: 30 }} type="circle" />
        </Tooltip>
      </Card>
    </Col>

    <Col span={8} style={{ textAlign: 'center', marginTop: '20px' }}>
      <Card>
        <Text type="secondary">Lorem ipsum dolor</Text> <br /> <br />
        <Progress type="circle" percent={75} format={percent => `${percent} Days`} />
      </Card>
    </Col>

    <Col span={8} style={{ textAlign: 'center', marginTop: '20px' }}>
      <Card>
        <Text type="secondary">Lorem ipsum dolor</Text> <br /> <br />
        <Progress type="circle" percent={100} format={() => 'Done'} />
      </Card>
    </Col>
  </>
)

export default ProgressCircular
