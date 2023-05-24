import React from "react";
import '../App.css'

const Post = (props) => {
  return(
  <div>
    <h2>{props.post_owner.username}</h2>
    <img src={props.photo} alt={props.post_owner.username}/>
    <h2>{props.text}</h2>
  </div>
  )
}

export default Post