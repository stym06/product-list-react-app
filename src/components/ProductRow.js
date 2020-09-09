import React, { useState } from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import Product from "./Product";

const ProductRow = ({ data, filterText, inStock, category }) => {
  return (
    <React.Fragment>
      <ul className="collection with-header">
        <li className="collection-header">
          <h6>
            <ProductCategoryRow category={category} />
          </h6>
        </li>

        {data.map(
          item =>
            item.name.toLowerCase().includes(filterText.toLowerCase()) &&
            item.category === category && (
              <Product
                key={item.id}
                name={item.name}
                price={item.price}
                stocked={item.stocked}
                inStock={inStock}
              />
            )
        )}
      </ul>
    </React.Fragment>
  );
};

export default ProductRow;
