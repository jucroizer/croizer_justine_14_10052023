import DataTable from "datatable_react_nicolay";
import * as employeeActions from "../store/storeSlice";
import { useSelector } from "react-redux";
import "../styles/Employee.css";
import { Link } from "react-router-dom";

/** CurrentEmployee function
 *
 * retrieve data from the state and display it in a table
 *
 * @returns the Current EMployee page with all the data needed for the different displays
*/
function CurrentEmployees() {
  const selectEmployee = useSelector(employeeActions.selectEmployee);

  const data = [...selectEmployee];

  const labels = [
    {
      label: "First Name",
      id: "firstName",
      value: true,
      sortable: true,
      type: "string",
    },
    {
      label: "Last Name",
      id: "lastName",
      value: true,
      sortable: true,
      type: "string",
    },
    {
      label: "Birth Date",
      id: "birthDate",
      value: true,
      sortable: true,
      type: "date",
    },
    {
      label: "Start Date",
      id: "startDate",
      value: true,
      sortable: true,
      type: "date",
    },
    {
      label: "Street Address",
      id: "streetAddress",
      value: true,
      sortable: true,
      type: "string",
    },
    { label: "City", id: "city", value: true, sortable: true, type: "string" },
    {
      label: "ZipCode",
      id: "zipCode",
      value: true,
      sortable: true,
      type: "number",
    },
    {
      label: "State",
      id: "state",
      value: true,
      sortable: true,
      type: "string",
    },
    {
      label: "Department",
      id: "department",
      value: true,
      sortable: true,
      type: "string",
    },
  ];

  return (
    <div className="container">
      <h1>Current Employees</h1>
      <Link to="/" className="link">
        Home
      </Link>

      <section
        style={{
          width: "90%",
          margin: "0 auto",
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

export default CurrentEmployees;
