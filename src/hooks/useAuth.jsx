import { useContext } from "react";
import { createContext, useState } from "react";

const AuthenticationContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const onLogin = () => {
    setUser({
      name: "Phan Ngọc Linh Duy",
      avatar: "https://cfdcircle.vn/files/teachers/trannghia.jpg",
    });
  };
  const onLogout = (ev) => {
    ev.preventDefault();
    setUser();
  };
  return (
    <AuthenticationContext.Provider value={{ user, onLogin, onLogout }}>
      {children}
    </AuthenticationContext.Provider>
  );
};
export const useAuth = () => useContext(AuthenticationContext);
