type CardInfoProps = {
  icon: string;
  title: string;
  clase: string;
};

function CardInfo({ icon, title, clase }: CardInfoProps) {
  return (
    <div className='info__characteristic'>
      <div className={`icon-container ${clase}`}>
        <i className={icon}></i>
        <span className='first-circle'></span>
        <span className='second-circle'></span>
        <span className='three-circle'></span>
        <span className='four-circle'></span>
      </div>
      <h4>{title}</h4>
      <p>
        Lorem Ipsum es simplemente el texto de relleno de las imprentas estándar
        de las industrias desde el año 1500.
      </p>
    </div>
  );
}

export default CardInfo;
