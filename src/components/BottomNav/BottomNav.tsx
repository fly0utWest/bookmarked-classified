import React from 'react'
import BottomNavButton from "./BottomNavButton/BottomNavButton";
import homeIcon from "./BottomNavButton/home.svg";
import searchIcon from "./BottomNavButton/search.svg";
import notificationIcon from './BottomNavButton/notification.svg';
import profileIcon from "./BottomNavButton/user.svg";


const bottomNav = () => {
  return (
    <nav className="bottom-nav">
      <BottomNavButton dest={"/home"} src={homeIcon} alt={"Home link"} />
      <BottomNavButton dest={"/search"} src={searchIcon} alt={"Home link"} />
      <BottomNavButton dest={"/notifications"} src={notificationIcon} alt={"Notification link"} />
      <BottomNavButton dest={"/profile/:id"} src={profileIcon} alt={"Profile link"} />
    </nav>
  );
}

export default bottomNav