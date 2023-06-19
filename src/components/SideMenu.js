import React, { useState } from 'react';
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  SettingOutlined
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import './index.css';


const { Sider} = Layout;


function SideMenu() {
    const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider trigger={null} collapsible collapsed={false}>
      <div className="logo">
        <strong>Global News Management System</strong>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={[
          {
            key: "1",
            icon: <UserOutlined />,
            label: "nav 1",
          },
          {
            key: "2",
            icon: <VideoCameraOutlined />,
            label: "nav 2",
          },
          {
            key: "3",
            icon: <UploadOutlined />,
            label: "nav 3",
          },
          {
            label: "User management",
            key: "Sub4",
            icon:<UploadOutlined />,
            children: [
              {
                label: "Item 1",
                key:"3-1"
              },
              {
                label: "Item 2",
                key:"3-2"
              },
            ],
          },
        ]}
      />
    </Sider>
  );
   
}

export default SideMenu
