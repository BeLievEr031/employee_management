import React, { Children, createContext } from "react";
import { useState } from "react";
const DataContext = createContext();
function DataProviderContext({ children }) {
  const [isUpdate, setUpdate] = useState(false);
  const [dataForUpdate, setDataForUpdate] = useState(null);
  const [updateId, setUpdateId] = useState(null);
  const [employeeData, setEmployeeData] = useState([
    {
      _id: 1,
      name: "Sandy",
      email: "abc@gmail.com",
      phone: "2587413698",
      salary: 1234568,
    },
    {
      _id: 2,
      name: "Ankur",
      email: "abc@gmail.com",
      phone: "2587413698",
      salary: 1234568,
    },
    {
      _id: 3,
      name: "Suyash",
      email: "abc@gmail.com",
      phone: "2587413698",
      salary: 1234568,
    },
    {
      _id: 4,
      name: "Anish",
      email: "abc@gmail.com",
      phone: "2587413698",
      salary: 1234568,
    },
    {
      _id: 5,
      name: "Jagdish",
      email: "abc@gmail.com",
      phone: "2587413698",
      salary: 1234568,
    },
  ]);

  const [inputEmployee, setInputEmployee] = useState({
    name: "",
    email: "",
    phone: "",
    salary: "",
  });

  const setUpdatingDataToModel = (elem) => {
    const employeeDataForUpdate = {
      _id: elem._id,
      name: elem.name,
      email: elem.email,
      phone: elem.phone,
      salary: elem.salary,
    };

    setInputEmployee(employeeDataForUpdate);
  };

  return (
    <DataContext.Provider
      value={{
        isUpdate,
        setUpdate,
        employeeData,
        setEmployeeData,
        updateId,
        setUpdateId,
        dataForUpdate,
        setDataForUpdate,
        setUpdatingDataToModel,
        inputEmployee,
        setInputEmployee,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export { DataContext, DataProviderContext };
