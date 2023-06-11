import DataTable from "datatable_react_nicolay";

import * as employeeActions from "../store/storeSlice";
import { useSelector } from "react-redux";
import "datatable_react_nicolay/dist/cjs/styles/style.css";

function CreateEmployees() {
  const selectEmployee = useSelector(employeeActions.selectEmployee);

  const data = selectEmployee;

  const labels = [
    { label: "First Name", id: "firstName", type: "string" },
    { label: "Last Name", id: "lastName", type: "string" },
    { label: "Birth Date", id: "birthDate", type: "date" },
    { label: "Start Date", id: "startDate", type: "date" },
    { label: "Street Address", id: "streetAddress", type: "string" },
    { label: "City", id: "city", type: "string" },
    { label: "ZipCode", id: "zipCode", type: "string" },
    { label: "State", id: "state", type: "string" },
    { label: "Department", id: "department", type: "string" },
  ];

  return (
    <div>
      <h1 style={{color:"white"}}>Current Employees</h1>

      <section style={{ width: "90%", margin:'0 auto' }}>
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
