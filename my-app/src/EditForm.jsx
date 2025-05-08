import React, { useState } from 'react';
import './EditForm.css'

function EditForm({ user, onUpdate, onCancel }) {
  const [editedUser, setEditedUser] = useState(user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(editedUser);
  };

  return (
    <form className="edit-form" onSubmit={handleSubmit}>
      <input type="text" name="name" value={editedUser.name} onChange={handleChange} placeholder="Name" />
      <textarea name="bio" value={editedUser.bio} onChange={handleChange} placeholder="Bio" />
      <input type="text" name="location" value={editedUser.location} onChange={handleChange} placeholder="Location" />
      <input type="email" name="email" value={editedUser.email} onChange={handleChange} placeholder="Email" />
      <button type="submit">Update</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
}

export default EditForm;