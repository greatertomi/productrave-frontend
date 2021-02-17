import React from 'react';
import { Rate } from 'antd';
import { useHistory } from 'react-router-dom';

import shoe from '../../images/shoe.jpg';

const ItemCard = () => {
  const history = useHistory();

  const navigateToProductDetail = () => {
    history.push('/product-detail');
  };

  const value = 3;
  const handleChange = () => {
    console.log('changed');
  };

  return (
    <div className="itemCard" onClick={navigateToProductDetail} role="button">
      <img src={shoe} alt="" />
      <div className="ml-1 mt-1">Supreme Shoe</div>
      <div className="ml-1">
        <Rate onChange={handleChange} value={value} />
      </div>
    </div>
  );
};

export default ItemCard;
