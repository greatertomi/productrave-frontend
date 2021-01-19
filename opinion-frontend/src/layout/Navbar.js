import React from 'react';
import {Menu, Layout} from "antd";
import {AppstoreOutlined, LoginOutlined, UserAddOutlined} from '@ant-design/icons'

const {Header} = Layout

const Navbar = () => {
  return (
    <div>
      <Header className="header">
        <h3>Opinion</h3>
        <Menu mode="horizontal" defaultSelectedKeys={['1']} className='navbar'>
          <Menu.Item key="2" icon={<UserAddOutlined />} className='menuItem'>Register</Menu.Item>
          <Menu.Item key="3" icon={<LoginOutlined />} className='menuItem'>Login</Menu.Item>
          <Menu.Item key="1" icon={<AppstoreOutlined />} className='menuItem'>Home</Menu.Item>
        </Menu>
      </Header>
    </div>
  );
};

export default Navbar;
