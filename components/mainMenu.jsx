import { Menu } from 'antd'

import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons'

const { SubMenu } = Menu

import Link from 'next/link'

const MainMenu = props => (
  <>
    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
      <Menu.Item key="1" icon={<PieChartOutlined />}>
        Option 1
      </Menu.Item>
      <SubMenu key="sub1" icon={<UserOutlined />} title="Forms">
        <Menu.Item key="3">
          <Link href="/tab">Tab</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link href="/progress">Progress</Link>
        </Menu.Item>
        <Menu.Item key="5">Alex</Menu.Item>
      </SubMenu>
      <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
        <Menu.Item key="6">Team 1</Menu.Item>
        <Menu.Item key="8">Team 2</Menu.Item>
      </SubMenu>
      <Menu.Item key="9" icon={<FileOutlined />}>
        Files
      </Menu.Item>
    </Menu>
  </>
)

export default MainMenu
