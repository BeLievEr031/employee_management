import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Styles from "./Navbar.module.css";
import { DataContext } from "../../context/DataProviderContext";

function Navbar({ setToggle, toggle }) {
  const { employeeData, setEmployeeData, setUpdate } = useContext(DataContext);

  const handleNewEmloyee = () => {
    setUpdate(false);
    setToggle(true);
  };
  return (
    <div className={Styles.navBar}>
      1
      <button className={Styles.addBtn} onClick={handleNewEmloyee}>
        A
      </button>
      <Link to={"/register"}>signout</Link>
    </div>
  );
}

export default Navbar;
