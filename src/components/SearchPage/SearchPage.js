import React, { useContext } from "react";
import { GlobalContext } from "./../../context/GlobalState";
import Product from "./../Products/Product";

function SearchPage() {
  const { searched } = useContext(GlobalContext);
  return (
    <section>
      <div className="products" style={{ paddingTop: "50px" }}>
        {searched.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default SearchPage;
