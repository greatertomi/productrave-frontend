import React from 'react';
import { Menu, Dropdown, Button } from 'antd';
import { RiArrowDropDownFill } from 'react-icons/ri';
import { AiOutlineSetting } from 'react-icons/ai';

import Navbar from '../layout/Navbar';
import avatar from '../../images/avatar.png';
import ItemCard from '../dashboard/ItemCard';

const userProfileMenu = (
  <Menu>
    <Menu.Item key="1">My Decisions</Menu.Item>
    <Menu.Item key="2">Advice</Menu.Item>
  </Menu>
);

const UserProfile = () => {
  return (
    <div>
      <Navbar />
      <div className="profilePage">
        <div className="profileSideNav">
          <div>
            <img src={avatar} alt="" className="profilePix" />
            <Dropdown overlay={userProfileMenu} trigger={['click']}>
              <Button>
                <AiOutlineSetting size={20} />
                <RiArrowDropDownFill size={20} />
              </Button>
            </Dropdown>
          </div>
          <div>
            <div className="font-large">Oshalusi John</div>
            <div>oshalusijohn@gmail.com</div>
          </div>
          <div className="mt-4">
            <div className="font-large">Categories Following</div>
            <hr />
            <div className="mt-2 catFollowing">
              <div>Sporting</div>
              <div>Food</div>
            </div>
          </div>
        </div>
        <div>
          <div className="catTitle">Products Created</div>
          <div className="items">
            <ItemCard />
            <ItemCard />
            <ItemCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
