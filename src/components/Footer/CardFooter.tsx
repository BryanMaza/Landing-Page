import React from "react";

type CardFooterProps = {
  title: string;
  info: Array<String>;
};

function CardFooter({ title, info }: CardFooterProps) {
  return (
    <div className='card-footer'>
      <h4>{title}</h4>
      {info.map((item, i) => (
        <p
          key={i}
          data-aos='zoom-out-left'
          data-aos-duration='800'
          data-aos-easing='ease'
          data-aos-once='true'
        >
          {item}
        </p>
      ))}
    </div>
  );
}

export default CardFooter;
