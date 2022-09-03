import React from "react";
import { Tabs } from 'antd';
import Tenant from "./tenant/Tenant";
import LocationTree from "./LocationTree";

const { TabPane } = Tabs;

const Sidebar = () => {

  const onChange = () => {

  }

  return (
    <Tabs defaultActiveKey="1" onChange={onChange}>
      <TabPane tab="Tenant" key="tenant">
        <Tenant />
      </TabPane>
      <TabPane tab="Location" key="location">
        <LocationTree />
      </TabPane>
    </Tabs>
  )
}

export default Sidebar