import { Link } from "react-router-dom"

const Header = () => {
  return (
    <nav>
      <Link to="/">
        <div>
          <h1>Your Day (LOGO)</h1>
        </div>
      </Link>
      <Link to="users/register">
        <div>
          <h1>Sign up</h1>
        </div>
      </Link>
    </nav>
  )
}

export default Header;