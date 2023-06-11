import React from "react";
import '../App.css'
import { useParams } from "react-router-dom";
import ProfilePosts from "../components/ProfilePosts";


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

  if (!person) {
    return ( <h1>Just a second while the profile loads....</h1>)
  } else {

  return(
  <div className="profileBody">

    <div className="profileTop">
      <div className="profileLeft">
        <h1>{person.vendor_name}</h1>
        <img src={person.profile_photo} alt={person.username}/>
        <div>
          <h3>Location:</h3>
          <h2>{person.location}</h2>
          <h3>Type of Vendor:</h3>
          <h2>{person.vendor_type}</h2>
        </div>
      </div>

      <div className="profileRight">
        <h3>Biography</h3>
        <p>{person.bio}</p>
      </div>
    </div>

    <h1 className="profilePostsTitle">Posts by {person.vendor_name}</h1>

    <div className="indexMain">
        {props.postData.map((post) => {
          if (post.post_owner.id === id) {
          return <ProfilePosts {...post} key={post.id} />
        }
        })}
    </div>

    

  </div>
  )
    }
}

export default Profile;