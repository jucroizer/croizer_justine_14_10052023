import React, { useState } from "react";
import { DateInput } from "@mantine/dates";
import { NumberInput } from "@mantine/core";
import Dropdown from "./Dropdown";
// import Modale from "../components/Modal.jsx";

import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";

import { setEmployee } from "../store/storeSlice";
import { useDispatch } from "react-redux";

import "../styles/Form.css";
import { Link } from "react-router-dom";

function Form() {
  // const [value, setValue] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("Alabama");
  const [zipCode, setZipCode] = useState();
  const [department, setDepartment] = useState("Sales");
  const [formValid, setFormValid] = useState(false);

  const [opened, { open, close }] = useDisclosure(false);

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

    const newBirthDate = new Intl.DateTimeFormat("fr-FR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(birthDate);

    const newStartDate = new Intl.DateTimeFormat("fr-FR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(startDate);

    const employee = {
      firstName: firstName,
      lastName: lastName,
      birthDate: newBirthDate,
      startDate: newStartDate,
      streetAddress: streetAddress,
      city: city,
      state: state,
      zipCode: zipCode,
      department: department,
    };

    // do a validation check here
    if (
      firstName === "" ||
      lastName === "" ||
      birthDate === "" ||
      startDate === "" ||
      streetAddress === "" ||
      city === "" ||
      state === "" ||
      zipCode === "" ||
      department === ""
    ) {
      alert("Please fill in all fields");
      setFormValid(false);
      return;

    } else {

      setFormValid(true);
      //open the modal
      open();

      //set the employee to local storage
      localStorage.setItem("employee", JSON.stringify(employee));

      //set the employee to redux store
      dispatch(
        setEmployee({
          firstName: firstName,
          lastName: lastName,
          birthDate: newBirthDate,
          startDate: newStartDate,
          streetAddress: streetAddress,
          city: city,
          state: state,
          zipCode: zipCode,
          department: department,
        })
      );
    }
  };

  return (
    <>
      <form className="hrnet-form" onSubmit={onSubmit}>
        <input
          className="hrnet-form__input"
          type="text"
          id="fname"
          name="fname"
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
          aria-label="First Name"
        />

        <input
          className="hrnet-form__input"
          type="text"
          id="lname"
          name="lname"
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
          aria-label="Last Name"
        />

        <DateInput
          valueFormat="DD/MM/YYYY" // format for input
          placeholder="Date of Birth"
          onChange={setBirthDate}
          style={{ marginBottom: "20px" }}
          maw={400}
          mx="auto"
          aria-label="Date of Birth"
        />

        <DateInput
          valueFormat="DD/MM/YYYY" // format for input
          placeholder="Start Date"
          onChange={setStartDate}
          style={{ marginBottom: "20px" }}
          maw={400}
          mx="auto"
          aria-label="Start Date"
        />

        <input
          className="hrnet-form__input"
          type="text"
          id="street"
          name="street"
          placeholder="Street"
          onChange={(e) => setStreetAddress(e.target.value)}
          aria-label="Street"
        />

        <input
          className="hrnet-form__input"
          type="text"
          id="city"
          name="city"
          placeholder="City"
          onChange={(e) => setCity(e.target.value)}
          aria-label="City"
        />

        <NumberInput
          defaultValue={0}
          placeholder="Zip Code"
          onChange={setZipCode}
          style={{ marginBottom: "20px" }}
          aria-label="Zip Code"
        />

        <Dropdown
          className="hrnet-form__input"
          result={(value) => {
            setState(value);
          }}
          options={states}
          aria-label="State"
        />

        <Dropdown
          className="hrnet-form__input"
          result={(value) => {
            setDepartment(value);
          }}
          options={departments}
          aria-label="Department"
        />

        <button type="submit" className="submit-button" aria-label="Submit">
          Save
        </button>
      </form>

      <Modal
        opened={opened}
        onClose={close}
        title="Employee Created !"
        transitionProps={{ transition: "fade", duration: 200 }}
      > 
        If you want to see the employee details, please go to the Employee List page.
        <Link to="/employee"/>
      </Modal>
    </>
  );
}

export default Form;
