import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";


const PostCreate = (props) => {
  const nav = useNavigate()
  const [postInfo, setPostInfo] = useState({
    photo: "",
    text: "",
    id: props.user.id
  })

  const handleChange = (event) => {
    setPostInfo({...postInfo, [event.target.name]: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.createPost(postInfo)
    nav(`/users/${props.user.id}`)
    setPostInfo({
      photo: "",
      text: "",
      id: props.user.id
    })
  }



  return (
    <div className="createPost">

      <div className="postingLeft">
        <img src="https://images.unsplash.com/photo-1473413896661-b611b2098a19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG9ncmFwaGVyJTIwbGVuc3xlbnwwfHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=500&q=60" alt= "Post page Image" />
      </div>

      <form className="postingForm" onSubmit={handleSubmit}>

        <h2>What do you want to post for {props.user.vendor_name}?</h2>

        <TextField
          id="outlined-basic"
          label="Photo URL"
          sx = {{color: "main"}}
          margin= "normal"
          variant="outlined"
          value= {postInfo.photo}
          name= "photo"
          onChange={handleChange}
          />


        <TextField
          id="outlined-basic"
          label="Text"
          placeholder="What do you want to say about this post?"
          sx = {{color: "main"}}
          margin= "normal"
          variant="outlined"
          value= {postInfo.text}
          name= "text"
          onChange={handleChange}
          />

<Button variant="contained" type="submit">Publish Post
  <CheckCircle/>
</Button>

      </form>
    </div>
  )
}

export default PostCreate;