import { useState } from "react";
import { createContext } from "react";
import { Route, Router, Routes, useRoutes } from "react-router-dom";

import router from "./router";

export const AuthContext = createContext();

function App() {
  const [user, setUser] = useState({
    name: "Linh Duy",
    avatar: "https://cfdcircle.vn/files/teachers/trannghia.jpg",
  });

  const element = useRoutes(router);
  return (
    <AuthContext.Provider value={{ user }}>{element} </AuthContext.Provider>
  );
}

export default App;
