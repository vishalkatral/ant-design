import { Timeline, Typography } from 'antd'

import { ClockCircleOutlined } from '@ant-design/icons'

const { Title, Text } = Typography

const Tasks = props => (
  <>
    <Title level={3}>Tasks</Title>
    <Text type="secondary">
      Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor. Et quia eum
      nobis ut hic autem enim. Qui ea a qui accusantium ducimus ut placeat modi. Ut corrupti eum.
      Magnam culpa et itaque voluptas maiores et sed molestiae ad. Ut earum est tempore enim odio
      hic architecto et iure. Qui dolore velit illo velit atque reprehenderit sed cupiditate.
    </Text>
    <Timeline style={{ marginTop: '40px' }}>
      <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
      <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
      <Timeline.Item dot={<ClockCircleOutlined className="timeline-clock-icon" />} color="red">
        Technical testing 2015-09-01
      </Timeline.Item>
      <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
    </Timeline>
  </>
)

export default Tasks
