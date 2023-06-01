import React, { useEffect, useState } from "react";
import '../App.css'
import { useParams, Link } from "react-router-dom";

const PostShow = (props) => {
  const [info, setInfo] = useState(null)
  const params = useParams()
  const id = parseInt(params.id)
 
  
  useEffect(() => {
    const response = props.getOnePostData(id)
    console.log(response)
    setInfo(response)
 }, [])

 const specifPost = props.onePostData

  // const specifPost = info.find((post) => post.id === id)
  

  

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