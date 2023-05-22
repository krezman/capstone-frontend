import React from "react";
import '../App.css'

const Post = (props) => {
  return(
  <div>
    <h2>{props.post_owner.username}</h2>
    <h2>{props.photo}</h2>
    <h2>{props.text}</h2>
  </div>
  )
}

export default Post