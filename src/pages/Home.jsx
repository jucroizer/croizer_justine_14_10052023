import React from "react";
import Form from "../components/Form";
import { Link } from "react-router-dom";

// import background from "../assets/Company-bro 1.svg";

import "../styles/Form.css";
import "../styles/Home.css";

function Home() {

  // const localStore = localStorage.getItem("token");
  // console.log(localStore);
  return (
    <div>
      <h1 className="page-title">HRNet</h1>

      <section className="hrnet-form-container" style={{ marginBottom: "1em", zIndex: "10" }}>
        <h2 className="section-title">Create Employee</h2>
        <Form />
      </section>

      <Link to="/employee" className="link">
        View Current Employees
      </Link>
    </div>
  );
}

export default Home;
