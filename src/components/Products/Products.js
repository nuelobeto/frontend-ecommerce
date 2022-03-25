import React, { useContext } from "react";
import Product from "./Product";
import "./Products.css";
import { GlobalContext } from "./../../context/GlobalState";

function Products() {
  const { products } = useContext(GlobalContext);

  return (
    <section>
      <p>Products</p>
      <div className="products">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default Products;
