import React, { useEffect, useState } from "react";
import SingelProduct from "../SingelProduct/SingelProduct";
import "./AllProducts.css";

const AllProducts = (props) => {
  const { setCartCount } = props;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products]);

  console.log(products);
  return (
    <div>
      <h1>ALL products</h1>

      <div className="row container">
        {products.map((pd) => (
          <SingelProduct
            setCartCount={setCartCount}
            key={pd.id}
            product={pd}
          ></SingelProduct>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
