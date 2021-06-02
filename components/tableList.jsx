import { Table, Tag, Space } from 'antd'

const { Column } = Table

const data = [
  {
    key: '1',
    fullName: 'John',
    age: 25,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    fullName: 'Jim',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    fullName: 'Joe',
    age: 33,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '4',
    fullName: 'Sara',
    age: 28,
    address: 'Sidney No. 2 Lake Park',
    tags: ['loser'],
  },
  {
    key: '5',
    fullName: 'Claire',
    age: 36,
    address: 'New York No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
]

const TableList = props => (
  <>
    <Table dataSource={data}>
      <Column title="Full Name" dataIndex="fullName" key="fullName" />

      <Column title="Age" dataIndex="age" key="age" />
      <Column title="Address" dataIndex="address" key="address" />
      <Column
        title="Tags"
        dataIndex="tags"
        key="tags"
        render={tags => (
          <>
            {tags.map(tag => (
              <Tag color="blue" key={tag}>
                {tag}
              </Tag>
            ))}
          </>
        )}
      />
      <Column
        title="Action"
        key="action"
        render={(text, record) => (
          <Space size="middle">
            <a>Invite {record.lastName}</a>
            <a>Delete</a>
          </Space>
        )}
      />
    </Table>
  </>
)

export default TableList
