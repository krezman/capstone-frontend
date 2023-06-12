import React, { useEffect, useState } from "react";
import '../App.css'
import { useParams, Link, useNavigate } from "react-router-dom";
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import { Button, TextField } from "@mui/material";


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
    nav(`/users/${props.user.id}`)
  };



   const removePost = (event) => {
    console.log("YOU HIT THE REMOVE POST FUNCTION")
    event.preventDefault()
    event.stopPropagation();
    props.deletePost(specifPost.id)
    nav('/posts/index')
   };


   const handleToggle = () => {
    setToggle(!toggle)
   };
  

if ((specifPost && props.user !== null) && (specifPost.post_owner.id === props.user.id)) {
  const dateArray = specifPost.date_created.split('')
  const newDateArray = dateArray.splice(16, 13)
  const refinedDate = dateArray.splice(7, 4)
  const date = dateArray.join('')


  return(
    <section className="postShowPage">

      <div className="postShowBox">
        <div className="postShowUser">
          <Link to={`/users/${specifPost.post_owner.id}`}>
            <h2>{specifPost.post_owner.username}</h2>
          </Link>
        </div>

        <img className="postImgShow" src={specifPost.photo} alt={specifPost.post_owner.username}/>

        <div className="text">
          <div className="postShowText">
            <span>{date}</span>
            <h2>{specifPost.text}</h2>
          </div>
        </div>
        {/* <p>{specifPost.date_created}</p> */}
      </div>

      <div className="postEdit">
        
          {toggle ? (
            <div className="postEditForm">
              <form className="editForm" onSubmit={handleSubmit}>

                <div className="editInputs">
                  <TextField
                    id = "outlined-basic"
                    sx = {{color: "main"}}
                    margin= "normal"
                    variant="outlined"
                    value= {editForm.photo}
                    placeholder={specifPost.photo}
                    label="Photo URL"
                    name="photo"
                    onChange={handleChange}
                    />

                  <TextField
                    id = "outlined-basic"
                    sx = {{color: "main"}}
                    margin= "normal"
                    variant="outlined"
                    maxRows={4}
                    multiline
                    value= {editForm.text}
                    placeholder={specifPost.text}
                    label="Text"
                    name="text"
                    onChange={handleChange}
                    />
                </div>

                <div className="editPageBtns">
                  <Button variant="contained" type="submit">Publish Edits <PublishedWithChangesIcon/>
                  </Button>
                  <Button color="secondary" variant="contained" onClick={(event) => {event.preventDefault();if (window.confirm("Are you sure you want to delete this post?")) {removePost(event);}}}>Delete Post <DeleteForeverRoundedIcon/>
                  </Button>
                </div>
                
              </form>
            </div>
          ) : (<Button classname="editBtn" variant="contained" onClick={handleToggle}>Edit Post <EditTwoToneIcon/>
        </Button>)}
      
    </div>

    </section>
  )
} else if (specifPost && props.user !== null) {
  const dateArray = specifPost.date_created.split('')
  const newDateArray = dateArray.splice(16, 13)
  const refinedDate = dateArray.splice(7, 4)
  const date = dateArray.join('')


  return (
    <div className="postShowBox">
      <div className="postShowUser">
        <Link to={`/users/${specifPost.post_owner.id}`}>
          <h2>{specifPost.post_owner.username}</h2>
        </Link>
      </div>

      <img className="postImgShow" src={specifPost.photo} alt={specifPost.post_owner.username}/>

      <div className="text">
        <div className="postShowText">
          <span>{date}</span>
          <h3>{specifPost.text}</h3>
        </div>
      </div>
      {/* <p>{specifPost.date_created}</p> */}
    </div>
  )
  }
}

export default PostShow;