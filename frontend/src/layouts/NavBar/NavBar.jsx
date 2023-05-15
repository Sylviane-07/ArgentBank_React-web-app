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
import {
  apiSlice,
  useUserProfileMutation,
} from "../../redux/features/apiSlice";
import { setIsAuthenticated } from "../../redux/features/authSlice";
import { setIsUpdateUser } from "../../redux/features/updateUserSlice";
//Redux
import { useDispatch } from "react-redux";

function NavBar() {
  const dispatch = useDispatch();
  //RTK Query
  // eslint-disable-next-line
  const [userProfile, { data: profileData }] = useUserProfileMutation({
    fixedCacheKey: "userProfileData",
  });

  //Event Handlers
  //handleLogOut => remove token and reset queries cached data
  const handleLogOut = () => {
    dispatch(apiSlice.util.resetApiState());
    dispatch(setIsAuthenticated(false));
    dispatch(setIsUpdateUser(false));
    localStorage.removeItem("accessToken");
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
      {profileData ? (
        <div>
          <NavLink className={styles.mainNavItem} to="/profile">
            <FontAwesomeIcon
              aria-hidden="true"
              className={styles.navIcon}
              icon={faUserCircle}
            />
            {profileData?.userName}
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
        <div>
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
