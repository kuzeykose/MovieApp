import React, { useState } from 'react';
import "antd/dist/antd.css";
import { Layout, Menu, Image, Typography, } from 'antd';
import logo from './assets/logo.png'

import Top20Movie from './containers/top20Movie/Top20Movie.screen'
import Top20Tv from './containers/top20Tv/Top20Tv.screen'
import Favourite from './containers/favaorite/Favourite.screen'
import Search from './containers/search/Search.screen'
import Welcome from './containers/welcome/Welcome.screen'

import {
  HeartOutlined,
  OrderedListOutlined,
  SearchOutlined,
} from '@ant-design/icons';

import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";

const { Content, Sider, Footer } = Layout;
const { Text } = Typography
const App = () => {
  let { path, url } = useRouteMatch();
  const [collapsed, setCollapsed] = useState<boolean>(true)
  const onCollapse = (collapsed: boolean) => {
    setCollapsed(collapsed)
  };

  return (
    <div>
      <div style={{ position: 'relative' }}>
        <Text style={{ position: 'fixed', bottom: 10, right: 20, width: '100%', textAlign: 'end' }}> Design by Kuzey</Text>
      </div>
      <Layout style={{ background: '#fff' }}>
        <Sider
          theme="light"
          collapsible
          collapsed={collapsed}
          onCollapse={onCollapse}
          style={{}}
        >

          <div style={{ margin: 5, width: 100, marginBottom: 220 }}>
            <Link to='/'>
              <img height="100" width="100" src={logo} alt="logo" />
            </Link>
          </div>

          <Menu mode="inline" >
            <Menu.Item key="0" icon={<SearchOutlined />}>
              <Link to='/search'>Search</Link>
            </Menu.Item>
            <Menu.Item key="1" icon={<OrderedListOutlined />}>
              <Link to='/top20Movie'>TOP 20 Movie</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<OrderedListOutlined />}>
              <Link to='/top20Tv'>TOP 20 Tv</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<HeartOutlined />}>
              <Link to='/favourite'>Favourite</Link>
            </Menu.Item>
          </Menu>
        </Sider>

        <Layout style={{ background: '#fff' }}>
          <Content >
            <Switch>
              <Route exact path="/">
                <Welcome />

              </Route>
              <Route path="/search">
                <Search />
              </Route>
              <Route exact path="/top20Movie">
                <Top20Movie />
              </Route>
              <Route exact path="/top20Tv">
                <Top20Tv />
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
