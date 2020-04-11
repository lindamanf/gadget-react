import React from "react";
import "./find_page.scss";
import { db } from "../config/firebase";

function FindPage() {
  const handleClickFetchButton = async () => {
    const product = await db
      .collection("products")
      .doc("CkN8whlUMkRWRrAb5JDq")
      .get();
    console.log(product.data());
  };

  return (
    <div className="root">
      <button onClick={handleClickFetchButton}>Get!</button>
    </div>
  );
}

export default FindPage;
