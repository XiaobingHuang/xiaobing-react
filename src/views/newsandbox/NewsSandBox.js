import React from 'react'
import SideMenu from '../../components/SideMenu'
import TopHeader from '../../components/TopHeader'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './home/Home'
import UserList from './user-manage/UserList'
import RoleList from './right-manage/RoleList'
import RightList from './right-manage/RightList'
import NoPermission from './nopermisson/NoPermission'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';

const { Header, Sider, Content } = Layout;
function NewsSandBox() {
  return (
    <div>
      <Layout>
        <SideMenu></SideMenu>
        <Layout>
          <TopHeader></TopHeader>
          <Content>
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/user-manage/list" component={UserList} />
              <Route path="/right-manage/role/list" component={RoleList} />
              <Route path="/right-manage/right/list" component={RightList} />
              <Redirect from="/" to="/home" exact />
              <Route path="*" component={NoPermission} />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default NewsSandBox;
