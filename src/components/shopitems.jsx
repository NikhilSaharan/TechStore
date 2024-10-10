/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { CgShoppingCart } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import { ShopContext } from './shopcontext';
import Prod from './prod';

const ShopItems = ({ products }) => {
  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
      {products.map((product) => (
        <Prod key={product.id} data={product} />
      ))}
    </div>
  );
};

export default ShopItems;
