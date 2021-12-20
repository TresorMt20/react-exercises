import React from 'react';

export default function Product({ product, key }) {
  return (
    <div key={key} className="">
      <img src={product.image} alt={product.name} className="medium" />

    </div>
  );
}
