import React from "react";
import { Link } from "react-router-dom";

type ProfileInfo = {
  name: string;
  tag: string;
  avatar?: string;
};

const ProfileInfo = (props: ProfileInfo) => {
  return (
    <div className="profile-info burger-menu__profile-info">
      <img
        src="/assets/profile/avatar.png"
        className="profile-info__avatar"
      ></img>
      <div className="container profile-info__container">
        <Link to="/profile/:id" className="profile-info__name">
          {props.name}
        </Link>
        <br />
        <span className="profile-info__tag">{`@${props.tag}`}</span>
      </div>
    </div>
  );
};

export default ProfileInfo;
