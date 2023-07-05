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

const menu=[
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
]


function SideMenu() {
    const [collapsed, setCollapsed] = useState(false);
    const menuList=(items)=>{ 
      return items.map(item=>{
        if(item.children){
          return {
            key:item.key,
            icon: item.icon,
            label:item.label,
            children: menuList(item.children)
          }
        }
        else{
          return {
            key:item.key,
            icon: item.icon,
            label:item.label
          }
        }
      }
      )
    }

  return (
    <Sider trigger={null} collapsible collapsed={false}>
      <div className="logo">
        <strong>Global News Management System</strong>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={menuList(menu)}
      />
    </Sider>
  );
   
}

export default SideMenu
