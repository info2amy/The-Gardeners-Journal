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
        <h1>LOGO</h1>
        {currentUser ? (
          <>
            <p>Welcome, {currentUser.username}!</p>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <Link to="/login">Login/Register</Link>
        )}
      </header>

      {currentUser && (
        <>
          <Link to="/plants">See Plants Gallery</Link>
          <Link to="/zones">See Zones Map</Link>
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
