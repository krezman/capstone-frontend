import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";

const PostCreate = (props) => {
  const nav = useNavigate()
  const [postInfo, setPostInfo] = useState({
    photo: "",
    text: "",
    id: props.user.id
  })

  const handleChange = (event) => {
    setPostInfo({...postInfo, [event.target.name]: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.createPost(postInfo)
    // nav('/')
    setPostInfo({
      photo: "",
      text: "",
      id: props.user.id
    })
  }



  return (
    <div>
    <Header />
    <form onSubmit={handleSubmit}>
      <input
      className="postInput"
      type= "text"
      value= {postInfo.photo}
      name= "photo"
      placeholder="Photo URL Here"
      onChange={handleChange}
      />
      <input
      className="postInput"
      type= "text"
      value= {postInfo.text}
      name= "text"
      placeholder="What do you want to say about this post?"
      onChange={handleChange}
      />

      <button className="signUpBtn" type="submit">Publish Post</button>

    </form>
  </div>
  )
}

export default PostCreate;