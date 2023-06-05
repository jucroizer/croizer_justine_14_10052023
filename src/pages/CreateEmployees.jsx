// import {DataTable} from 'datable-react';
// import mockData from "../MockData";
// import { useParams } from "react-router-dom";
// import {Header} from 'datable-react';
// import {Table} from 'datable-react';
// import {Footer} from 'datable-react';

import { Store } from "../store/store";

function CreateEmployees() {

    const userInfo = Store.getState();
    console.log(userInfo);
    const employee = userInfo.employee;
    console.log(employee);
    // const user = userInfo.userInfos;

  return (
    <div
    style={{color: "white"}}
    >
      <h1>Current Employees</h1>

      <section>
        {/* <DataTable labels={labels} data={userInfo}/> */}
        {/* <Header labels={labels} data={userInfo} /> */}
        {/* <Table labels={labels} data={userInfo} /> */}
      </section>
    </div>
  );
}

export default CreateEmployees;
