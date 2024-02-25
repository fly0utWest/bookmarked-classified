import React from "react";
import ProfileBackground from "./ProfileBackground/ProfileBackground";
import ProfileAvatar from "./ProfileAvatar/ProfileAvatar";

const ProfilePage = () => {
  return (
    <div className="profile">
      <ProfileBackground />
      <ProfileAvatar />
      <div className="profile-page">
        <p className="profile-page__name">Никита</p>
        <p className="profile-page__bio">Плейсхолдер для био</p>
        
      </div>
    </div>
  );
};

export default ProfilePage;
