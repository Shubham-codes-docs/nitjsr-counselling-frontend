import React from "react";
import classes from "./mainnav.module.css";

const MainNav = () => {
  return (
    <>
      <nav className={classes["main-nav"]}>
        <img src="" alt="logo of nmhct" />
        <h2 className={classes["main-heading"]}>NIMCET - 2020</h2>
        <p className={classes["lead-para"]}>NIT MCA COMMON ENTRANCE TEST</p>
      </nav>
    </>
  );
};

export default MainNav;
