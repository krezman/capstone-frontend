import React from "react";
import '../App.css'
import { Link } from "react-router-dom";

const Post = (props) => {
  return(
  <div>
    <Link to={`/users/${props.post_owner.id}`}>
      <h2>{props.post_owner.username}</h2>
    </Link>
    <img src={props.photo} alt={props.post_owner.username}/>
  </div>
  )
}

export default Post