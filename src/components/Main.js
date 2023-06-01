import { useState, useEffect } from "react";
import {Route, Routes, useParams} from "react-router-dom";
import Posts from "./Posts";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import PostShow from "../pages/PostShow";


const Main = (props) => {
const URI = `${process.env.REACT_APP_API_URI}`


const [user, setUser] = useState()
const [postData, setPostData] = useState(null)
const [onePostData, setOnePostData] = useState(null)
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

const getOnePostData = async(id) => {
  try {
    const response = await fetch(`${URI}posts/${id}`)

    const data = await response.json()
    console.log(data.data, "Single Post Response")
    // console.log("dataLOG", data)
    setOnePostData(data.data);
    if (onePostData !== null)
    console.log(onePostData)
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
  getOnePostData()
}, [])



return (
<main>
  <Routes>
    <Route path="/posts/index" element=
    {<Posts postData={postData} />}/>

    <Route path="/posts/:id" element=
    {<PostShow getOnePostData={getOnePostData} onePostData={onePostData}/>}/>

    <Route path="/users/:id" element=
    {<Profile profileData={profileData}/>}/>

    <Route path="/users/register" element=
    {<Register postData={postData} createAccount={createAccount}/>}/>

    <Route path= "/users/login" element=
    {<Login postData={postData} setUser={setUser}/>}/>

    <Route path="/" element={<Home user={user}/>}/>
  </Routes>
</main>
)

}

export default Main;