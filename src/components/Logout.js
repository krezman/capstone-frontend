import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Logout = (props) => {
  const nav = useNavigate()
  const [success, setSuccess] = useState(false)
  const URI = `${process.env.REACT_APP_API_URI}`



  const handleSubmit = () => {
    
    const config = {
      method: "GET",
      url: `${URI}users/logout`,
    }

    axios(config)
    .then((results) => {
      setSuccess(true);
      props.setUser(results)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  return(
    <form className="loginForm" onSubmit={handleSubmit}>
    <button className="loginButton" type="submit">LOGOUT</button>


    {success ? (
          nav('/')
        ) : (
          
          <p className="warnP"></p>
        )}
    </form>
  )
}

export default Logout;