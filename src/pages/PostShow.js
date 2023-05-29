import React from "react";
import '../App.css'
import { useParams, Link } from "react-router-dom";

const PostShow = (props) => {
  const params = useParams()
  const id = parseInt(params.id)
  const info = props.postData
  const specifPost = info.find((post) => post.id === id)
  console.log(specifPost)

  return (
    <div>
      <Link to={`/users/${specifPost.post_owner.id}`}>
        <h2>{specifPost.post_owner.username}</h2>
      </Link>
      <img src={specifPost.photo} alt={specifPost.post_owner.username}/>
      <h3>{specifPost.text}</h3>
      <p>{specifPost.date_created}</p>
    </div>
  )
}

export default PostShow;