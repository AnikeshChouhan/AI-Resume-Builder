// eslint-disable-next-line no-unused-vars
import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
// import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      <Outlet />
      {/* <h1>Hello User</h1>
      <Button>click</Button> */}
    </>
  );
}

export default App;
