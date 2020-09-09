import React from "react";

const SearchBar = ({ value, inStock, setValue, setInStock }) => {
  const handleSearchChange = e => {
    setValue(e.target.value);
  };

  const handleStockSelect = e => {
    setInStock(e.target.checked);
  };

  return (
    <form className="s12">
      <div className="row">
        <div className="input-field col s12 center-align">
          <input
            value={value}
            id="input_value"
            type="text"
            className="validate"
            placeholder="Enter product name"
            onChange={handleSearchChange}
          />
        </div>
        <p>
          <label>
            <input
              type="checkbox"
              checked={inStock}
              onChange={handleStockSelect}
            />
            <span>Only show product in stock</span>
          </label>
        </p>
      </div>
    </form>
  );
};

export default SearchBar;
