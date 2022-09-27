import {
  signInWithPopup,
  signOut,
} from "@firebase/auth";
import { auth, loginProvider } from "./config";

export const login = async () => {
  try {
    return (await signInWithPopup(auth, loginProvider)).user;
  } catch (error) {
    console.error("Authen Error =>", error);
  }
};

export const logout = async () => {
  try {
    await signOut(auth)
    window.location.reload()
  } catch (error) {
    console.log("SignOut Error =>", error);
  }
};