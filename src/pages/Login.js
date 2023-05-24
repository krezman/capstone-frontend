import { useNavigate, Link } from "react-router-dom";
import Header from "../components/Header";
import { useState } from "react";
import axios from "axios";

const Login = (props) => {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")
  const URI = `${process.env.REACT_APP_API_URI}`


  const handleSubmit = (event) => {
    event.preventDefault()
    
    const config = {
      method: "POST",
      url: `${URI}users/login`,
      data: {
        email,
        password
      }
    }

    axios(config)
    .then((results) => {
      setSuccess(true);
    })
    .catch((error) => {
      const fail = (error.response.data.message)
      setError(fail)
    })
  }

return(
  <>
  <Header/>
  <section>

  <form className="loginForm" onSubmit={handleSubmit}>
    <div className="loginInputs">

  <input
  className="loginInput"
  name= "email"
  required value={email} type="email" 
  onChange={(e) => setEmail(e.target.value)}
  placeholder="Email"/>

  <input
  className="loginInput"
  name= "password"
  required value={password} type="password" 
  onChange={(e) => setPassword(e.target.value)}
  placeholder="Password"/>

  </div>
  <div className="loginInput">
  <button className="loginButton" type="submit">LOGIN</button>
  {success ? (
          nav('/')
        ) : (
          
          <p className="warnP"></p>
        )}
  {error ? <label className="loginErr">{error}</label>: null}
        </div>

         <p className="loginP"><span className="spanP">Don’t have an account? Create your profile</span> <Link className="registerLink" to="/users/register">Sign up</Link></p> 
  
  </form>
  </section>
  </>
)
}

export default Login;