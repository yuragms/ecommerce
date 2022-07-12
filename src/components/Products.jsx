import React from "react";
import { ApiTopPropducts } from "../apifolder/TopProductsApi";
import Product from "./Product";

function Products() {
  return (
    <div className="flex flex-wrap p-5">
      {ApiTopPropducts.map((product, index) => (
        <Product item={product} key={index} />
      ))}
    </div>
  );
}

export default Products;
