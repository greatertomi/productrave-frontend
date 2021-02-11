import React from 'react';
import PropTypes from 'prop-types';

import ItemCard from './ItemCard';

const CategoryBar = ({ title, cardNum }) => (
  <div className="categoryCard">
    <h3 className="mb-2">{title}</h3>
    <div>
      {[...Array(cardNum).keys()].map((i) => <ItemCard key={i} />)}
    </div>
  </div>
);

CategoryBar.propTypes = {
  title: PropTypes.string.isRequired,
  cardNum: PropTypes.number.isRequired
};

export default CategoryBar;
