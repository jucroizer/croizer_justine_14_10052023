import DataTable from "react-data-table-component";
import * as employeeActions from "../store/storeSlice";
import { useSelector } from "react-redux";

function CreateEmployees() {
  const selectEmployee = useSelector(employeeActions.selectEmployee);
  console.log("selectEmployee", selectEmployee);

  const toAnArray = selectEmployee;
  console.log("data", toAnArray);

  //convert toAnArray to an array of objects
  const data = Object.keys(toAnArray).map(() => ({
    firstName: toAnArray.firstName,
    lastName: toAnArray.lastName,
    birthDate: toAnArray.birthDate,
    startDate: toAnArray.startDate,
    streetAddress: toAnArray.streetAddress,
    city: toAnArray.city,
    state: toAnArray.state,
    department: toAnArray.department,
  }));
  console.log("results", data);

  const labels = [
    {
      name: "First Name",
      selector: (row) => row.firstName,
      sortable: true,
    },
    {
      name: "Last Name",
      selector: (row) => row.lastName,
      sortable: true,
    },
    {
      name: "Birth Date",
      selector: (row) => row.birthDate,
      sortable: true,
    },
    {
      name: "Start Date",
      selector: (row) => row.startDate,
      sortable: true,
    },
    {
      name: "Street Address",
      selector: (row) => row.streetAddress,
      sortable: true,
    },
    {
      name: "City",
      selector: (row) => row.city,
      sortable: true,
    },
    {
      name: "State",
      selector: (row) => row.state,
      sortable: true,
    },
    {
      name: "Department",
      selector: (row) => row.department,
      sortable: true,
    },
  ];

  return (
    <div style={{ color: "white" }}>
      <h1>Current Employees</h1>

      <section>
        <DataTable columns={labels} data={data} />
      </section>
    </div>
  );
}

export default CreateEmployees;
