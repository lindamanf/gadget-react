import React, { useContext, useMemo, useEffect, FC } from "react";
import { Context } from "../../App";
import { db } from "../../config/firebase";
import { ProductActionType } from "../product_reducer";
import { IProduct } from "../../_core/interfaces/interface";
import ProductCardComponent from "../component/product_card_component";
import "./product_list_container.scss";

const ProductListContainer: FC = () => {
  const context = useContext(Context);
  const productContext = useMemo(() => context.find, [context]);
  const { products } = productContext.state;

  const fetch = useMemo(
    () => async () => {
      const col_products = await db.collection("products").get();
      const products = col_products.docs.map((doc) => doc.data() as IProduct);
      productContext.dispatch({
        type: ProductActionType.FETCH_SUCCESS,
        products: products,
      });
    },
    []
  );

  useEffect(() => {
    fetch();
  }, []);

  return useMemo(
    () => (
      <div className="list">
        {products.map((p, i) => (
          <ProductCardComponent key={i} product={p} />
        ))}
      </div>
    ),
    [products]
  );
};

export default ProductListContainer;
