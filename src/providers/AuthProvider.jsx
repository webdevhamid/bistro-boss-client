import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

import { app } from "../firebase/firebase.config";

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // External Providers
  const googleProvider = new GoogleAuthProvider();

  // Sign with Google
  const handleGoogleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };
  // Verify email
  const verifyEmail = () => {
    return sendEmailVerification(user);
  };
  // Create new user using email and password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Update profile
  const updateUserProfile = (userName) => {
    return updateProfile(auth.currentUser, {
      displayName: userName,
    });
  };

  // Sign in user using email and password
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Logout user
  const logoutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  // Current User Observer
  useEffect(() => {
    // Register the observer
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // Set the current user
      setUser(currentUser);
      // Set the loading state to 'False'
      setLoading(false);

      // Log the current to the console
      console.log("current user", currentUser);
    });
    // Cleanup function to stop listening to the changes later (When the component unmounts)
    return () => {
      return unsubscribe();
    };
  }, []);

  // console.log("Alternative way to get the current user", auth.currentUser);

  // Context values that will be passed to the AuthContext
  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    handleGoogleSignIn,
    verifyEmail,
    createUser,
    signInUser,
    logoutUser,
    updateUserProfile,
  };

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
