import React from "react";
import '../App.css'

const Post = (props) => {
  <div>
    <h2>{props.photo}</h2>
    <h2>{props.post_owner}</h2>
    <h2>{props.text}</h2>
  </div>
}

export default Post