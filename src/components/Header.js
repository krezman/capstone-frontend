import { Link } from "react-router-dom"
import { Button } from "@mui/material";
import Logout from "./Logout";
import MenuBar from "./MenuBar";

const Header = (props) => {
  return (
    
    <nav>
      <div className="some">
        <img className="firstPhoto" src="https://images.unsplash.com/photo-1522413452208-996ff3f3e740?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Wedding flowers"/>
      </div>
      <div className="navMain">

        
        <div>
          <Link to="/">
              <img className="logo" src="https://i.imgur.com/NRq6NCU.png" alt="Your Day Logo"/>
          </Link>
        </div>

        <div className="rightNav">
          {/* {props.user ? 
            null
            : 
            <div>
                <Link className="option" to="/users/register">         
                    <h1 className="options">Sign up</h1> 
                </Link>
              </div>
            }
             */}
            {props.user ? 
            null
            : 
              <div className="menuBtn">
                {/* <Link className="option" to="/users/login">    
                <Button sx = {{color: "main"}} variant="contained" type="submit">LOGIN</Button>      
                </Link> */}
                <MenuBar/>
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