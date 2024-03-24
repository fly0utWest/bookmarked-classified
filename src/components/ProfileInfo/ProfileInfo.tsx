import React from 'react';
import { Link } from 'react-router-dom';
import { ProfileInfoProps } from '../../types';
import ProfileAvatar from '../ui/ProfileAvatar/ProfileAvatar';

const ProfileInfo: React.FC<ProfileInfoProps> = (props) => {
  return (
    <div className='profile-info burger-menu__profile-info'>
      <Link to={'/user'}>
        <ProfileAvatar
          username={props.name}
          classModifier='profile-info__profile-avatar'
        />
      </Link>
      <div className='container profile-info__container'>
        <Link to='/user' className='profile-info__name'>
          {props.name}
        </Link>
        <br />
        <span className='profile-info__tag'>{`@${props.tag}`}</span>
      </div>
    </div>
  );
};

export default ProfileInfo;
