import Navbar from "./Navbar";
import "./error.scss";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className='container'>
      <div className='header'>
        <Navbar />
      </div>
      <div className='error'>
        <h1>404 NOT FOUND</h1>

        <div className='error__content'>
          <div className='image'>
            <img
              className=' scare'
              src='./images/Scarecrow.png'
              alt='Scarecrow'
            />
          </div>
          <div className='texto'>
            <h1>I have bad news for you</h1>
            <p>
              The page you are looking for migth be removed or is temporarily
              unavailable
            </p>

            <Link to='/' className='btn'>
              BACK TO HOMEPAGE
            </Link>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

export default Error;
