import React from "react";
import '../App.css'
import { Link } from "react-router-dom";

const Post = (props) => {
  const date = props.date_created
  // console.log(typeof date)
  return(
  <div>
    <Link to={`/posts/${props.id}`}>
      <img className="postImg" src={props.photo} alt={props.post_owner.username}/>
    </Link>
    <Link className="indexLink" to={`/users/${props.post_owner.id}`}>
      <h2>{props.post_owner.username}</h2>
    </Link>
    {/* <p>{date}</p> */}
  </div>
  )
}

export default Post