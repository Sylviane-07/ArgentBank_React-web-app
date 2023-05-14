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
//Redux
import { useDispatch } from "react-redux";

function NavBar() {
  const [userProfile, { data: profileData }] = useUserProfileMutation({
    fixedCacheKey: "userProfileData",
  });

  //handleLogOut => remove token and reset queries cached data
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(apiSlice.util.resetApiState());
    dispatch(setIsAuthenticated(false));
    localStorage.removeItem("accessToken");
  };

  return (
    <nav className={styles.mainNav}>
      <NavLink className={styles.mainNavLogo} to="/">
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
