

// src/components/Profile.js
import React, { useContext } from 'react';
import { AuthContext } from "./AuthContext";


const Profile = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="profile">
      <h2>Profile</h2>
      {user ? (
        <div>
          <p>
            Welcome, {user.firstName} {user.lastName}!
          </p>
          <p>Email: {user.email}</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <p>Please login or signup.</p>
      )}
    </div>
  );
};

export default Profile;