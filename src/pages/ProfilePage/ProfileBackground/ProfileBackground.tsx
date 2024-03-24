import React from 'react';

const ProfileBackground: React.FC = () => {
  return (
    <div
      className='profile-background'
      style={{ backgroundImage: `url(/assets/profile/default-background.jpg)` }}
    ></div>
  );
};

export default ProfileBackground;
