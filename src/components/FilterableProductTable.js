import React, { useState } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

const FilterableProductTable = () => {
  const [value, setValue] = useState("");
  const [inStock, setInStock] = useState(false);

  return (
    <div className="row">
      <SearchBar
        value={value}
        inStock={inStock}
        setValue={val => setValue(val)}
        setInStock={val => setInStock(val)}
      />
      <ProductTable filterText={value} inStock={inStock} />
    </div>
  );
};

export default FilterableProductTable;
