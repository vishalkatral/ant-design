import { Tooltip, Col, Card, Progress, Typography, Row } from 'antd'

const { Text } = Typography

const ProgressCircularMini = props => (
  <>
    <Row gutter={16}>
      <Col span={8} style={{ textAlign: 'center', marginTop: '20px' }}>
        <Card>
          <Tooltip title="3 done / 3 in progress / 4 to do">
            <Progress type="circle" percent={30} width={80} />
          </Tooltip>
        </Card>
      </Col>

      <Col span={8} style={{ textAlign: 'center', marginTop: '20px' }}>
        <Card>
          <Progress type="circle" percent={70} width={80} status="exception" />
        </Card>
      </Col>

      <Col span={8} style={{ textAlign: 'center', marginTop: '20px' }}>
        <Card>
          <Progress type="circle" percent={100} width={80} />
        </Card>
      </Col>
    </Row>
  </>
)

export default ProgressCircularMini
