/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer
} from "@react-firebase/auth";

const SideNav = () => {
  const [toggleClass, setToggle] = useState("close-nav");
  return (
    <>
      <div id="mySidenav" className={`sidenav ${toggleClass}`}>
        <div
          className="closebtn"
          onClick={() => {
            setToggle("close-nav");
          }}
        >
          &times;
        </div>
        <Link to="/home">Home</Link>
        <div style={{margin: "20px 8px 8px 40px"}}>
          <button className="button1"> Sign In</button>
          <br></br>
          <button className="button"> Sign Out</button>
        </div>
      </div>

      <div
        style={{
          fontSize: "20px",
          cursor: "pointer",
          background: "#6f6f6f",
          color: "white",
          position: "fixed",
          zIndex: "1000",
          width: "100%",
          padding: "5px"
        }}
        onClick={() => {
          setToggle("open-nav");
        }}
      >
        &nbsp; &#9776; &nbsp; Shan Map Live
      </div>
    </>
  );
};

export default SideNav;
