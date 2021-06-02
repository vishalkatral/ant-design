import { Progress, Typography } from 'antd'

const { Text } = Typography

const ProgressInfo = props => (
  <>
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
  </>
)

export default ProgressInfo
