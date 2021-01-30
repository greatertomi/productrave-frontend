import React from 'react';
import { Dropdown, Menu, Rate } from 'antd';
import { FaEllipsisH } from 'react-icons/fa';

import shoe from '../../images/shoe.jpg';

const menu = (
  <Menu>
    <Menu.Item>
      <div>
        Edit Comment
      </div>
    </Menu.Item>
    <Menu.Item>
      <div className="deleteMenu">
        Delete Comment
      </div>
    </Menu.Item>
    <Menu.Item>
      <div>
        Report Abuse
      </div>
    </Menu.Item>
  </Menu>
);

const ProductComment = () => {
  const handleAction = () => {
    // code here
  };

  handleAction();
  return (
    <div className="card commentDiv">
      <div className="heading">
        <div>
          <div>
            <img src={shoe} alt="Commenter" className="commenterPix" />
          </div>
          <div>
            <div className="font-weight-bold text-left">Kremlin Peters</div>
            <div><Rate defaultValue={3} className="rate" /></div>
            <div> Reviewed on december 20th, 2019</div>
          </div>
        </div>
        <div>
          <Dropdown overlay={menu} placement="bottomRight" arrow trigger={['click']}>
            <FaEllipsisH size={20} className="ellipses" />
          </Dropdown>
        </div>
      </div>
      <div className="mt-2">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Adipisci aspernatur, beatae cumque deserunt eveniet facilis
          id iure laudantium nostrum odio optio qui soluta, ut veniam voluptate.
          Doloribus facere magnam quam.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto at dolorem
          facere libero magnam nisi optio quasi recusandae tempora vel. Animi cupiditate
          dolorem doloremque eaque eveniet, natus nisi officiis ratione.
        </p>
      </div>
    </div>
  );
};

export default ProductComment;
