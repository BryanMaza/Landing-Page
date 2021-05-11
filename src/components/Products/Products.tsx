import React from "react";
import Card from "./Card";
import "./products.scss";

function Products() {
  return (
    <section className='products'>
      <h3
        data-aos='slide-right'
        data-aos-duration='800'
        data-aos-easing='ease'
        data-aos-once='true'
      >
        PLAY YOUR WAY
      </h3>
      <div className='products__cards'>
        <Card
          title={"Virtual Reality Headset"}
          src={"/images/product-1.png"}
          price={109}
        />
        <Card
          title={"Controller Black"}
          src={"/images/product-2.png"}
          price={70}
        />
        <Card title={"BUY ALL ACCESORIES"} />
      </div>
    </section>
  );
}

export default Products;
