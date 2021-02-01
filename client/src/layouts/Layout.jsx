import { Link } from "react-router-dom";

export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div>
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
          <Link to="/plants">See  Plants  Gallery</Link>
          <Link to="/zones">/See  Zones Map</Link>
        </>
      )}
      {props.children}
    </div>
  );
}
