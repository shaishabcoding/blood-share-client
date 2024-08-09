// import { useContext } from "react";
// import { AuthContext } from "../providers/auth/AuthProvider";

// const useAuth = () => useContext(AuthContext);
const useAuth = () => ({
  user: {
    displayName: "Shaishab Chandra Shil",
    email: "shaishab316@gmail.com",
    photoURL: "/logo.png",
  },
  loading: false,
}); //remove
export default useAuth;
