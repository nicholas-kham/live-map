/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import * as React from "react";
import { useState } from "react";
//import { render } from "react-dom";
  import {
    FirebaseAuthProvider,
    IfFirebaseAuthed,
    IfFirebaseUnAuthed
  } from "@react-firebase/auth";
  import { State } from "react-powerplug";
  import firebase from "firebase/app";
  import "firebase/auth";
  import { config, analytics } from "../config";

  const Auth_Database = ({ visible, logined, logouted }) => {
    const [loginStatus, setLoginStatus] = useState(false);
      
      return(
        <div className={`loginModel ${visible ? 'visible' : 'hide'}`} 
        style={{
            margin: "20px 8px 8px 40px",
            fontStyle: "normal",
            fontVariant: "normal",
            textRendering: "auto",
            textDecoration: "inherit",
            WebkitFontSmoothing: "antialiased"}}>
                
          <FirebaseAuthProvider {...config} firebase={firebase}>
            <State initial={{ isLoading: false, error: false }}>
            {({ state, setState }) => (
                <React.Fragment>
                    <IfFirebaseAuthed>
                        <div onLoad={ setLoginStatus(true) }>
                            <h2 style={{color: "white"}}> Edit Mode </h2>
                            <button className="logout-btn"
                                onClick={async () => {
                                    setState({ isLoading: true });
                                    await firebase.app().auth().signOut();
                                    analytics.logEvent('logout');
                                    analytics.setUserProperties({UserType: 'User'});
                                    logouted();
                                    setState({ isLoading: false });
                                }}
                            >
                                Logout
                            </button>
                        </div>
                    </IfFirebaseAuthed>
                    <IfFirebaseUnAuthed>
                        <div onLoad={ setLoginStatus(false) }>
                        <h2 style={{color: "white"}}>View Mode</h2>
                        <button className="login-btn"
                            onClick={async () => {
                                try {
                                  setState({ isLoading: true, error: false });
                                  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
                                  const user = await firebase.auth().signInWithPopup(googleAuthProvider);
                                  const method = user.credential.signInMethod;
                                  analytics.logEvent('login', { method });
                                  analytics.setUserProperties({UserType : 'Admin'});
                                  logined();

                                  setState({ isLoading: false, error: false });
                                } catch (error) {
                                  setState({ isLoading: false, error: false });
                                }
                            }}
                        >
                            Login
                        </button>
                        </div>
                    </IfFirebaseUnAuthed>
                </React.Fragment>
            )}
            </State>
        </FirebaseAuthProvider>
    </div>
   );
  };

  export default Auth_Database;