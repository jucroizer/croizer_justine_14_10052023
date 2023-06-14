import DataTable from "datatable_react_nicolay";
import * as employeeActions from "../store/storeSlice";
import { useSelector } from "react-redux";
import "../styles/Employee.css";

function CreateEmployees() {
  const selectEmployee = useSelector(employeeActions.selectEmployee);

  const data = selectEmployee;

  const labels = [
    { label: "First Name", id: "firstName", value: true, sortable: true, type:"string" },
    { label: "Last Name", id: "lastName", value: true, sortable: true, type:"string" },
    { label: "Birth Date", id: "birthDate", value: true, sortable: true, type:"date" },
    { label: "Start Date", id: "startDate", value: true, sortable: true, type:"date" },
    {
      label: "Street Address",
      id: "streetAddress",
      value: true,
      sortable: true,
      type:"string"
    },
    { label: "City", id: "city", value: true, sortable: true, type:"string" },
    { label: "ZipCode", id: "zipCode", value: true, sortable: true, type:"string" },
    { label: "State", id: "state", value: true, sortable: true, type:"string" },
    { label: "Department", id: "department", value: true, sortable: true, type:"string" },
  ];


  // data test
  // const dataPersist = [
  //   {
  //     firstName: "John",
  //     lastName: "Doe",
  //     birthDate: "01/01/1990",
  //     startDate: "01/01/2020",
  //     streetAddress: "123 Main St",
  //     city: "New York",
  //     state: "NY",
  //     zipCode: "10001",
  //     department: "IT",
  //   },
  //   {
  //     firstName: "Jane",
  //     lastName: "Doe",
  //     birthDate: "01/01/1990",
  //     startDate: "01/01/2020",
  //     streetAddress: "123 Main St",
  //     city: "New York",
  //     state: "NJ",
  //     zipCode: "10001",
  //     department: "IT",
  //   },
  //   {
  //     firstName: "John",
  //     lastName: "Doe",
  //     birthDate: "01/01/1990",
  //     startDate: "01/01/2020",
  //     streetAddress: "123 Main St",
  //     city: "New York",
  //     state: "NY",
  //     zipCode: "10001",
  //     department: "IT",
  //   },
  //   {
  //     firstName: "Jane",
  //     lastName: "Doe",
  //     birthDate: "01/01/1990",
  //     startDate: "01/01/2023",
  //     streetAddress: "123 Main St",
  //     city: "New York",
  //     state: "NY",
  //     zipCode: "10001",
  //     department: "IT",
  //   },
  //   {
  //     firstName: "John",
  //     lastName: "Doe",
  //     birthDate: "01/01/1990",
  //     startDate: "01/01/2020",
  //     streetAddress: "120 Main St",
  //     city: "New York",
  //     state: "NY",
  //     zipCode: "10001",
  //     department: "IT",
  //   },
  //   {
  //     firstName: "Jane",
  //     lastName: "Doe",
  //     birthDate: "01/01/1990",
  //     startDate: "01/01/2020",
  //     streetAddress: "123 Main St",
  //     city: "New York",
  //     state: "NY",
  //     zipCode: "10001",

  //     department: "IT",
  //   },
  //   {
  //     firstName: "John",
  //     lastName: "Doe",
  //     birthDate: "01/01/1990",
  //     startDate: "01/01/2020",
  //     streetAddress: "123 Main St",
  //     city: "New York",
  //     state: "NY",
  //     zipCode: "10001",
  //     department: "IT",
  //   },
  //   {
  //     firstName: "John",
  //     lastName: "Doe",
  //     birthDate: "01/01/1990",
  //     startDate: "01/01/2020",
  //     streetAddress: "123 Main St",
  //     city: "New York",
  //     state: "NY",
  //     zipCode: "10001",
  //     department: "IT",
  //   },
  //   {
  //     firstName: "Jane",
  //     lastName: "Doe",
  //     birthDate: "01/01/1990",
  //     startDate: "01/01/2020",
  //     streetAddress: "123 Main St",
  //     city: "New York",
  //     state: "NY",
  //     zipCode: "10001",
  //     department: "IT",
  //   },
  //   {
  //     firstName: "John",
  //     lastName: "Doe",
  //     birthDate: "01/01/1990",
  //     startDate: "01/01/2020",
  //     streetAddress: "123 Main St",
  //     city: "New York",
  //     state: "NY",
  //     zipCode: "10001",
  //     department: "IT",
  //   },
  //   {
  //     firstName: "Jane",
  //     lastName: "Doe",
  //     birthDate: "01/01/1990",
  //     startDate: "01/01/2023",
  //     streetAddress: "123 Main St",
  //     city: "New York",
  //     state: "NY",
  //     zipCode: "10001",
  //     department: "IT",
  //   },
  //   {
  //     firstName: "John",
  //     lastName: "Doe",
  //     birthDate: "01/01/1990",
  //     startDate: "01/01/2020",
  //     streetAddress: "120 Main St",
  //     city: "New York",
  //     state: "NY",
  //     zipCode: "10001",
  //     department: "IT",
  //   },
  //   {
  //     firstName: "Jane",
  //     lastName: "Doe",
  //     birthDate: "01/01/1990",
  //     startDate: "01/01/2020",
  //     streetAddress: "123 Main St",
  //     city: "New York",
  //     state: "NY",
  //     zipCode: "10001",

  //     department: "IT",
  //   },
  //   {
  //     firstName: "John",
  //     lastName: "Doe",
  //     birthDate: "01/01/1990",
  //     startDate: "01/01/2020",
  //     streetAddress: "123 Main St",
  //     city: "New York",
  //     state: "NY",
  //     zipCode: "10001",
  //     department: "IT",
  //   },
  //   {
  //     firstName: "John",
  //     lastName: "Doe",
  //     birthDate: "01/01/1990",
  //     startDate: "01/01/2020",
  //     streetAddress: "123 Main St",
  //     city: "New York",
  //     state: "NY",
  //     zipCode: "10001",
  //     department: "IT",
  //   },
  //   {
  //     firstName: "Jane",
  //     lastName: "Doe",
  //     birthDate: "01/01/1990",
  //     startDate: "01/01/2020",
  //     streetAddress: "123 Main St",
  //     city: "New York",
  //     state: "NY",
  //     zipCode: "10001",
  //     department: "IT",
  //   },
  //   {
  //     firstName: "John",
  //     lastName: "Doe",
  //     birthDate: "01/01/1990",
  //     startDate: "01/01/2020",
  //     streetAddress: "123 Main St",
  //     city: "New York",
  //     state: "NY",
  //     zipCode: "10001",
  //     department: "IT",
  //   },
  //   {
  //     firstName: "Jane",
  //     lastName: "Doe",
  //     birthDate: "01/01/1990",
  //     startDate: "01/01/2023",
  //     streetAddress: "123 Main St",
  //     city: "New York",
  //     state: "NY",
  //     zipCode: "10001",
  //     department: "IT",
  //   },
  //   {
  //     firstName: "John",
  //     lastName: "Doe",
  //     birthDate: "01/01/1990",
  //     startDate: "01/01/2020",
  //     streetAddress: "120 Main St",
  //     city: "New York",
  //     state: "NY",
  //     zipCode: "10001",
  //     department: "IT",
  //   },
  //   {
  //     firstName: "Jane",
  //     lastName: "Doe",
  //     birthDate: "01/01/1990",
  //     startDate: "01/01/2020",
  //     streetAddress: "123 Main St",
  //     city: "Washington",
  //     state: "NY",
  //     zipCode: "10001",

  //     department: "IT",
  //   },
  //   {
  //     firstName: "John",
  //     lastName: "Doe",
  //     birthDate: "01/01/1990",
  //     startDate: "01/01/2020",
  //     streetAddress: "123 Main St",
  //     city: "New York",
  //     state: "NY",
  //     zipCode: "10001",
  //     department: "IT",
  //   }
  // ];

  return (
    <div className="container">
      <h1>Current Employees</h1>

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
          arialabels={true} //for screen readers
        />
      </section>
    </div>
  );
}

export default CreateEmployees;
