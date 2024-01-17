import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

// custom hook that returns the context we created
export function useAuth() {
  return useContext(AuthContext);
}
const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  loading: true,
};
const AuthProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  const login = async (email, password) => {
    setState({ ...state, loading: true });
    try {
      const response = await axios.post(
        "http://localhost:9000/api/auth/login",
        { email, password }
      );
      // console.log(email, password);

      setState({ loading: false, user: response.data.details });
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };
  const logout = () => {
    localStorage.removeItem("user");
    setState({ ...state, user: null });
    // setState(initialState);
  };
  const value = { login, state, logout };
  return (
    <>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
