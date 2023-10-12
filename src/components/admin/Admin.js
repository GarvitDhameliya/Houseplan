import React from "react";
import SideBar from "./SideBar";
import './Admin.css'
import Main from "./Main";

const Admin = () => {
  return (<div id="d-flex">
    <SideBar/>
    <Main/>
  </div>);
};

export default Admin;
