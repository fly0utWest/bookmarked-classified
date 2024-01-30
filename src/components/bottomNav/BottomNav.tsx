import React from 'react'
import BottomNavButton from "./__button/BottomNavButton";
import homeIcon from "./__button/home.svg";
import searchIcon from "./__button/search.svg";
import notificationIcon from "./__button/notification.svg";
import profileIcon from "./__button/user.svg";


const bottomNav = () => {
  return (
    <nav className="bottom-nav">
      <BottomNavButton dest={"/home"} id="homeButton" src={homeIcon} alt={"Home link"} />
      <BottomNavButton dest={"/search"} id="searchButton" src={searchIcon} alt={"Home link"} />
      <BottomNavButton dest={"/notifications"} id="notifButton" src={notificationIcon} alt={"Notification link"} />
      <BottomNavButton dest={"/profile/:id"} id="profileButton" src={profileIcon} alt={"Profile link"} />
    </nav>
  );
}

export default bottomNav