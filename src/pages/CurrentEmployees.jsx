import DataTable from "datatable_react_nicolay";

import * as employeeActions from "../store/storeSlice";
import { useSelector } from "react-redux";
// import "datatable_react_nicolay/dist/cjs/styles/style.css";
import "../styles/Employee.css";

function CreateEmployees() {
  const selectEmployee = useSelector(employeeActions.selectEmployee);

  const data = selectEmployee;

  const labels = [
    { label: "First Name", id: "firstName", value: true, sortable: true },
    { label: "Last Name", id: "lastName", value: true, sortable: true },
    { label: "Birth Date", id: "birthDate", value: true, sortable: true },
    { label: "Start Date", id: "startDate", value: true, sortable: true },
    {
      label: "Street Address",
      id: "streetAddress",
      value: true,
      sortable: true,
    },
    { label: "City", id: "city", value: true, sortable: true },
    { label: "ZipCode", id: "zipCode", value: true, sortable: true },
    { label: "State", id: "state", value: true, sortable: true },
    { label: "Department", id: "department", value: true, sortable: true },
  ];

  return (
    <div className="datatable-container">
      <h1 style={{ color: "white" }}>Current Employees</h1>

      <section
        style={{
          width: "90%",
          margin: "0 auto",
          color: "white",
          backgroundColor: "transparent",
        }}
      >
        <DataTable
          columns={labels}
          data={data}
          language={true}
          pagination={true}
        />
      </section>
    </div>
  );
}

export default CreateEmployees;
