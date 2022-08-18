import React, { useContext, useState } from "react";
import { DataContext } from "../../context/DataProviderContext";
import Navbar from "../Navigation/Navbar";
import Card from "../Card/Card";
import Styles from "./Home.module.css";
import PopUp from "../PopUp/PopUp";
import createHash from "hash-generator";

function Home() {
  const [toggle, setToggle] = useState(false);
  const { employeeData, setEmployeeData, setUpdatingDataToModel, setUpdate } =
    useContext(DataContext);
  return (
    <div className="k">
      <Navbar setToggle={setToggle} toggle={toggle} />
      <div className={Styles.cardContainer}>
        {employeeData.map((elem) => {
          return (
            <Card
              key={createHash(8)}
              elem={elem}
              employeeData={employeeData}
              setEmployeeData={setEmployeeData}
              setToggle={setToggle}
              setUpdate={setUpdate}
              setUpdatingDataToModel={setUpdatingDataToModel}
            />
          );
        })}
      </div>
      <PopUp setToggle={setToggle} toggle={toggle} />
    </div>
  );
}

export default Home;
