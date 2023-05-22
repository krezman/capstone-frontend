import React from "react";
import '../App.css'
import Post from "./Post";


const loading = () => {
  return <h1>Please wait while the data is loading...</h1>
};

const loaded = (postData) => {
  console.log(postData)
  if (postData.length === 0) {
    return <h1>No Posts Found Currently...</h1>
  }

  return (
    <div>
      {postData.map((post) => {
        return <Post {...post} key={post.id} />
      })}
    </div>
  )
}

const Posts = ({postData}) => {
   
  return (
    <div>
      {postData !== null ? loaded(postData) : loading()}
    </div>
  )
}

export default Posts;