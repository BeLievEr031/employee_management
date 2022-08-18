import React, { useContext } from "react";
import { DataContext } from "../../context/DataProviderContext";

import Styles from "./Card.module.css";
function Card({
  employeeData,
  setEmployeeData,
  setToggle,
  elem,
  setUpdate,
  setUpdatingDataToModel,
}) {
  const { isUpdate, setUpdateId, setDataForUpdate } = useContext(DataContext);

  const handleDelete = () => {
    const filteredEmployee = employeeData.filter((data) => {
      return data._id !== elem._id;
    });
    setEmployeeData([...filteredEmployee]);
  };

  const handleUpdate = () => {
    setToggle(true);
    setUpdate(true);
    setUpdatingDataToModel(elem);
  };

  return (
    <div className={Styles.container}>
      <div className={Styles.imgCont}>
        <img src="/images/icon2.jpg" alt="" />
      </div>
      <div className={Styles.empDetail}>
        <h1>{elem.name}</h1>
        <h3>{elem.email}</h3>
        <h3>Phone:{elem.phone}</h3>
        <h3>Salary:{elem.salary}</h3>
      </div>

      <div className={Styles.actionBtn}>
        <button className={`${Styles.btn}`} onClick={handleUpdate}>
          Edit
        </button>
        <button className={`${Styles.btn}`} onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Card;
