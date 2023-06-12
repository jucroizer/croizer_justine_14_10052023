import React from "react";
import Form from "../components/Form";
import { Link } from "react-router-dom";
import "../styles/Form.css";
import "../styles/Home.css";

function Home() {
  return (
    <div className="container">
      <h1 className="page-title">HRNet</h1>
      <Link to="/employee" className="link">
        View Current Employees
      </Link>
      <section
        className="hrnet-form-container"
        style={{ marginBottom: "1em", zIndex: "10" }}
      >
        <h2 className="section-title">Create Employee</h2>
        <Form />
      </section>
    </div>
  );
}

export default Home;
