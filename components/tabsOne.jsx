import { Tabs } from 'antd'

const { TabPane } = Tabs

function callback(key) {
  console.log(key)
}

const TabsOne = props => (
  <>
    <Tabs defaultActiveKey="1" onChange={callback}>
      <TabPane tab="Notes" key="1">
        Quisquam et nisi. Dicta in ut eos consequatur ipsum omnis. Quisquam doloremque error
        praesentium sapiente et vitae. Omnis facere sint nulla similique vel voluptatem officia
        deleniti.
      </TabPane>
      <TabPane tab="Tab 2" key="2">
        Distinctio voluptas repellendus rerum temporibus deserunt et corrupti sint. Odit sit labore
        quia. Perferendis iure eos qui tempore ex saepe consequuntur accusamus ipsa.
      </TabPane>
      <TabPane tab="Tab 3" key="3">
        Maiores animi et quidem. Ducimus voluptate est consequatur ut vitae in. Ut fugit sit ab
        blanditiis ab occaecati soluta quis.
      </TabPane>
    </Tabs>
  </>
)

export default TabsOne
