/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import * as React from "react";
//import { render } from "react-dom";
  import {
    FirebaseAuthProvider,
    IfFirebaseAuthed,
    IfFirebaseUnAuthed
  } from "@react-firebase/auth";
  import { State } from "react-powerplug";
  import firebase from "firebase/app";
  import "firebase/auth";
  import { config } from "../config";

  const Auth_Database = ({ visible, loading }) => {
      
      return(
        <div className={`loginModel ${visible ? 'visible' : 'hide'}`} 
        style={{
            margin: "20px 8px 8px 40px",
            display: "inline-block",
            fontStyle: "normal",
            fontVariant: "normal",
            textRendering: "auto",
            textDecoration: "inherit",
            WebkitFontSmoothing: "antialiased"}}>
                
          <FirebaseAuthProvider {...config} firebase={firebase}>
            <State initial={{ isLoading: false }}>
            {({ state, setState }) => (
                <React.Fragment>
                <IfFirebaseAuthed>
                    <div>
                    <h2 style={{color: "white"}}> Edit Mode </h2>
                    <button className="logout-btn"
                        onClick={async () => {
                        setState({ isLoading: true });
                        await firebase
                            .app()
                            .auth()
                            .signOut();
                        setState({ isLoading: false });
                            if (state.isLoading) loading();
                        }}
                    >
                        Logout
                    </button>
                    </div>
                </IfFirebaseAuthed>
                <IfFirebaseUnAuthed>
                    <div>
                    <h2 style={{color: "white"}}>View Mode</h2>
                    <button className="login-btn"
                        onClick={() => {
                            setState({ isLoading: true });
                            const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
                            //googleAuthProvider.addScope('https://www.googleapis.com/auth/contacts.readonly');
                            firebase.auth().signInWithPopup(googleAuthProvider);
                            //setState({ isLoading: false });
                            if (state.isLoading) loading();
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