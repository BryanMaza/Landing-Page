import CardInfo from "./CardInfo";
import "./info.scss";
function Info() {
  return (
    <section className='info'>
      <CardInfo
        icon='fas fa-sliders-h fa-2x'
        title='Unique User Experience'
        clase='experience'
      />
      <CardInfo
        icon='fas fa-vr-cardboard fa-2x'
        title='New & Great Funcionality'
        clase='functionality'
      />
      <CardInfo
        icon='fas fa-gamepad fa-2x'
        title='Control Comes Naturally'
        clase='control'
      />
    </section>
  );
}

export default Info;
