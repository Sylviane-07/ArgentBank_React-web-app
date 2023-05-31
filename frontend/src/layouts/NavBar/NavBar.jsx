import React from "react";
import { NavLink } from "react-router-dom";
//assets
import logo from "../../assets/argentBankLogo.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
//Styles
import styles from "./NavBar.module.css";
//import RTK Query
import { apiSlice } from "../../redux/features/apiSlice";
import { setIsUpdateUser } from "../../redux/features/updateUserSlice";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { PURGE } from "redux-persist";

function NavBar() {
  const dispatch = useDispatch();

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const userName = useSelector((state) => state.auth.userName);

  //Event Handlers
  //handleLogOut => remove token and reset queries cached data
  const handleLogOut = () => {
    dispatch(apiSlice.util.resetApiState());
    sessionStorage.removeItem("accessToken");
    dispatch({ type: PURGE, key: "root", result: () => null });
  };

  //Set UserUpdate to false to display WelcomeUser
  const handleOnclick = () => {
    dispatch(setIsUpdateUser(false));
  };

  return (
    <nav className={styles.mainNav}>
      <NavLink className={styles.mainNavLogo} to="/" onClick={handleOnclick}>
        <img
          className={styles.mainNavLogoImage}
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      {isAuthenticated ? (
        <div className={styles.mainNavItemsWrapper}>
          <NavLink className={styles.mainNavItem} to="/profile">
            <FontAwesomeIcon
              aria-hidden="true"
              className={styles.navIcon}
              icon={faUserCircle}
            />
            {userName}
          </NavLink>
          <NavLink className={styles.mainNavItem} to="/" onClick={handleLogOut}>
            <FontAwesomeIcon
              aria-hidden="true"
              className={styles.navIcon}
              icon={faRightFromBracket}
            />
            Sign Out
          </NavLink>
        </div>
      ) : (
        <div className={styles.mainNavItemsWrapper}>
          <NavLink className={styles.mainNavItem} to="/login">
            <FontAwesomeIcon
              aria-hidden="true"
              className={styles.navIcon}
              icon={faUserCircle}
            />
            Sign In
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
