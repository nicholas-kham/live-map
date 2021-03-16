/* eslint-disable react/react-in-jsx-scope */
  import {
    FirebaseAuthProvider,
    IfFirebaseAuthed,
    IfFirebaseUnAuthed
  } from "@react-firebase/auth";
  import firebase from "firebase/app";
  import "firebase/auth";
  import { config } from "../config";

  function AuthDatabase() {
      return(
        <FirebaseAuthProvider {...config} firebase={firebase}>
        <div>
        <IfFirebaseAuthed>
        {() => (
        <div>
            <h2>You&apos;re signed in 🎉 </h2>
            <button
            onClick={() => {
                firebase
                .app()
                .auth()
                .signOut();
            }}
            >
            Sign out
            </button>
        </div>
        )}
    </IfFirebaseAuthed>
    <IfFirebaseUnAuthed>
        {({ firebase }) => (
        <div>
            <h2>You&apos;re not signed in </h2>
            <button
            onClick={() => {
                firebase
                .app()
                .auth()
                .signInAnonymously();
            }}
            >
            Sign in anonymously
            </button>
        </div>
        )}
    </IfFirebaseUnAuthed>
        </div>
    </FirebaseAuthProvider>
   )
  }

  export default AuthDatabase;