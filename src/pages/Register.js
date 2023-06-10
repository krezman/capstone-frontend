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





const Register = (props) => {
  const nav = useNavigate()

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    password: "",
    vendor_name: "",
    vendor_type: "",
    location: "",
    profile_photo: "",
    bio: ""
  })

const handleChange = (event) => {
  setUserInfo({...userInfo, [event.target.name]: event.target.value})
}

const handleSubmit = (event) => {
  event.preventDefault()
  props.createAccount(userInfo)
  nav('/')
  setUserInfo({
    username: "",
    email: "",
    password: "",
    vendor_name: "",
    vendor_type: "",
    location: "",
    profile_photo: "",
    bio: ""
  })
}



return(
    <div className="regPage">
      <div className="regBox">
        <div className="regRight">
          <img className="regPhoto" src="https://images.unsplash.com/photo-1606104218551-2c2ad1231dc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80" alt="Florist"/>
        </div>

        
          <form className="regForm" onSubmit={handleSubmit}>
            
            <TextField
            id="outlined-basic"
            label="Username"
            sx = {{color: "main"}}
            margin= "normal"
            variant="outlined"
            value= {userInfo.username}
            name= "username"
            onChange={handleChange}
            />

            <TextField
            id = "outlined-basic"
            sx = {{color: "main"}}
            margin= "normal"
            variant="outlined"
            value= {userInfo.email}
            name= "email"
            label="E-mail"
            onChange={handleChange}
            />

           <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                value={userInfo.password}
                name= "password"
                onChange={handleChange}
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
            margin= "normal"
            variant="outlined"
            value= {userInfo.vendor_name}
            name= "vendor_name"
            label="Vendor Name"
            onChange={handleChange}
            />



        <FormControl>
        <InputLabel id="demo-simple-select-helper-label">Vendor Type</InputLabel>
          <Select
            value={userInfo.vendor_type}
            label="Vendor Type"
            onChange={handleChange}
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
            margin= "normal"
            variant="outlined"
            value= {userInfo.location}
            name= "location"
            label="Location"
            onChange={handleChange}
            />

            <TextField
            id = "outlined-basic"
            sx = {{color: "main"}}
            margin= "normal"
            variant="outlined"
            value= {userInfo.profile_photo}
            name= "profile_photo"
            label="Profile Photo URL"
            onChange={handleChange}
            />

            <TextField
            id = "outlined-multiline-flexible"
            sx = {{color: "main"}}
            margin= "normal"
            variant="outlined"
            maxRows={4}
            multiline
            value= {userInfo.bio}
            name= "bio"
            label="Bio"
            placeholder="Tell us what you do!"
            onChange={handleChange}
            />

<Button variant="contained" type="submit">Sign Up</Button>

          </form>
        
      </div>
    </div>
)

}

export default Register;