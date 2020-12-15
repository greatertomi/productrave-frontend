import React from 'react';
import {Menu, Layout} from "antd";
import {AppstoreOutlined, LoginOutlined, UserAddOutlined} from '@ant-design/icons'
import opinion from '../images/opinion.png'

const {Header} = Layout

const Navbar = () => {
  return (
    <div>
      <Header className="header">
        <Menu mode="horizontal" defaultSelectedKeys={['1']}>
          <img src={opinion} height={60} width={120} alt=''/>
          <Menu.Item key="2" icon={<UserAddOutlined />} className='menuItem'>Register</Menu.Item>
          <Menu.Item key="3" icon={<LoginOutlined />} className='menuItem'>Login</Menu.Item>
          <Menu.Item key="1" icon={<AppstoreOutlined />} className='menuItem'>Home</Menu.Item>
        </Menu>
      </Header>
    </div>
  );
};

export default Navbar;
