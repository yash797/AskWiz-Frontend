import React from 'react';
import {useParams} from 'react-router-dom';
const Profile = () => {
  const {username}=useParams();
  console.log(username);

  return (
    <div>Profile</div>
  )
}

export default Profile