import React from "react";
import "./details.scss";

type DetailsProps = {
  src: string;
  title: string;
  desc: string;
  dark: boolean;
  direction: string;
};

function Details({ src, title, desc, dark, direction }: DetailsProps) {
  return (
    <section className={dark ? "details dark" : "details"}>
      <div
        className='img-container'
        data-aos={dark ? "slide-left" : "slide-right"}
        data-aos-duration='800'
        data-aos-easing='ease'
        data-aos-once='true'
      >
        <img src={src} alt='' />
      </div>
      <div
        className='details__desc'
        data-aos={dark ? "slide-right" : "slide-left"}
        data-aos-duration='800'
        data-aos-easing='ease'
        data-aos-once='true'
      >
        <h3>{title}</h3>
        <p style={dark ? { color: "#b1b1b1" } : {}}>{desc}</p>
        <button className='btn'>View More</button>
      </div>
    </section>
  );
}

export default Details;
