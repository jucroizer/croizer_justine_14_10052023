import React, { useState } from "react";
import { DateInput } from "@mantine/dates";
import { NumberInput } from "@mantine/core";
import Dropdown from "dropdown-menu-input-react-1";
import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";
import { setEmployee } from "../store/storeSlice";
import { useDispatch } from "react-redux";
import "../styles/Form.css";
import { Link } from "react-router-dom";

/** Form function
 *
 * @returns the component form with validation function and dispatch info to the Redux
*/
function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("Alabama");
  const [zipCode, setZipCode] = useState();
  const [department, setDepartment] = useState("Sales");

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
    { id: 1, name: "Alabama", abbreviation: "AL" },
    { id: 2, name: "Alaska", abbreviation: "AK" },
    { id: 3, name: "Arizona", abbreviation: "AZ" },
    { id: 4, name: "Arkansas", abbreviation: "AR" },
    { id: 5, name: "California", abbreviation: "CA" },
    { id: 6, name: "Colorado", abbreviation: "CO" },
    { id: 7, name: "Connecticut", abbreviation: "CT" },
    { id: 8, name: "Delaware", abbreviation: "DE" },
    { id: 9, name: "Florida", abbreviation: "FL" },
    { id: 10, name: "Georgia", abbreviation: "GA" },
    { id: 11, name: "Hawaii", abbreviation: "HI" },
    { id: 12, name: "Idaho", abbreviation: "ID" },
    { id: 13, name: "Illinois", abbreviation: "IL" },
    { id: 14, name: "Indiana", abbreviation: "IN" },
    { id: 15, name: "Iowa", abbreviation: "IA" },
    { id: 16, name: "Kansas", abbreviation: "KS" },
    { id: 17, name: "Kentucky", abbreviation: "KY" },
    { id: 18, name: "Louisiana", abbreviation: "LA" },
    { id: 19, name: "Maine",  abbreviation: "ME" },
    { id: 20, name: "Maryland", abbreviation: "MD" },
    { id: 21, name: "Massachusetts", abbreviation: "MA" },
    { id: 22, name: "Michigan", abbreviation: "MI" },
    { id: 23, name: "Minnesota", abbreviation: "MN" },
    { id: 24, name: "Mississippi", abbreviation: "MS" },
    { id: 25, name: "Missouri", abbreviation: "MO" },
    { id: 26, name: "Montana", abbreviation: "MT" },
    { id: 27, name: "Nebraska", abbreviation: "NE" },
    { id: 28, name: "Nevada", abbreviation: "NV" },
    { id: 29, name: "New Hampshire", abbreviation: "NH" },
    { id: 30, name: "New Jersey", abbreviation: "NJ" },
    { id: 31, name: "New Mexico", abbreviation: "NM" },
    { id: 32, name: "New York",   abbreviation: "NY" },
    { id: 33, name: "North Carolina", abbreviation: "NC" },
    { id: 34, name: "North Dakota", abbreviation: "ND" },
    { id: 35, name: "Ohio", abbreviation: "OH" },
    { id: 36, name: "Oklahoma", abbreviation: "OK" },
    { id: 37, name: "Oregon", abbreviation: "OR" },
    { id: 38, name: "Pennsylvania", abbreviation: "PA" },
    { id: 39, name: "Rhode Island", abbreviation: "RI" },
    { id: 40, name: "South Carolina", abbreviation: "SC" },
    { id: 41, name: "South Dakota", abbreviation: "SD" },
    { id: 42, name: "Tennessee", abbreviation: "TN" },
    { id: 43, name: "Texas" , abbreviation: "TX"},
    { id: 44, name: "Utah", abbreviation: "UT" },
    { id: 45, name: "Vermont", abbreviation: "VT" },
    { id: 46, name: "Virginia", abbreviation: "VA" },
    { id: 47, name: "Washington", abbreviation: "WA" },
    { id: 48, name: "West Virginia", abbreviation: "WV" },
    { id: 49, name: "Wisconsin", abbreviation: "WI" },
    { id: 50, name: "Wyoming", abbreviation: "WY" },
  ];

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

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

    //replace the state name with the abbreviation
    const abvState = states.find((s) => s.name === state).abbreviation;

    // validation check for empty fields
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
      return;
    } else {
      //if all fields are filled in, then open the modal
      open();

      //set the employee to redux store
      dispatch(
        setEmployee({
          firstName: firstName,
          lastName: lastName,
          birthDate: newBirthDate,
          startDate: newStartDate,
          streetAddress: streetAddress,
          city: city,
          state: abvState,
          zipCode: zipCode,
          department: department,
        })
      );

      // reset the form
      resetForm();
    }
  };

  //reset the form function and empty the fields
  const resetForm = () => {
    document.getElementById("form-hrnet").reset(); //reset the form
    setFirstName("");
    setLastName("");
    setBirthDate(null);
    setStartDate(null);
    setStreetAddress("");
    setCity("");
    setState("");
    setZipCode("");
    setDepartment("");
  };

  return (
    <div>
      <form id="form-hrnet" className="hrnet-form" onSubmit={onSubmit}>
        <div className="form-hrnet-container">
          <div className="hrnet-form-employee">
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
              clearable
              valueFormat="DD/MM/YYYY" // format for input
              placeholder="Date of Birth"
              onChange={setBirthDate}
              style={{ marginBottom: "15px", width: "95%" }}
              maw={400}
              mx="auto"
              aria-label="Date of Birth"
            />

            <DateInput
              clearable
              valueFormat="DD/MM/YYYY" // format for input
              placeholder="Start Date"
              onChange={setStartDate}
              style={{ marginBottom: "15px", width: "95%" }}
              maw={400}
              mx="auto"
              aria-label="Start Date"
            />

            <Dropdown
              // className="hrnet-form__input"
              result={(value) => {
                setDepartment(value);
              }}
              options={departments}
              aria-label="Department"
            />
          </div>

          <div className="hrnet-form-details">
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
              style={{
                marginBottom: "15px",
                width: "95%",
                marginLeft: "0.5em",
              }}
              aria-label="Zip Code"
            />

            <Dropdown
              // className="hrnet-form__input"
              result={(value) => {
                setState(value);
              }}
              options={states}
              aria-label="State"
            />
          </div>
        </div>
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
        If you want to see the employee details, please go to the Employee List
        page.
        <Link to="/employee" />
      </Modal>
    </div>
  );
}

export default Form;
