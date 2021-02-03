import { Link } from "react-router-dom";
import "./Layout.css";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { GrInstagram, GrPinterest, GrMailOption } from "react-icons/gr";

export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div className="layout">
      <header>
        <h1 className='logo'>LOGO</h1>
        {currentUser ? (
          <div className='welcomeLogout'>
            <p>Welcome, {currentUser.username}!</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <button className='logButton'><Link to="/login">Login/Register</Link></button>
        )}
      </header>

      {currentUser && (
        <> <br/>
          <Link to="/plants"> See Plants Gallery </Link> <br/>
          <Link to="/zones"> See Zones Map </Link>
        </>
      )}
      {props.children}
      <footer>
      <a href="https://twitter.com/" target="_blank" rel="noreferrer">
        <AiFillTwitterCircle size="1.8em" color="black" />
      </a>
      <a href="https://facebook.com/" target="_blank" rel="noreferrer">
        <FaFacebook size="1.7em" color="black" />
      </a>
      <a href="https://instagram.com/" target="_blank" rel="noreferrer">
        <GrInstagram size="1.6em" color="black" />
      </a>
      <a href="https://pinterest.com/" target="_blank" rel="noreferrer">
        <GrPinterest size="1.6em" color="black" />
      </a>
      <a href="mailto:someone@yoursite.com" target="_blank" rel="noreferrer">
        <GrMailOption size="1.7em" color="black" />
      </a>
    </footer>
    </div>
  );
}
