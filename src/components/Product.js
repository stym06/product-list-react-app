import React from "react";

const Product = ({ name, price, stocked, inStock }) => {
  return (
    <React.Fragment>
      {inStock ? (
        stocked === inStock && (
          <li className="collection-item">
            <span>{name}</span>
            <p>{price}</p>
            <p>{stocked.toString()}</p>
          </li>
        )
      ) : (
        <li className="collection-item">
          <span>{name}</span>
          <p>{price}</p>
          <p>{stocked.toString()}</p>
        </li>
      )}
    </React.Fragment>
  );
};

export default Product;
