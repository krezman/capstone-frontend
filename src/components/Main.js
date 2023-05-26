import { useState, useEffect } from "react";
import {Route, Routes} from "react-router-dom";
import Posts from "./Posts";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Profile from "../pages/Profile";


const Main = (props) => {
  const URI = `${process.env.REACT_APP_API_URI}`

const [postData, setPostData] = useState(null)
const [profileData, setProfileData] = useState(null)

const getPostData = async() => {
  try {
    const response = await fetch(`${URI}posts/index`)

    const data = await response.json()
    setPostData(data.data);
    if (postData !== null)
    console.log(postData)
  } catch (error) {
    console.log(error)
  }
}

const getProfileData = async() => {
  try {
    const response = await fetch(`${URI}users/index`)

    const data = await response.json()
    setProfileData(data.data);
    if (profileData !== null)
    console.log(profileData)
  } catch (error) {
    console.log(error)
  }
}


const createAccount = async (person) => {
  await fetch(`${URI}users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(person)
  })
  getPostData()
}

const loginTo = async (person) => {
  await fetch(`${URI}users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(person)
  })
}

const createPost = async (post) => {
  await fetch(`${URI}/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(post)
  })
  getPostData()
}

const updatePost = async (post, id) => {
  await fetch(URI + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(post)
  })
  getPostData()
}

const deletePost = async (id) => {
  await fetch(URI + id, {
    method: "DELETE"
  })
  getPostData()
}


useEffect(() => {
  getProfileData()
  getPostData()
}, [])

return (
<main>
  <Routes>
    <Route path="/posts/index" element=
    {<Posts postData={postData} />}/>

    <Route path="/users/:id" element=
    {<Profile profileData={profileData}/>}/>

    <Route path="/users/register" element=
    {<Register postData={postData} createAccount={createAccount}/>}/>

    <Route path= "/users/login" element=
    {<Login postData={postData} loginTo={loginTo}/>}/>

    <Route path="/" element={<Home />}/>
  </Routes>
</main>
)

}

export default Main;