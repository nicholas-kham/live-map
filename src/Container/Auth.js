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

  const Auth_Database = ({ visible, loading, onOkClick }) => {
      
      return(
        <div className={`${visible ? 'visible' : 'hide'}`}>
          <FirebaseAuthProvider {...config} firebase={firebase}>
            <State initial={{ isLoading: false }}>
            {({ state, setState }) => (
                <React.Fragment>
                <div>isLoading : {JSON.stringify(state.isLoading)}</div>
                <IfFirebaseAuthed>
                    <div>
                    <h2>You&apos;re signed in 🎉 </h2>
                    <button
                        onClick={async () => {
                        setState({ isLoading: true });
                        await firebase
                            .app()
                            .auth()
                            .signOut();
                        setState({ isLoading: false });
                        }}
                    >
                        Sign out
                    </button>
                    </div>
                </IfFirebaseAuthed>
                <IfFirebaseUnAuthed>
                    <div>
                    <h2>You&apos;re not signed in </h2>
                    <button
                        onClick={async () => {
                        setState({ isLoading: true });
                        await firebase
                            .app()
                            .auth()
                            .signInAnonymously();
                        setState({ isLoading: false });
                        }}
                    >
                        Sign in anonymously
                    </button>
                    <button
                        onClick={() => {
                        setState({ isLoading: true });
                        const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
                        //googleAuthProvider.addScope('https://www.googleapis.com/auth/contacts.readonly');
                        firebase.auth().signInWithPopup(googleAuthProvider);
                        //setState({ isLoading: false });
                        }}
                    >
                        Sign in with Google
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