import React from 'react';
import PropTypes from 'prop-types';

import ItemCard from './ItemCard';

// eslint-disable-next-line react/prop-types
const CategoryBar = ({ title, cardNum }) => (
  <div className="categoryCard">
    <h3 className="mb-2">{title}</h3>
    <div>
      {[...Array(cardNum)].map((i) => <ItemCard key={i} />)}
    </div>
  </div>
);

PropTypes.CategoryBar = {
  title: PropTypes.string.isRequired,
  cardNum: PropTypes.number.isRequired
};

export default CategoryBar;
