import { Link } from "react-router-dom"

import Logout from "./Logout";

const Header = () => {
  return (
    <nav>
      <Link to="/">
        <div>
          <h1>Your Day (LOGO)</h1>
        </div>
      </Link>
      <Link to="/users/register">
        <div>
          <h1>Sign up</h1>
        </div>
      </Link>
      <Link to="/users/login">
        <div>
          <h1>Login</h1>
        </div>
      </Link>
      <Link to="/posts/index">
        <div>
          <h1>Feed</h1>
        </div>
      </Link>
      <Link to="/posts/create">
        <div>
          <h1>Create Post</h1>
        </div>
      </Link>
      <Logout/>
    </nav>
  )
}

export default Header;