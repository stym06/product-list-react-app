import React from "react";
import ProductRow from "./ProductRow";

const ProductTable = ({ filterText, inStock }) => {
  const data = [
    {
      id: 1,
      category: "Sporting Goods",
      price: "$49.99",
      stocked: true,
      name: "Football"
    },
    {
      id: 2,
      category: "Sporting Goods",
      price: "$9.99",
      stocked: true,
      name: "Baseball"
    },
    {
      id: 3,
      category: "Sporting Goods",
      price: "$29.99",
      stocked: false,
      name: "Basketball"
    },
    {
      id: 4,
      category: "Electronics",
      price: "$99.99",
      stocked: true,
      name: "iPod Touch"
    },
    {
      id: 5,
      category: "Electronics",
      price: "$399.99",
      stocked: false,
      name: "iPhone 5"
    },
    {
      id: 6,
      category: "Electronics",
      price: "$199.99",
      stocked: true,
      name: "Nexus 7"
    }
  ];

  return (
    <React.Fragment>
      <ProductRow
        data={data}
        filterText={filterText}
        inStock={inStock}
        category="Sporting Goods"
      />
      <ProductRow
        data={data}
        filterText={filterText}
        inStock={inStock}
        category="Electronics"
      />
    </React.Fragment>
  );
};

export default ProductTable;
