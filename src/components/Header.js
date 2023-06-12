import { Link } from "react-router-dom"

import Logout from "./Logout";

const Header = (props) => {
  return (
    
    <nav>
      <div className="navMain">

        
        <div>
          <Link to="/">
              <img className="logo" src="https://i.imgur.com/Fj8TgeA.png" alt="Your Day Logo"/>
          </Link>
        </div>

        <div className="rightNav">
          {props.user ? 
            null
            : 
            <div>
                <Link className="option" to="/users/register">         
                    <h1 className="options">Sign up</h1> 
                </Link>
              </div>
            }
            
            {props.user ? 
            null
            : 
              <div>
                <Link className="option" to="/users/login">    
                    <h1 className="options">Login</h1>      
                </Link>
              </div>
            }
            
            {props.user ? 
              <div>
                <Link className="option" to="/posts/index">         
                    <h1 className="options">Feed</h1>
                </Link>
              </div>
            : null
            }

            {props.user ? 
              <div>
                <Link className="option" to="/posts/create">
                    <h1 className="options">Create Post</h1>
                </Link>
              </div>
            : null
            }

            {props.user ? 
              <div>
                <Link className="option" to={`users/${props.user.id}`}>
                    <h1 className="options">Profile</h1>
                </Link>
              </div>
            : null
            }

            {props.user ? 
              <div className="logoutBtn">
                <Logout/>
              </div>
            : null
            }
          </div>



      </div>
    </nav>
  )
}

export default Header;