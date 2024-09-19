import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const UserProfile = () => {
  const [profileImage, setProfileImage] = useState(null); 
  const user = useSelector(state => state.auth.user); 

  const handleImageUpload = (event) => {
    const imageFile = event.target.files[0];
    setProfileImage(imageFile); 
  };

  return (
    <div>
      <h2>User Profile</h2>
      <div>
        <img src={user.profileImageUrl} alt="Profile" />
        <input type="file" onChange={handleImageUpload} />
      </div>
      <div>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        
      </div>
    </div>
  );
};

export default UserProfile;
