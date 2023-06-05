// import DataTable from "react-data-table-component";
import { DataTable } from "datable-react";

import * as employeeActions from "../store/storeSlice";
import { useSelector } from "react-redux";

function CreateEmployees() {
  const selectEmployee = useSelector(employeeActions.selectEmployee);

  const toAnArray = selectEmployee;

  // convert toAnArray to an array of objects
  const results = Object.keys(toAnArray).map(() => ({
    firstName: toAnArray.firstName,
    lastName: toAnArray.lastName,
    birthDate: toAnArray.birthDate,
    startDate: toAnArray.startDate,
    streetAddress: toAnArray.streetAddress,
    city: toAnArray.city,
    zipCode: toAnArray.zipCode,
    state: toAnArray.state,
    department: toAnArray.department,
  }));
  console.log("results", results);

  //delete all the duplicate objects in the array
  const data = Array.from(new Set(results.map(JSON.stringify))).map(
    JSON.parse
  );
  console.log("data", data);

  // push data result into a new array
  // const newData = [];
  // data.forEach((item) => {
  //   newData.push(item);
  // });
  // console.log("newData", newData);


  const labels = [
    { text: "First Name", value: "firstName" },
    { text: "Last Name", value: "lastName" },
    { text: "Birth Date", value: "birthDate"},
    { text: "Start Date", value: "startDate" },
    { text: "Street Address", value: "streetAddress" },
    { text: "City", value: "city" },
    { text: "ZipCode", value: "zipCode" },
    { text: "State", value: "state" },
    { text: "Department", value: "department" },
  ];

  // const data = [
  //   {
  //     firstName: "Tyson",
  //     lastName: "Doe",
  //     startDate: "04/14/2021",
  //     department: "Marketing",
  //   },
  //   {
  //     firstName: "Anna",
  //     lastName: "Alia",
  //     startDate: "03/02/2020",
  //     department: "Marketing",
  //   },
  // ];

  return (
    <div style={{ color: "white" }}>
      <h1>Current Employees</h1>

      <section>
        <DataTable
          labels={labels}
          data={data}
          language={true}
          firstBackground={"#038C3E"}
          secondBackground={"#f9bc60"}
          arrowColor={"#022601"}
        />
      </section>
    </div>
  );
}

export default CreateEmployees;
