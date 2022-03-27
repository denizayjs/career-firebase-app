import React from "react";
import {
  Search,
  Home,
  SupervisorAccount,
  BusinessCenter,
  Chat,
  Notifications,
} from "@material-ui/icons";
import "./Header.css";
import HeaderOption from "./HeaderOption";
import { useDispatch } from "react-redux";
import { logout } from "../features/userSlice";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const Header = () => {
  const dispatch = useDispatch();
  const logoutApp = () => {
    dispatch(logout());
    signOut(auth);
  };
  return (
    <div className="header">
      <div className="header__left">
        <img src="logo192.png" alt="logo" />
        <div className="header__search">
          <Search />
          <input type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={Home} title="home" />
        <HeaderOption Icon={SupervisorAccount} title="My Network" />
        <HeaderOption Icon={BusinessCenter} title="jobs" />
        <HeaderOption Icon={Chat} title="Messaging" />
        <HeaderOption Icon={Notifications} title="Notifications" />
        <HeaderOption avatar="logo192.png" title="me" onClick={logoutApp} />
      </div>
    </div>
  );
};

export default Header;
