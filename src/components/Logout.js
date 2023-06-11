import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Logout = (props) => {
  const nav = useNavigate()
  const URI = `${process.env.REACT_APP_API_URI}`



  const handleSubmit = () => {
    
    const config = {
      method: "GET",
      url: `${URI}users/logout`,
    }
    nav('/')

    axios(config)
    .then((results) => {
      console.log(results)
      props.setUser(results.data)

    })
    .catch((error) => {
      console.log(error)
    })
  }

  return(
    <form className="loginForm" onSubmit={handleSubmit}>
    <button className="loginButton" type="submit">LOGOUT</button>

    </form>
  )
}

export default Logout;