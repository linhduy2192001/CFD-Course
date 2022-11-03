import { useState } from "react";
import { Route, Router, Routes } from "react-router-dom";
import ProfileLayout from "./layouts/ProfileLayout";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages";
import Profile from "./pages/ca-nhan";
import Contact from "./pages/hop-tac";
import Page404 from "./pages/not-found";
import Team from "./pages/than-vien";
import Project from "./pages/ca-nhan/du-an";
import MyCourse from "./pages/ca-nhan/khoa-hoc";
import Payment from "./pages/ca-nhan/lich-su-thanh-toan";
import Coin from "./pages/ca-nhan/coin";
import {
  PROFILE_PATH,
  PROFILE_PROJECT_PATH,
  PROFILE_COURSE_PATH,
  PROFILE_COIN_PATH,
  PROFILE_PAYMENT_PATH,
} from "./config/path";

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/hop-tac" element={<Contact />} />
          <Route path="/thanh-vien" element={<Team />} />
          <Route path={PROFILE_PATH} element={<ProfileLayout />}>
            <Route index element={<Profile />} />
            <Route path={PROFILE_PROJECT_PATH} element={<Project />} />
            <Route path={PROFILE_COURSE_PATH} element={<MyCourse />} />
            <Route path={PROFILE_COIN_PATH} element={<Coin />} />
            <Route path={PROFILE_PAYMENT_PATH} element={<Payment />} />
          </Route>
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;
