import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";

const Register = (props) => {
  const nav = useNavigate()
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    password: "",
    vendor_name: "",
    vendor_type: "",
    location: "",
    profilePhoto: "",
    bio: ""
  })

const handleChange = (event) => {
  setUserInfo({...userInfo, [event.target.name]: event.target.value})
}

const handleSubmit = (event) => {
  event.preventDefault()
  props.createAccount(userInfo)
  // nav('/')
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

// const getSelectedVal = () => {
//   let selectedVal = document.getElementById("dropDn").value
//   console.log(selectedVal)
// }

return(
  <div>
    <Header />
    <form onSubmit={handleSubmit}>
      <input
      className="registerInput"
      type= "text"
      value= {userInfo.username}
      name= "username"
      placeholder="Username"
      onChange={handleChange}
      />
      <input
      className="registerInput"
      type= "text"
      value= {userInfo.email}
      name= "email"
      placeholder="E-mail"
      onChange={handleChange}
      />
      <input
      className="registerInput"
      type= "text"
      value= {userInfo.password}
      name= "password"
      placeholder="Password"
      onChange={handleChange}
      />
      <input
      className="registerInput"
      type= "text"
      value= {userInfo.vendor_name}
      name= "vendor_name"
      placeholder="Vendor Name"
      onChange={handleChange}
      />

      <label>Vendor Type</label>
      <select
      id = "dropDn"
      className="registerCkBox"
      name="vendor_type"
      value={userInfo.vendor_type}
      onChange={handleChange}
      >
        <option>Choose you vendor Type</option>
        <option value="0">Planner</option>
        <option value="1">Day-of-coordinator</option>
        <option value="2">Food Caterning</option>
        <option value="3">DJ/Entertainment</option>
        <option value="4">Photography/Videography</option>
        <option value="5">Floral Design</option>
        <option value="6">Officiant</option>
      </select>

      <input
      className="registerInput"
      type= "text"
      value= {userInfo.location}
      name= "location"
      placeholder="Location"
      onChange={handleChange}
      />
      <input
      className="registerInput"
      type= "text"
      value= {userInfo.profile_photo}
      name= "profile_photo"
      placeholder="Set Profile Photo with a URL"
      onChange={handleChange}
      />
      <input
      className="registerInput"
      type= "text"
      value= {userInfo.bio}
      name= "bio"
      placeholder="Tell us about what you do!"
      onChange={handleChange}
      />

      <button className="signUpBtn" type="submit">Sign Up</button>

    </form>
  </div>
)

}

export default Register;