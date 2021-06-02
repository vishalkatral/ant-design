import { Steps, Typography } from 'antd'

const { Title, Text } = Typography

const { Step } = Steps

const CustomSteps = props => (
  <>
    <Title level={3}>Downloads</Title>
    <Text type="secondary">
      Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor. Et quia eum
      nobis ut hic autem enim. Qui ea a qui accusantium ducimus ut placeat modi.
    </Text>
    <Steps current={1} percent={60} style={{ marginTop: '20px', marginBottom: '26px' }}>
      <Step title="Finished" description="This is a description." />
      <Step title="In Progress" description="This is a description." />
      <Step title="Waiting" description="This is a description." />
    </Steps>
  </>
)

export default CustomSteps
