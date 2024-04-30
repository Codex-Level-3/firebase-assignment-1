"use client";
import { useEffect, useState } from "react";
import { auth, provider } from "./firebaseConfig";
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";

export default function FirebaseAuth() {
  //State Management
  const [userAuth, setUserAuth] = useState(null);

  //Side Effects
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserAuth(user);
      } else {
        setUserAuth(null);
      }
    });
  }, []);

  //Handlers
  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User signed in: ", user.displayName);
      setUserAuth(user);
    } catch (error) {
      console.error("Error signing in: ", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUserAuth(null);
      console.log("User signed out!");
    } catch (error) {
      console.error("Error during signout: ", error);
    }
  };

  return (
    <>
      {!userAuth && (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-5"
          onClick={handleSignIn}
        >
          Sign In w/ Google
        </button>
      )}
      {userAuth && (
        <button
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mb-5"
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      )}
      {userAuth && (
        <p className="text-xl">Welcome back, {userAuth.displayName}!</p>
      )}
      {!userAuth && <p className="text-xl">You are not signed in!</p>}
    </>
  );
}
