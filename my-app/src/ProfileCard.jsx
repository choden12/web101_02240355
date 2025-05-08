import React from 'react';
import './ProfileCard.css'

function ProfileCard({ user, onEdit }) {
  return (
    <div className="profile-card">
      <img src="/Mr mona lisa.jpg" alt="Avatar" className="avatar" />
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
      <p>Location: {user.location}</p>
      <p>Email: {user.email}</p>
      <button onClick={onEdit}>Edit Profile</button>
    </div>
  );
}

export default ProfileCard;