import React from "react";
import '../App.css'
import Post from "./Post";
import Footer from "./Footer";


const loading = () => {
  return <h1>Please wait while the data is loading...</h1>
};

const loaded = (postData) => {
  console.log(postData)
  if (postData.length === 0) {
    return <h1>No Posts Found Currently...</h1>
  }

  return (
    <div className="indexMain">
      {postData.map((post) => {
        return <Post {...post} key={post.id} />
      })}
    </div>
  )
}

const Posts = ({postData}) => {
   
  return (
    <>
      <div className="posts">
        {postData !== null ? loaded(postData) : loading()}
      </div>
      <Footer/>
    </>
  )
}

export default Posts;