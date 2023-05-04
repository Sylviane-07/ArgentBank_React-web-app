import React from 'react'
import { NavLink } from 'react-router-dom';
//assets
import logo from '../../assets/argentBankLogo_webp.webp'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
//Styles
import styles from "./NavBar.module.css"

function NavBar() {
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
        <div>
          <NavLink className={styles.mainNavItem} to="./signin">
            <FontAwesomeIcon
              className={styles.userCircleIcon}
              icon={faUserCircle}
            />
            Sign In
          </NavLink>
        </div>
      </nav>
    );
}

export default NavBar
