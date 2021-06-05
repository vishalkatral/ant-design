import { Progress, Typography, Card } from 'antd'

const { Title, Text } = Typography

const ProgressInfoMini = props => (
  <>
    <Card>
      <div style={{ width: 170 }}>
        <Progress percent={30} size="small" />
        <Progress percent={50} size="small" status="active" />
        <Progress percent={70} size="small" status="exception" />
        <Progress percent={100} size="small" />
      </div>
      <br />
      <br />
      <Text type="secondary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor
      </Text>
    </Card>
  </>
)

export default ProgressInfoMini
