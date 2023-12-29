import React from "react";
import ShelfProducts from "./ShelfProducts";

import products from "./products";

const ProductList = () => {
  return (
    <div>
      <h2>As mais pedidas</h2>
      <ShelfProducts products={products} />
    </div>
  );
};

export default ProductList;
