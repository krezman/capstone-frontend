import React, { useEffect, useState } from "react";
import '../App.css'
import { useParams, Link, useNavigate } from "react-router-dom";







const PostShow = (props) => {
  const [info, setInfo] = useState(null)
  const [toggle, setToggle] = useState(null)
  
  const params = useParams()
  const id = parseInt(params.id)
  const nav = useNavigate()
  
  
  const specifPost = props.onePostData

  useEffect(() => {
    const response = props.getOnePostData(id)
    // console.log(response)
    setInfo(response)
 }, [])

 useEffect(() => {
  if (specifPost) {
    setEditForm(specifPost)
  }
}, [specifPost])



  

  const [editForm, setEditForm] = useState(null)

  console.log("LOOK AT ME!!!", editForm)

  const handleChange = (event) => {
    setEditForm({...editForm, [event.target.name]: event.target.value})
   };


  const handleSubmit = async (event) => {
    event.preventDefault();
    const { photo, text } = editForm;  
  
    
    const payload = {
      photo: photo,
      text: text
    };
  
    await props.updatePost(payload, id);
    nav(`/posts/${id}`);
  };



   const removePost = (event) => {
    event.preventDefault()
    props.deletePost(specifPost.id)
    nav('/posts/index')
   };


   const handleToggle = () => {
    setToggle(!toggle)
   };

  

if ((specifPost && props.user !== null) && (specifPost.post_owner.id === props.user.id)) {
  return(
    <section>

      <div>
        <Link to={`/users/${specifPost.post_owner.id}`}>
          <h2>{specifPost.post_owner.username}</h2>
        </Link>
        <img src={specifPost.photo} alt={specifPost.post_owner.username}/>
        <h3>{specifPost.text}</h3>
        <p>{specifPost.date_created}</p>
      </div>

      {toggle ? (
        <div>
          <form onSubmit={handleSubmit}>
            <input
            type="text"
            value={editForm.photo}
            name="photo"
            placeholder={specifPost.photo}
            onChange={handleChange}
            />
            <input
            type="text"
            value={editForm.text}
            name="text"
            placeholder={specifPost.text}
            onChange={handleChange}
            />
            <div>
              <button type="submit">Publish Edit</button>
              <button onClick={removePost}>Delete Post</button>
            </div>
          </form>
        </div>
      ) : (<button onClick={handleToggle}>Edit Post</button>)}

    </section>
  )
} else if (specifPost && props.user !== null) {
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
}

export default PostShow;