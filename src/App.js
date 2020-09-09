import React from "react";
import "./App.css";
import FilterableProductTable from "./components/FilterableProductTable";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col s4"></div>
        <div className="col s4">
          <FilterableProductTable />
        </div>
        <div className="col s4"></div>
      </div>
    </div>
  );
}

export default App;
