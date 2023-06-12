import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import axios from "axios";
import Footer from "../components/Footer";





const Register = (props) => {
  const nav = useNavigate()
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [vendor_name, setVendorName] = useState("");
  const [vendor_type, setVendorType] = useState("");
  const [location, setLocation] = useState("");
  const [profile_photo, setProfilePhoto] = useState("");
  const [bio, setBio] = useState("");
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
      url: `${URI}users/register`,
      data: {
        username,
        email,
        password,
        vendor_name,
        vendor_type,
        location,
        profile_photo,
        bio
      }
    }
  

    try {
    axios(config)
    .then((results) => {
      setSuccess(true);
      console.log(results.data.data)
      props.setUser(results.data.data)
    })
    .catch((error) => {
      const fail = (error.response.data.message)
      setError(fail)
    })
  } catch (error) {
    console.log("An error occurred:", error);
  }
}
  



return(
    <div className="regPage">
      <p className="regHeader">Please fill out this form to begin making and viewing content.</p>
      <div className="regBox">
        <div className="regRight">
          <img className="regPhoto" src="https://images.unsplash.com/photo-1606104218551-2c2ad1231dc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80" alt="Florist"/>
        </div>

        
          <form className="regForm" onSubmit={handleSubmit}>
            
            <TextField
            id="outlined-basic"
            label="Username"
            sx = {{color: "main"}}
            variant="outlined"
            value= {username}
            name= "username"
            onChange={(e) => setUsername(e.target.value)}
            />

            <TextField
            id = "outlined-basic"
            sx = {{color: "main"}}
            variant="outlined"
            value= {email}
            name= "email"
            label="E-mail"
            onChange={(e) => setEmail(e.target.value)}
            />

           <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                value={password}
                name= "password"
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


            <TextField
            id = "outlined-basic"
            sx = {{color: "main"}}
            variant="outlined"
            value= {vendor_name}
            name= "vendor_name"
            label="Vendor Name"
            onChange={(e) => setVendorName(e.target.value)}
            />



        <FormControl>
        <InputLabel id="demo-simple-select-helper-label">Vendor Type</InputLabel>
          <Select
            value={vendor_type}
            label="Vendor Type"
            onChange={(e) => setVendorType(e.target.value)}
            name= "vendor_type"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={0}>Planner</MenuItem>
            <MenuItem value={1}>Day-of-Coordinator</MenuItem>
            <MenuItem value={2}>Food Catering</MenuItem>
            <MenuItem value={3}>DJ/Entertainment</MenuItem>
            <MenuItem value={4}>Photography/Videography</MenuItem>
            <MenuItem value={5}>Floral Design</MenuItem>
            <MenuItem value={6}>Officiant</MenuItem>
          </Select>
        </FormControl>



            <TextField
            id = "outlined-basic"
            sx = {{color: "main"}}
            variant="outlined"
            value= {location}
            name= "location"
            label="Location"
            onChange={(e) => setLocation(e.target.value)}
            />

            <TextField
            id = "outlined-basic"
            sx = {{color: "main"}}
            variant="outlined"
            value= {profile_photo}
            name= "profile_photo"
            label="Profile Photo URL"
            onChange={(e) => setProfilePhoto(e.target.value)}
            />

            <TextField
            id = "outlined-multiline-flexible"
            sx = {{color: "main"}}
            variant="outlined"
            maxRows={4}
            multiline
            value= {bio}
            name= "bio"
            label="Bio"
            placeholder="Tell us what you do!"
            onChange={(e) => setBio(e.target.value)}
            />

            {success ? (
                nav('/')
              ) : (
                
                <p className="warnP"></p>
              )}
            {error ? <label className="registerErr">{error}</label>: null}


          <div className="regBtn">
            <Button variant="contained" type="submit">Sign Up</Button>
          </div>

          </form>
        
      </div>
      <Footer/>          
    </div>
)

}

export default Register;
