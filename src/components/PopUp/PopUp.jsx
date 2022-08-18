import React, { useContext, useState, useRef, useEffect } from "react";
import { DataContext } from "../../context/DataProviderContext";
import Styles from "./PopUp.module.css";
function PopUp({ toggle, setToggle }) {
  const {
    employeeData,
    setEmployeeData,
    isUpdate,
    setUpdate,
    dataForUpdate,
    inputEmployee,
    setInputEmployee,
  } = useContext(DataContext);

  const handleSave = () => {
    setInputEmployee({
      ...inputEmployee,
      _id:
        "aghabh" + Math.random() * 1000 + 45 * 2 + "dgayahgfyufayuafvyafayuafv",
    });
    employeeData.push(inputEmployee);
    setEmployeeData([...employeeData]);
    setToggle(false);
  };

  const handleUpdate = () => {
    let idx;
    for (let i = 0; i < employeeData.length; i++) {
      if (employeeData[i]._id === inputEmployee._id) {
        idx = i;
        break;
      }
    }
    employeeData[idx].name = inputEmployee.name;
    employeeData[idx].email = inputEmployee.email;
    employeeData[idx].phone = inputEmployee.phone;
    employeeData[idx].salary = inputEmployee.salary;
    setUpdate(false);
    setToggle(false);
  };

  const handleInputValue = (e) => {
    setInputEmployee({ ...inputEmployee, [e.target.name]: e.target.value });
  };

  return (
    <div
      className={Styles.container}
      style={
        toggle
          ? {
              transform: `translate(-50%, -50%)`,
            }
          : { transform: `translate(-50%, -200%)` }
      }
    >
      <div className={Styles.compContainer}>
        <h1 className={Styles.header}>Enter Employee Details</h1>

        <div className={Styles.field}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            className={Styles.input}
            value={inputEmployee.name}
            onChange={(e) => {
              handleInputValue(e);
            }}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className={Styles.input}
            value={inputEmployee.email}
            onChange={(e) => {
              handleInputValue(e);
            }}
          />
          <input
            type="number"
            placeholder="Contact"
            name="phone"
            className={Styles.input}
            value={inputEmployee.phone}
            onChange={(e) => {
              handleInputValue(e);
            }}
          />
          <input
            type="number"
            placeholder="Salary"
            name="salary"
            className={Styles.input}
            value={inputEmployee.salary}
            onChange={(e) => {
              handleInputValue(e);
            }}
          />
          <div className={Styles.actionsBtnCont}>
            <button
              className={Styles.actionsBtn}
              onClick={isUpdate ? handleUpdate : handleSave}
            >
              {isUpdate ? "Update" : "Save"}
            </button>
            <button
              className={Styles.actionsBtn}
              onClick={() => {
                setToggle(false);
              }}
            >
              Cancle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopUp;
