import React from "react";

type CardProps = {
  title: string;
  src?: string;
  price?: number;
};

function Card({ title, src, price }: CardProps) {
  return (
    <article
      className='card'
      data-aos='zoom-in'
      data-aos-duration='800'
      data-aos-easing='ease'
      data-aos-once='true'
    >
      <h4>{title}</h4>
      {src && <img src={src} alt='product' />}
      <div className='card__details'>
        {src && <p>{price}€ USD</p>}
        {src && (
          <button>
            <i className='fas fa-shopping-cart fa-lg'></i>
          </button>
        )}
      </div>

      {!src && (
        <button>
          <i className='fas fa-angle-double-right fa-lg'></i>
        </button>
      )}
    </article>
  );
}

export default Card;
