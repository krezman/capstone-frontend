import React from "react";
import '../App.css'
import { Link } from "react-router-dom";

const ProfilePosts = (props) => {
  const date = props.date_created
  // console.log(typeof date)
  return(
  <div>
    <Link to={`/posts/${props.id}`}>
      <img className="postImg" src={props.photo} alt={props.post_owner.username}/>
    </Link>
    {/* <p>{date}</p> */}
  </div>
  )
}

export default ProfilePosts