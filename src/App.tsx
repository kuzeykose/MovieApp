import React, { useState } from 'react';
import "antd/dist/antd.css";
import { Layout, Row, Menu, Image, Typography, } from 'antd';
import logo from './assets/logo.png'

import Top20Movie from './containers/top20Movie/Top20Movie.screen'
import Top20Tv from './containers/top20Tv/Top20Tv.screen'
import Favourite from './containers/favaorite/Favourite.screen'
import Search from './containers/search/Search.screen'
import Home from './containers/home/Home.screen'
import Welcome from './containers/welcome/Welcome.screen'
import ItemPage from './containers/itemPage/ItemPage.screen'

import {
  HeartOutlined,
  OrderedListOutlined,
  SearchOutlined,
} from '@ant-design/icons';

import {
  Switch,
  Route,
  Link,
  useRouteMatch,
  Redirect
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
    <div style={{ maxWidth: 1400, width: "100%", margin: "0 auto" }}>
      {/* <Link to='/' style={{ width: 80 }}>
        <img height="80" width="80" src={logo} alt="logo" />
      </Link> */}
      <div>
        <Home />
      </div >
    </div >

  );
}

export default App;
