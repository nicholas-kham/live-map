/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import '@fortawesome/fontawesome-free/css/fontawesome.css';
import '@fortawesome/fontawesome-free/css/all.css';
import Auth_Database from "../../Container/Auth";
import { getCookie } from "../../utils/cookie-utils";
import { Detector } from "react-detect-offline";
import firebase from "firebase/app";
import "firebase/auth";
import Swal from 'sweetalert2'

const ConnectWarn = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

const SideNav = () => {
  const [toggleClass, setToggle] = useState("close-nav");
  const [visibleClass, setVisible] = useState(false);
  const [preLoginStatus, setperLoginStatus] = useState(false);
  
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var uid = user.uid;
      var userName = user.displayName;
      window.UserName = userName;
      window.UID = uid;
      window.loginStatus = true;
      if(preLoginStatus == false) {
        setperLoginStatus(true);
        userStatus(true);
      }
      //console.log(" Logined as : ", window.UserName, window.UID);
    } else {
        window.userName = null;
        window.UID = null;
        window.loginStatus = false;
        if(preLoginStatus == true) {
          setperLoginStatus(false);
          userStatus(false);
        }
    }
  });

  function userStatus( notiType = false ){
    if( notiType ) {
      ConnectWarn.fire({
        icon: 'success',
        title: 'Admin'
      })
    } else {
      ConnectWarn.fire({
        icon: 'info',
        title: 'User'
      })
    }
  }
  
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
        <h3 className="verNumber" style={{
          fontSize: "15px",
          color: "white",
          padding: "0px 8px 8px 40px",
          display: "block",
          textDecoration: "none"
        }}> Version {process.env.REACT_APP_WEBAPP_VERSION} </h3>
        
        <div>
          <Auth_Database
             visible = { visibleClass }
             logined = {()=>{
              if(preLoginStatus == false) {
                setperLoginStatus(true);
                userStatus(true);
              }
             }}
             logouted = {()=>{
              if(preLoginStatus == true) {
                setperLoginStatus(false);
                userStatus(false);
              }
             }}
             >
          </Auth_Database>
        </div>
        
      </div>

      <div
        style={{
          fontSize: "20px",
          cursor: "pointer",
          background: "rgb(39, 155, 190)",
          color: "white",
          position: "fixed",
          zIndex: "1000",
          width: "100%",
          padding: "5px",
          display: "inline"
        }}
        onClick={() => {
          setToggle("open-nav");
          if (getCookie("MASTER_LOGIN") === "exists") setVisible(true);
          else  setVisible(false);
        }}
      >
        &nbsp; &#9776; &nbsp; Lashio Map Live &nbsp;&nbsp;&nbsp;
        <Detector
          render={({ online }) => {
            return(
                <b className={`${online ? "normal" : "warning"}`}>
                    {online ? "Online" : "Offline"}
                </b>
            )
          }}
        />
        <b className={`${preLoginStatus ? "adminBar" : "userBar"}`}> 
          Admin
        </b>
        
      </div>
    </>
  );
};

export default SideNav;
