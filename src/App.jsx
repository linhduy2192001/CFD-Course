import { Suspense, useState } from "react";
import { createContext } from "react";
import { Route, Router, Routes, useRoutes } from "react-router-dom";
import { AuthProvider } from "./hooks/useAuth";
import store from "./store";

import router from "./router";

function App() {
  const element = useRoutes(router);
  return (
    <Suspense fallback={<div>Loading ...</div>}>
      {" "}
      <AuthProvider>{element} </AuthProvider>;
    </Suspense>
  );
}

export default App;
