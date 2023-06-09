import React from "react";
import '../App.css'
import { useParams } from "react-router-dom";
import Post from "../components/Post";


const Profile = (props) => {
  const params = useParams()
  const id = parseInt(params.id)
  const prof = props.profileData
  const person = prof.find((user) => user.id === id)
  
  

  if (person.vendor_type === 0) {
    person.vendor_type = "Planner"
  }
  if (person.vendor_type === 1) {
    person.vendor_type = "Day-of-coordinator"
  }
  if (person.vendor_type === 2) {
    person.vendor_type = "Food Caterning"
  }
  if (person.vendor_type === 3) {
    person.vendor_type = "DJ/Entertainment"
  }
  if (person.vendor_type === 4) {
    person.vendor_type = "Photography/Videography"
  }
  if (person.vendor_type === 5) {
    person.vendor_type = "Floral Design"
  }
  if (person.vendor_type === 6) {
    person.vendor_type = "Officiant"
  }

  return(
  <div>

    <div>
      <h1>{person.vendor_name}</h1>
      <h3>{person.vendor_type}</h3>
      <p>{person.bio}</p>
    </div>
    <div>
      <img src={person.profile_photo} alt={person.username}/>
      <h3>{person.location}</h3>
      

      <div>
      {props.postData.map((post) => {
        if (post.post_owner.id === id) {
        return <Post {...post} key={post.id} />
      }
      })}
    </div>
    </div>

  </div>
  )
}

export default Profile;