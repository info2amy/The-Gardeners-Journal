import { Link } from 'react-router-dom';

export default function Layout(props) {
  const { currentUser, setCurrentUser } = props;
  return (
    <div>
      <header>
        <h1>LOGO</h1>
        {currentUser ? (
          <>
            <p>`Welcome, ${currentUser.username}!`</p>
            {/* <button onClick={handleLogout}>Logout</button> */}
          </>
        ) : (
          <Link to='/login'>Login/Register</Link>
        )}
      </header>
    </div>
  )
}
