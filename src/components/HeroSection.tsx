import "./heroSection.scss";

function HeroSection() {
  return (
    <section className='hero-section'>
      <div
        className='hero-info'
        data-aos='slide-right'
        data-aos-duration='800'
        data-aos-easing='ease'
      >
        <h3>Open Your Eyes To Another World</h3>
        <p>
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y
          archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar{" "}
        </p>
        <button className='btn'>Let's start</button>
      </div>

      <div
        className='img-container'
        data-aos='slide-left'
        data-aos-duration='800'
        data-aos-easing='ease'
      >
        <img src='/images/planet.png' alt='planet' className='planet' />
        <img src='/images/star.png' alt='planet' className='star' />
        <img src='/images/vr-minimalist.png' alt='' />
      </div>
    </section>
  );
}

export default HeroSection;
