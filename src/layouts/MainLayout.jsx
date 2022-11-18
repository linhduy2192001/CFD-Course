import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LoginModal from "../components/LoginModal";
import SideBar from "../components/SideBar";

export default function MainLayout() {
  return (
    <>
      <Header />
      <SideBar />
      <Outlet />
      <Footer />
      <LoginModal />
    </>
  );
}
