import React, { useState } from 'react';
import "antd/dist/antd.css";
import { Layout, Menu } from 'antd';

import Top10 from './containers/top10/Top10.screen'
import Favourite from './containers/favaorite/Favourite.screen'
import Search from './containers/search/Search.screen'

import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
} from '@ant-design/icons';

import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";

const { Content, Sider } = Layout;

const App = () => {
  let { path, url } = useRouteMatch();
  const [collapsed, setCollapsed] = useState<boolean>(false)
  const onCollapse = (collapsed: boolean) => {
    setCollapsed(collapsed)
  };

  return (
    <div className="App">
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['0']} mode="inline">
            <Menu.Item key="0" icon={<FileOutlined />}>
              <Link to='/search'>Search</Link>
            </Menu.Item>
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              <Link to='/top10'>TOP 10</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              <Link to='/favourite'>Favourite</Link>
            </Menu.Item>
          </Menu>
        </Sider>

        <Layout className="site-layout">
          <Content >
            <Switch>
              <Route path="/search">
                <Search />
              </Route>
              <Route exact path="/top10">
                <Top10 />
              </Route>
              <Route path="/favourite">
                <Favourite />
              </Route>
            </Switch>
          </Content>
        </Layout>

      </Layout>
    </div>
  );
}

export default App;
