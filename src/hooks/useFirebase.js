import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import app from "../firebase.init";
const auth = getAuth(app);

const useFirebase = () => {
  const [user, setUser] = useState({});
  const googleProvider = new GoogleAuthProvider();

  // sign in with google account
  const signWithGoogleAccount = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  //sign out function
  const handleSignOut = () => {
    signOut(auth).then(() => {});
  };

  return { signWithGoogleAccount, user, handleSignOut };
};

export default useFirebase;
