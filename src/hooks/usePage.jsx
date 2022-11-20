import { useContext, useEffect } from "react";
import { createContext, useState } from "react";
import userService from "../services/userService";

const Context = createContext();

export const PageProvider = ({ children }) => {
  const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);
  const [user, setUser] = useState(() => {
    const user = localStorage.getItem("user");
    if (user) return JSON.parse(user);
    return null;
  });
  useEffect(() => {
    (async () => {
      let token = localStorage.getItem("token");
      if (token) {
        const user = await userService.getInfo();
        localStorage.setItem("user", JSON.stringify(user.data));
        setUser(user.data);
      }
    })();
  }, []);
  return (
    <Context.Provider
      value={{ isOpenLoginModal, setIsOpenLoginModal, user, setUser }}
    >
      {children}
    </Context.Provider>
  );
};
export const usePage = () => useContext(Context);
