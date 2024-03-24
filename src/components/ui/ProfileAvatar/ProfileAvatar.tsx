import React from "react";
import { ProfileAvatarProps } from "../../../types";

const ProfileAvatar: React.FC<ProfileAvatarProps> = ({username, classModifier}) => {
  const firstLater: string = username?.charAt(0)!;
  
  return (
    <div className={`profile-avatar ${classModifier ? classModifier : ''}`}>
      {firstLater}
    </div>
  );
};

export default ProfileAvatar;
