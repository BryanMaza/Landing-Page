import "./navbar.scss";
import { useGlobalContext } from "../Context";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const context = useGlobalContext();

  //Para que no scrollee cuando se abre el menu
  useEffect(() => {
    if (context?.isOpenMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [context?.isOpenMenu]);

  const dontShowMenu = () => {
    if (window.innerWidth > 1000) {
      context?.closeMenu();
    }
  };

  window.addEventListener("resize", dontShowMenu);

  return (
    <nav className={context?.isOpenMenu ? "nav active" : "nav"}>
      <div className='nav__container'>
        <div className='nav__items'>
          <button onClick={context?.closeMenu}>
            <i className='fas fa-times fa-2x'></i>
          </button>
          <h3>
            <Link to='/'>VR MODERN</Link>
          </h3>
          <div className='list-item'>
            <ul>
              <li onClick={context?.closeMenu}>
                <Link to='/'>Home</Link>{" "}
              </li>
              <li onClick={context?.closeMenu}>
                <Link to='/about'>About</Link>
              </li>
              <li onClick={context?.closeMenu}>
                <Link to='products'>Products</Link>
              </li>
            </ul>
            <button className='btn'>Contact</button>
          </div>
        </div>
      </div>
      <button className='nav__btn-menu' onClick={context?.openMenu}>
        <i className='fas fa-bars fa-2x'></i>
      </button>
    </nav>
  );
}

export default Navbar;
