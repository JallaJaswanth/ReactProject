import React, { useState } from "react";
import "./products.css";
import plane from "../../assets/plane.png";
import { ProductsData } from "../../data/products";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const Products = () => {
  const [parent] = useAutoAnimate();
  const [menuProducts, setMenuProducts] = useState(ProductsData);

  const filter = (type) => {
    setMenuProducts(ProductsData.filter((product) => product.type === type));
  };
  return (
    <div className="pContainer">
      <img src={plane} alt="planeImage" />
      <h1>Our Featured Products</h1>
      <div className="products">
        <ul className="pMenu">
          <li onClick={() => setMenuProducts(ProductsData)}>All</li>
          <li onClick={() => filter("skin care")}>Skin Care</li>
          <li onClick={() => filter("conditioner")}>Conditioners</li>
          <li onClick={() => filter("foundation")}>Foundations</li>
        </ul>
        <div className="list" ref={parent}>
          {menuProducts.map((product, i) => (
            <div className="product">
              <div className="left">
                <div className="names">
                  <span>{product.name}</span>
                  <span>{product.detail}</span>
                </div>
                <span>{product.price}$</span>
                <div>Shop Now</div>
              </div>
              <img
                src={product.img}
                alt="productImages"
                className="productImage"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
