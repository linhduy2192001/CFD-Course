import { useContext } from "react";
import { createContext, useState } from "react";

const Context = createContext();

export const PageProvider = ({ children }) => {
  const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);

  return (
    <Context.Provider value={{ isOpenLoginModal, setIsOpenLoginModal }}>
      {children}
    </Context.Provider>
  );
};
export const usePage = () => useContext(Context);
