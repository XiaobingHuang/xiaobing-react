import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DownOutlined, 
  UserOutlined
} from '@ant-design/icons';
import { Layout, Menu, Button, theme, Dropdown, Space, Avatar } from 'antd';
import type { MenuProps } from 'antd';


const { Header, Sider, Content } = Layout;
function TopHeader() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          Super manager
        </a>
      ),
    },
    {
      key: '2',
      danger: true,
      label: 'Log out',
    }
  ]
  return (
    <div>
      <Header style={{ padding: "0 16px", background: colorBgContainer }}>
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: "16px",
            width: 64,
            height: 64,
          }}
        />
        <div style={{ float: "right" }}>
          <span>Admin, welcome Back</span>
          <Dropdown menu={{ items }}>
            <a>
              <Space>
              <Avatar icon={<UserOutlined />} size="large" />
              </Space>
            </a>
          </Dropdown>
        </div>
      </Header>
    </div>
  );
}

export default TopHeader
