import React from "react";
import "./product_page.scss";
import MenubarContainer from "../_common/component/menubar/menubar_container";
import ProductListContainer from "./container/product_list_container";
// import NavContainer from "src/_common/component/nav/nav_container";

const ProductPage: React.FC = () => {
  return (
    <>
      <MenubarContainer />
      <div className="root">
        {/* <NavContainer /> */}
        <ProductListContainer />
      </div>
    </>
  );
};

export default ProductPage;
