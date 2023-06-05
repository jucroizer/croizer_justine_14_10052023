import React, { useState } from "react";
import { DatePickerInput } from "@mantine/dates";
// import { NumberInput } from "@mantine/core";
import Dropdown from "./Dropdown";

import { setEmployee } from "../store/storeSlice";
import { useDispatch } from "react-redux";


import "../styles/Form.css";


function Form() {
  // const [value, setValue] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("AL");
  // const [zipCode, setZipCode] = useState();
  const [department, setDepartment] = useState("Sales");
  // const [formValid, setFormValid] = useState(false);

  console.log(new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit'}).format(birthDate))


  const departments = [
    { id: 1, name: "Sales" },
    { id: 2, name: "Marketing" },
    { id: 3, name: "Engineering" },
    { id: 4, name: "Human Resources" },
    { id: 5, name: "Finance" },
    { id: 6, name: "Legal" },
    { id: 7, name: "Operations" },
    { id: 8, name: "Product" },
    { id: 9, name: "Design" },
    { id: 10, name: "Customer Success" },
    { id: 11, name: "IT" },
    { id: 12, name: "Other" },
  ];

  const states = [
    { id: 1, name: "Alabama" },
    { id: 2, name: "Alaska" },
    { id: 3, name: "Arizona" },
    { id: 4, name: "Arkansas" },
    { id: 5, name: "California" },
    { id: 6, name: "Colorado" },
    { id: 7, name: "Connecticut" },
    { id: 8, name: "Delaware" },
    { id: 9, name: "Florida" },
    { id: 10, name: "Georgia" },
    { id: 11, name: "Hawaii" },
    { id: 12, name: "Idaho" },
    { id: 13, name: "Illinois" },
    { id: 14, name: "Indiana" },
    { id: 15, name: "Iowa" },
    { id: 16, name: "Kansas" },
    { id: 17, name: "Kentucky" },
    { id: 18, name: "Louisiana" },
    { id: 19, name: "Maine" },
    { id: 20, name: "Maryland" },
    { id: 21, name: "Massachusetts" },
    { id: 22, name: "Michigan" },
    { id: 23, name: "Minnesota" },
    { id: 24, name: "Mississippi" },
    { id: 25, name: "Missouri" },
    { id: 26, name: "Montana" },
    { id: 27, name: "Nebraska" },
    { id: 28, name: "Nevada" },
    { id: 29, name: "New Hampshire" },
    { id: 30, name: "New Jersey" },
    { id: 31, name: "New Mexico" },
    { id: 32, name: "New York" },
    { id: 33, name: "North Carolina" },
    { id: 34, name: "North Dakota" },
    { id: 35, name: "Ohio" },
    { id: 36, name: "Oklahoma" },
    { id: 37, name: "Oregon" },
    { id: 38, name: "Pennsylvania" },
    { id: 39, name: "Rhode Island" },
    { id: 40, name: "South Carolina" },
    { id: 41, name: "South Dakota" },
    { id: 42, name: "Tennessee" },
    { id: 43, name: "Texas" },
    { id: 44, name: "Utah" },
    { id: 45, name: "Vermont" },
    { id: 46, name: "Virginia" },
    { id: 47, name: "Washington" },
    { id: 48, name: "West Virginia" },
    { id: 49, name: "Wisconsin" },
    { id: 50, name: "Wyoming" },
  ];

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");

    const newBirthDate = new Intl.DateTimeFormat('fr-FR', {year: 'numeric', month: '2-digit',day: '2-digit'}).format(birthDate);
    const newStartDate = new Intl.DateTimeFormat('fr-FR', {year: 'numeric', month: '2-digit',day: '2-digit'}).format(startDate);

    const employee = {
      firstName: firstName,
      lastName: lastName,
      birthDate: newBirthDate,
      startDate: newStartDate,
      streetAddress: streetAddress,
      city: city,
      state: state,
      // zipCode: zipCode,
      department: department,
    };

    //set the employee to local storage
    localStorage.setItem("employee", JSON.stringify(employee));

    //set the employee to redux store
    dispatch(setEmployee({
      firstName: firstName,
      lastName: lastName,
      birthDate: newBirthDate,
      startDate: newStartDate,
      streetAddress: streetAddress,
      city: city,
      state: state,
      // zipCode: zipCode,
      department: department,
    }));

  };

  return (
    <form className="hrnet-form" onSubmit={onSubmit}>
      <label htmlFor="fname">First Name</label>
      <input
        type="text"
        id="fname"
        name="fname"
        onChange={(e) => setFirstName(e.target.value)}
      />

      <label htmlFor="lname">Last Name</label>
      <input
        type="text"
        id="lname"
        name="lname"
        onChange={(e) => setLastName(e.target.value)}
      />

      <DatePickerInput
        valueFormat="DD/MM/YYYY" // format for input
        label="Date of Birth"
        placeholder="Date of Birth"
        // value={birthDate}
        onChange={setBirthDate}
      />

      <DatePickerInput
        valueFormat="DD/MM/YYYY" // format for input
        label="Start Date"
        placeholder="Start Date"
        // value={startDate}
        onChange={setStartDate}
      />

      <label htmlFor="street">Street</label>
      <input
        type="text"
        id="street"
        name="street"
        onChange={(e) => setStreetAddress( e.target.value )}
      />

      <label htmlFor="city">City</label>
      <input
        type="text"
        id="city"
        name="city"
        onChange={(e) => setCity( e.target.value )}
      />

      <Dropdown
        result={(value) => {
          setState(value);
        }}
        options={states}
      />

      {/* <NumberInput value={0} onChange={setZipCode} /> */}

      <Dropdown 
      result={(value) => {
        setDepartment(value);
      }}
      options={departments} />

      <button type="submit" className="submit-button">
        Save
      </button>
    </form>
  );
}

export default Form;
