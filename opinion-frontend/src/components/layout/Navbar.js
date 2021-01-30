import React from 'react';
import {
  Menu, Layout, Input, Dropdown
} from 'antd';
import { MdPersonOutline } from 'react-icons/md';
import { BiMessageDetail } from 'react-icons/bi';
import { IoBagAddOutline } from 'react-icons/io5';
// Menu,
// import { AppstoreOutlined, LoginOutlined, UserAddOutlined } from '@ant-design/icons';
const { Search } = Input;

const { Header } = Layout;

const menu = (
  <Menu>
    <Menu.Item className="menuItem">
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item className="menuItem">
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item className="menuItem">
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);

const Navbar = () => {
  const onSearch = () => {
  };

  return (
    <div>
      <Header className="header">
        <h3>Opinion</h3>
        {/* <Menu mode="horizontal" defaultSelectedKeys={['1']} className="navbar">
          <Menu.Item key="2" icon={<UserAddOutlined />} className="menuItem">Register</Menu.Item>
          <Menu.Item key="3" icon={<LoginOutlined />} className="menuItem">Login</Menu.Item>
          <Menu.Item key="1" icon={<AppstoreOutlined />} className="menuItem">Home</Menu.Item>
        </Menu> */}
        <Search
          placeholder="input search text"
          onSearch={onSearch}
          className="searchInput"
        />
        <div className="userIcons">
          <div>
            <IoBagAddOutline size={40} color="white" className="icon" />
          </div>
          <div>
            <BiMessageDetail size={40} color="white" className="icon" />
          </div>
          <div>
            <Dropdown overlay={menu} placement="bottomCenter" overlayClassName="dropdown">
              <MdPersonOutline size={40} color="white" className="icon" />
            </Dropdown>
          </div>
        </div>
      </Header>
    </div>
  );
};

export default Navbar;
