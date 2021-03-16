/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import '@fortawesome/fontawesome-free/css/fontawesome.css';
import '@fortawesome/fontawesome-free/css/all.css';
import Auth_Database from "../../Container/Auth";
import { getCookie } from "../../utils/cookie-utils";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const SideNav = () => {
  const [toggleClass, setToggle] = useState("close-nav");
  const [visibleClass, setVisible] = useState(false);

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

        <div>
          <Auth_Database
             visible = {visibleClass}
             >
          </Auth_Database>
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
          if (getCookie("MASTER_LOGIN") === "exists") setVisible(true);
          else  setVisible(false);
        }}
      >
        &nbsp; &#9776; &nbsp; Shan Map Live
      </div>
    </>
  );
};

export default SideNav;
