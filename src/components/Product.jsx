import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import React from "react";

function Product({ item }) {
  return (
    <div>
      <img src={item.src} alt="product_image" />
      <div>
        {/* icons */}
        <div>
          <ShoppingCartOutlined />
        </div>
        <div>
          <FavoriteBorderOutlined />
        </div>
        <div>
          <SearchOutlined />
        </div>
      </div>
    </div>
  );
}

export default Product;
