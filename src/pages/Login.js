import { useNavigate, Link } from "react-router-dom";
import Header from "../components/Header";
import { useState } from "react";
import axios from "axios";
import { TextField, Button } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';



const Login = (props) => {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")
  const URI = `${process.env.REACT_APP_API_URI}`


  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


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
      props.setUser(results.data.data)
    })
    .catch((error) => {
      const fail = (error.response.data.message)
      setError(fail)
    })
  }

return(
  <>
  <section className="login">

    <div className="logRight">
      <img className="logPhoto" src="https://images.unsplash.com/photo-1666305132656-097bd699e023?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="Wedding Planning"/>
    </div>

    

    <form className="loginForm" onSubmit={handleSubmit}>
      <div className="loginInputs">

        <h1>Welcome Back!</h1>


        <TextField
          id = "outlined-basic"
          sx = {{color: "main"}}
          margin= "normal"
          variant="outlined"
          value= {email}
          label="E-mail"
          onChange={(e) => setEmail(e.target.value)}
          />


        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                  </InputAdornment>
                  }
                  label="Password"
                />
        </FormControl>

      </div>

      <div className="loginInput">
        <Button variant="contained" type="submit">LOGIN</Button>
        {success ? (
                nav('/')
              ) : (
                
                <p className="warnP"></p>
              )}
        {error ? <label className="loginErr">{error}</label>: null}


        <p className="loginP"><span className="spanP">Don’t have an account yet?</span> <Link className="registerLink" to="/users/register">Sign up now</Link></p> 
      </div>


      

    
    </form>
  </section>
  </>
)
}

export default Login;