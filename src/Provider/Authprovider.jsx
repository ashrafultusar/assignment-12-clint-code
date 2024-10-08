import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../Firebase/firebase.config";
import { toast } from "react-toastify";
import axios from "axios";
import useAxiosSecure, { axiosSecure } from "../Hook/useAxiosSecure";
import useAxiosCommon from "../Hook/useAxiosCommon";

const auth = getAuth(app);
export const AuthContext = createContext(null);

const Authprovider = ({ children }) => {
  const axiosCommon = useAxiosCommon();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // const axiosSecure = useAxiosSecure();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // google login
  const googleProvider = new GoogleAuthProvider();
  const signInGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = async () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // save user
  const saveUser = async (user) => {
    const currentUser = {
      email: user?.email,
      name: user?.displayName,
      role: "User",
      status: "Verified",
      badges: "bronze",
    };
    const { data } = await axios.put(
      `${import.meta.env.VITE_API_URL}/user`,
      currentUser
    );

    return data;
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        // getToken(currentUser.email)
        const userInfo = { email: currentUser.email };
        axiosCommon.post("/jwt", userInfo).then((res) => {
          if (res.data.token) {
            localStorage.setItem("access-token", res.data.token);
          }
        });
        saveUser(currentUser);
      } else {
        localStorage.removeItem("access-token");
      }
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, [axiosCommon]);

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    signInGoogle,
    logOut,
    updateUserProfile,
    saveUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default Authprovider;
