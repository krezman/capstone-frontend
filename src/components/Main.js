import { useState, useEffect } from "react";
import {Route, Routes} from "react-router-dom";
import Posts from "./Posts";
import Register from "../pages/Register";
import Home from "../pages/Home";


const Main = (props) => {
  const URI = `${process.env.REACT_APP_API_URI}`

  const [postData, setPostData] = useState(null)

const getPostData = async() => {
  try {
    const response = await fetch(URI)

    const data = await response.json()
    setPostData(data.data);
    if (postData !== null)
    console.log(postData)
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
  getPostData()
}, [])

return (
<main>
  <Routes>
    <Route path="/users/register" element=
    {<Register postData={postData} createAccount={createAccount}/>}/>
    <Route path="/" element={<Home />}/>
  </Routes>
</main>
)

}

export default Main;