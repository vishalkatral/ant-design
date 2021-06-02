import { Card, Typography, Avatar } from 'antd'

import { TwitterOutlined, InstagramOutlined, BehanceOutlined } from '@ant-design/icons'

import CustomAvatar from '../components/avatar'

const { Title, Text } = Typography

const ProfileCardStyle1 = props => (
  <>
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor ammet dolar
        consectetur adipisicing elit
      </Text>
    </Card>
  </>
)

export default ProfileCardStyle1
