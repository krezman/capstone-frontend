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

// const getSelectedVal = () => {
//   let selectedVal = document.getElementById("dropDn").value
//   console.log(selectedVal)
// }


return(
  <div className="regPage">
    <div className="regBox">
      <div className="regRight">
        <img className="regPhoto" src="https://images.unsplash.com/photo-1606104218551-2c2ad1231dc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80" alt="Florist"/>
      </div>

      
        <form className="regForm" onSubmit={handleSubmit}>
          <label className="regLabels">Username</label>
          <input
          className="registerInputz"
          type= "text"
          value= {userInfo.username}
          name= "username"
          onChange={handleChange}
          />
          <input
          className="registerInput"
          type= "email"
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

          <label className="regLabels">Vendor Type</label>
          <select
          id = "dropDn"
          className="registerInput"
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
          <label>Bio</label>
          <textarea
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
  </div>
)

}

export default Register;